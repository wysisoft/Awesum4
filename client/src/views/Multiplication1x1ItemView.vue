<script lang="ts">
import { createReusableTemplate } from '@vueuse/core'
import { v7 as uuid } from "uuid";
import { animate } from "motion";

import { awesum } from '@/awesum';
import Fireworks from 'fireworks-js';
import { Balloons } from '../Balloons';
import { confetti } from "@tsparticles/confetti";
import { imageModeType } from "../../../server/typebox";
import { nextTick, ref, getCurrentInstance } from 'vue';
import { I18nGlobal } from '@/i18nGlobal';
import { resources } from '@/resources/Resources';
import type { ServerFollowerDatabaseCompletionInterface } from "../../../server/serverInterfaces/ServerFollowerDatabaseCompletionInterface";
import type { ServerDatabaseItemInterface } from "../../../server/serverInterfaces/ServerDatabaseItemInterface";
import { itemType } from "../../../server/typebox";
import { audioType, imageType } from "../../../server/typebox";
import type { ServerOneByOneMathDatabaseItemInterface } from "../../../server/serverInterfaces/ServerOneByOneMathDatabaseItemInterface";

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()

export default {
  components: {
    DefineTemplate,
    ReuseTemplate,
  },
  setup() {
    //@ts-ignore
    const { type, appContext } = getCurrentInstance()

    // The scopeId Vue generates for this component
    const scopeId = type.__scopeId


    const spellingDiv = ref(null as any as HTMLElement);
    const footerDiv = ref(null as any as HTMLElement);
    const spellingOutlineDiv = ref(null as any as HTMLElement);

    const view = ref(null as any as HTMLDivElement);

    let completedFromLoad = ref(false);
    let clearingUnitItemCompletions = ref(false);

    let mouseDown = ref(false)
    let footerMouseDown = ref(false)

    let mousePos = ref(0)
    let footerMousePos = ref(0)
    let button = ref(null as any as HTMLButtonElement);

    let sliderDoneChanging = ref(false);

    let balloons = ref({} as Balloons);
    let fireworks = ref({} as Fireworks);

    let confettiHandle = ref(0);

    let changedSliders = ref(new Array<Number>());

    let delayRedHandle = ref(0);

    let usedHint = ref(false);

    let selectedLetter = ref('')

    // Input buffer and timer for multi-digit number matching
    let inputBuffer = ref('');
    let inputTimer = ref(0);

    // Grid-related properties from HTML file
    let gridWidth = ref(5);
    let gridHeight = ref(5);
    let isDragging = ref(false);
    let selectedNumber = ref(null);
    let selectedPosition = ref(null);
    let lockedDimension = ref(null); // 'width' or 'height'

    const instance = getCurrentInstance() as any;
    const $awesum = instance.appContext.config.globalProperties.$awesum

    let answer = ($awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.firstNumber * ($awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.secondNumber;

    return {
      usedHint,
      spellingDiv,
      mouseDown,
      mousePos,
      button,
      footerDiv,
      footerMouseDown,
      footerMousePos,
      selectedLetter,
      spellingOutlineDiv,
      view,
      window,
      answer,
      completedFromLoad,
      sliderDoneChanging,
      clearingUnitItemCompletions,
      balloons,
      fireworks,
      confettiHandle,
      changedSliders,
      delayRedHandle,
      // Input buffer and timer
      inputBuffer,
      inputTimer,
      // Grid-related properties
      gridWidth,
      gridHeight,
      isDragging,
      selectedNumber,
      selectedPosition,
      lockedDimension,
      scopeId
    };
  },
  async mounted() {



    document.onkeydown = (e: KeyboardEvent) => {
      if (e.key == 'ArrowLeft') {
        //get all buttons in view ordered by tab index, some buttons are inside of other buttons
        var buttons = document.querySelectorAll('button');
        var currentButton = document.activeElement as HTMLButtonElement;
        var currentIndex = Array.from(buttons).indexOf(currentButton);
        var previousButton = buttons[currentIndex - 1] as HTMLButtonElement;
        if (previousButton) {
          previousButton.focus();
          if (previousButton.parentElement == this.footerDiv) {
            previousButton.scrollIntoView({ behavior: 'instant', inline: 'center' });
          }
        }
        e.stopPropagation();
        e.preventDefault();
      }
      else if (e.key == 'ArrowRight') {
        //get all buttons in view ordered by tab index
        var buttons = document.querySelectorAll('button');
        var currentButton = document.activeElement as HTMLButtonElement;
        var currentIndex = Array.from(buttons).indexOf(currentButton);
        var nextButton = buttons[currentIndex + 1] as HTMLButtonElement;
        if (nextButton) {
          nextButton.focus();
          if (nextButton.parentElement == this.footerDiv) {
            nextButton.scrollIntoView({ behavior: 'instant', inline: 'center' });
          }
        }
        e.stopPropagation();
        e.preventDefault();
      }
    }

    await this.$awesum.refreshCurrentDatabaseItems();

    var itemsInUnit = this.$awesum.currentDatabaseItems;
    var completedItemsInUnit = await this.$awesum.AwesumDexieDB.serverFollowerDatabaseCompletions.where('parentItemId').equals(this.$awesum.currentDatabaseUnit.id).and((followerDatabaseCompletion: ServerFollowerDatabaseCompletionInterface) => followerDatabaseCompletion.itemId != '').toArray();

    //get all itemsInUnit that are not inside completedItemsInUnit
    var incompleteItemsInUnit = itemsInUnit.filter((item: ServerDatabaseItemInterface) => !completedItemsInUnit.some((completedItem: ServerFollowerDatabaseCompletionInterface) => completedItem.itemId == item.id));

    var doneWithUnit = false;
    if (incompleteItemsInUnit.length == 0) {
      this.$router.push('/' + encodeURI(this.$awesum.currentApp.name) + '/' +
        encodeURI(this.$awesum.currentDatabase.name) + '/' +
        encodeURI(this.$awesum.currentDatabaseUnit.name) + '/' +
        I18nGlobal.t(resources.completed.key));
    }
    else {

    }

    this.completedFromLoad = await this.$awesum.AwesumDexieDB.serverFollowerDatabaseCompletions.where('itemId').equals(awesum.currentDatabaseItem.id).count() > 0;



    // animate(".view", 
    // { backgroundColor: ["#0000","#000f"] },
    // {  duration: 2 });

    this.spellingDiv = this.$refs.spellingDiv as HTMLElement;
    this.footerDiv = this.$refs.footerDiv as HTMLElement;





    this.spellingOutlineDiv = this.$refs.spellingOutlineDiv as HTMLElement;



    //commenting this out for now, might need it back later, but don't think i do
    //this.footerDiv.style.width = (items.length ) * 5 + 'svmin';





    var letters = new Array<Array<string>>();

    // if ((awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.letters.length == 0) {
    //   var word = (awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.text;
    //   for (let i = 0; i < word.length; i++) {
    //     const letter = word[i];
    //     const childArray = [letter.toLocaleUpperCase()];
    //     // generate a random list of 6 similar letters
    //     const similarLetters = this.generateSimilarLetters(letter);
    //     for (let j = 0; j < similarLetters.length; j++) {
    //       childArray.push(similarLetters[j]);
    //     }
    //     // shuffle the child array

    //     this.shuffleArray(childArray);

    //     letters.push(childArray);
    //   }

    //   //if the first letter of each letters element spells the word, shuffle again
    //   for (const element of letters) {
    //     if (element[0] == (awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.text[letters.indexOf(element)].toLocaleUpperCase()) {
    //       this.shuffleArray(element);
    //     }
    //   }
    // }
    // else {
    //   var lettersTemp = (awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.letters.split('\n');

    //   var itr = 0;
    //   for (const iterator of lettersTemp) {
    //     var arr = [];
    //     for (const letter of iterator) {
    //       if (letter != ',' && letter != ' ')
    //         arr.push(letter.toLocaleUpperCase());
    //     }

    //     //make sure arr contains the nth letter of the word, if not, add it
    //     if (!arr.includes((awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.text[itr].toLocaleUpperCase())) {
    //       arr.push((awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.text[itr].toLocaleUpperCase());
    //     }

    //     //this.shuffleArray(arr);

    //     letters.push(arr);
    //     itr++;
    //   }
    //}









    var word = this.answer.toString();

    if (this.spellingDiv) {

      this.spellingDiv.onwheel = async (e: WheelEvent) => {
        var spellingDivLeft = this.spellingDiv.getBoundingClientRect().left;
        var parentDivIndex = Math.floor((e.clientX - spellingDivLeft) / 7.5 / 10);
        var parentDiv = this.spellingDiv.children[parentDivIndex + 1] as HTMLElement;
        if (parentDiv) {
          //trigger parentDiv onwheel
          parentDiv.dispatchEvent(new WheelEvent('wheel', e));
        }

        e.preventDefault();
        e.stopPropagation();
      }

      const wordLength = 1;

      this.spellingDiv.style.width = (wordLength * 7.5 + 2) + 'svmin';
      this.spellingDiv.style.marginTop = '7.6svmin';
      this.spellingOutlineDiv.style.width = (wordLength * 7.5 + 2) + 'svmin';

      const i = 0;

      //for (let i = 0; i < word.length; i++) {

        var parentDiv = document.createElement('button');
        parentDiv.setAttribute(this.scopeId, this.scopeId);

        parentDiv.classList.add('btn');
        parentDiv.classList.add('btn-primary');
        parentDiv.classList.add('parentDiv');

        parentDiv.type = 'button';
        parentDiv.style.background = 'none';
        parentDiv.style.border = 'none';
        parentDiv.style.lineHeight = 'normal';

        parentDiv.style.position = 'absolute';
        parentDiv.style.left = (i * 7.5 + .75) + 'svmin';
        parentDiv.style.top = '0svmin';

        parentDiv.onfocus = (e: Event) => {
          if (e.target) {
            for (let child of (e.target as HTMLElement).parentElement!.children) {
              (child as HTMLElement).style.zIndex = '0';
            }
            (e.target as HTMLElement).style.zIndex = Number.MAX_SAFE_INTEGER.toString();
          }
        }

        parentDiv.onkeydown = async (e: KeyboardEvent) => {

          /*   if (e.key === 'ArrowRight') {
              //focus next sibling to parentDiv, if parentDiv is not last child
              if (e.target.nextElementSibling) {
                e.target.nextElementSibling.focus();
              }
            }
            else if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
              //focus previous sibling to parentDiv, if parentDiv is not first child
              if (e.target.previousElementSibling) {
                e.target.previousElementSibling.focus();
              }
            } 
            else*/
          if (e.key === 'ArrowUp') {
            // Reset input buffer when navigating
            this.resetInputBuffer();

            if (parseFloat((e.target as HTMLButtonElement)!.style.top) > -parseFloat((e.target as HTMLButtonElement)!.style.height) + 15
            ) {
              (e.target as HTMLButtonElement)!.style.top = (parseFloat((e.target as HTMLButtonElement)!.style.top) - 7.6) + 'svmin';
            }
            e.stopPropagation()
            e.preventDefault();
          }
          else if (e.key === 'ArrowDown') {
            // Reset input buffer when navigating
            this.resetInputBuffer();

            if (parseFloat((e.target as HTMLButtonElement)!.style.top) <= -7.6) {
              (e.target as HTMLButtonElement)!.style.top = (parseFloat((e.target as HTMLButtonElement)!.style.top) + 7.6) + 'svmin';
            }
            e.stopPropagation()
            e.preventDefault();
          }

          //else if letter is a-z
          else if (e.key.match(/^[0-9]$/i)) {
            // Add the pressed digit to the input buffer
            this.inputBuffer += e.key;

            // Start or restart the timer
            this.startInputTimer();

            // Get all child elements (letters/numbers) in the current button
            var chars = (e.target as HTMLElement).childNodes;
            var letterTop = 0;
            var foundMatch = false;

            // Look for a match with the current input buffer
            for (let i = 0; i < chars.length; i++) {
              const charText = (chars[i] as HTMLElement).innerHTML;

              // Check if this character matches the current input buffer
              if (charText === this.inputBuffer) {
                (e.target as HTMLButtonElement)!.style.top = -(letterTop) + 'svmin';
                foundMatch = true;

                // If we found a complete match, move to next element and reset buffer
                if ((e.target as HTMLElement).nextElementSibling) {
                  ((e.target as HTMLElement).nextElementSibling as HTMLElement).focus();
                }

                // Reset the input buffer since we found a match
                this.resetInputBuffer();
                break;
              }

              // Also check for partial matches (in case user is typing a longer number)
              if (charText.startsWith(this.inputBuffer)) {
                (e.target as HTMLButtonElement)!.style.top = -(letterTop) + 'svmin';
                foundMatch = true;
                break;
              }

              letterTop += 7.6;
            }

            // If no match was found, reset the buffer and try single character match
            if (!foundMatch) {
              this.resetInputBuffer();
              this.inputBuffer = e.key; // Start fresh with just this character
              this.startInputTimer();

              // Try single character match
              letterTop = 0;
              for (let i = 0; i < chars.length; i++) {
                if ((chars[i] as HTMLElement).innerHTML.toLocaleUpperCase() == e.key.toLocaleUpperCase()) {
                  (e.target as HTMLButtonElement)!.style.top = -(letterTop) + 'svmin';

                  if ((e.target as HTMLElement).nextElementSibling) {
                    ((e.target as HTMLElement).nextElementSibling as HTMLElement).focus();
                  }

                  break;
                }

                letterTop += 7.6;
              }
            }

          }
          else {
            //don't want sliderChanged called
            return;
          }
          await this.sliderChanged(e.target as HTMLElement);
        }

        parentDiv.onpointerdown = (e: MouseEvent) => {
          document.documentElement.classList.add('force-grab');
          this.mouseDown = true;
          this.mousePos = e.clientY;
          this.button = e.target as HTMLButtonElement;
          while (this.button.tagName != 'BUTTON') {
            this.button = this.button.parentElement as HTMLButtonElement;
          }
        }


        window.onpointerup = (e: MouseEvent) => {
          document.documentElement.classList.remove('force-grab');
          this.mouseDown = false;
          this.footerMouseDown = false;
          this.sliderChanged(this.button);
        }

        window.onpointermove = async (e: MouseEvent) => {
          if (this.footerMouseDown) {

            //as the mouse moves left/right, footerDiv left should move the same amount to the left/right
            this.footerDiv.style.left = parseFloat(this.footerDiv.style.left) + (e.clientX - this.footerMousePos) * 4 / 100 + 'svmin';
            this.footerMousePos = e.clientX;


          }

          if (this.mouseDown && Math.abs(e.clientY - this.mousePos) > 40) {

            var diff = (e.clientY - this.mousePos);
            if (diff > 0 && parseFloat((this.button as HTMLButtonElement)!.style.top) <= -7.6
            ) {

              this.button.style.top = parseFloat(this.button.style.top) + 7.6 + 'svmin';
            }
            if (diff < 0 && parseFloat((this.button as HTMLButtonElement)!.style.top) > -parseFloat((this.button as HTMLButtonElement)!.style.height) + 7.6 * 2) {

              this.button.style.top = parseFloat(this.button.style.top) - 7.6 + 'svmin';
            }

            await this.sliderChanged(this.button, true);
            this.mousePos = e.clientY;
          }
        }

        //if mouse wheel down, move the button down
        parentDiv.onwheel = async (e: WheelEvent) => {
          var el = e.target as HTMLButtonElement;
          if (el.tagName != 'BUTTON') {
            el = el.parentElement as HTMLButtonElement;
          }
          el.focus();

          if (e.deltaY > 0) {
            if (parseFloat((el as HTMLButtonElement)!.style.top) > -parseFloat((el as HTMLButtonElement)!.style.height) + 7.6 * 2
            ) {

              (el as HTMLButtonElement)!.style.top = (parseFloat((el as HTMLButtonElement)!.style.top) - 7.6) + 'svmin';
            }
            e.stopPropagation()
            e.preventDefault();
          }
          else {
            if (parseFloat((el as HTMLButtonElement)!.style.top) <= -7.6) {

              (el as HTMLButtonElement)!.style.top = (parseFloat((el as HTMLButtonElement)!.style.top) + 7.6) + 'svmin';
            }
            e.stopPropagation()
            e.preventDefault();
          }

          await this.sliderChanged(el);
        }

        if (this.spellingDiv) {
          this.spellingDiv.appendChild(parentDiv);
        }

        if (i == 0) {
          parentDiv.focus();
        }

        letters[0] = (this.$awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.options.split(',');


        parentDiv.style.height = ((letters[i].length) * 7.6 + 1) + 'svmin';
        parentDiv.style.paddingLeft = '.5svmin';
        parentDiv.style.paddingRight = '.5svmin';
        parentDiv.style.top = '7.6svmin';


        // var letterDiv = document.createElement('div');
        // parentDiv.appendChild(letterDiv);

        // letterDiv.style.width = '7svmin';
        // letterDiv.style.height = '7svmin';
        // letterDiv.style.borderRadius = '.5svmin';
        // letterDiv.style.marginBottom = '.6svmin';
        // letterDiv.innerHTML = '&nbsp;';
        // letterDiv.style.visibility = 'hidden';

        for (const arr of letters[i]) {

          var letterDiv = document.createElement('div');
          letterDiv.setAttribute(this.scopeId, this.scopeId);
          parentDiv.appendChild(letterDiv);

          letterDiv.classList.add('letterStyle');
          letterDiv.innerHTML = arr;




        }

        await this.sliderChanged(parentDiv, true);

      //}


      window.onkeydown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowRight' && e.ctrlKey && awesum.canGoForward()) {
          awesum.goForward();
        }
        if (e.key === 'ArrowLeft' && e.ctrlKey && awesum.canGoBack()) {
          awesum.goBack();
        }
      }

      // Initialize the grid app
      this.initializeApp();

      this.selectNumber(1, (this.$awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.firstNumber, 1);

    }
  },

  methods: {






    applyHint() {
      this.usedHint = true;
      this.selectNumber(this.selectedPosition,
        this.selectedPosition == 1 ? (this.$awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.firstNumber : (this.$awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.secondNumber,
        this.selectedPosition == 1 ? (this.$awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.secondNumber : (this.$awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.firstNumber);

    },

    // Helper method to reset input buffer and clear timer
    resetInputBuffer() {
      this.inputBuffer = '';
      if (this.inputTimer) {
        clearTimeout(this.inputTimer);
        this.inputTimer = 0;
      }
    },

    // Helper method to start/restart the input timer
    startInputTimer() {
      if (this.inputTimer) {
        clearTimeout(this.inputTimer);
      }
      this.inputTimer = window.setTimeout(() => {
        this.inputBuffer = '';
        this.inputTimer = 0;
      }, 2000); // 2 seconds timeout
    },

    // Grid-related methods from HTML file
    initializeApp() {
      // Set up event listeners
      const num1Element = document.getElementById('num1')?.parentNode;
      const num2Element = document.getElementById('num2')?.parentNode;

      if (num1Element) {
        num1Element.addEventListener('click', () => {
          const value = parseInt(num1Element.textContent || '0');
          //if (value != this.selectedNumber) {
          this.selectNumber(1, value, 1);
          // }
          // else {
          //   //unselect the number
          //   this.unselectNumbers();

          // }
        });
      }

      if (num2Element) {
        num2Element.addEventListener('click', () => {
          const value = parseInt(num2Element.textContent || '0');
          //if (value != this.selectedNumber) {
          this.selectNumber(2, value, 1);
          //}
          // else {
          //   this.unselectNumbers();
          // }
        });
      }

      // Initialize grid
      this.initializeGrid();
      this.setupDragHandle();

      // Keyboard shortcuts
      document.addEventListener('keydown', (e) => {
        if (e.key === ' ') {
          e.preventDefault();

        }
      });

      // Handle window resize
      window.addEventListener('resize', () => {
        setTimeout(() => {
          this.updateDragHandlePosition();
          this.updateGridSelection(); // Also update dimension display position
        }, 100);
      });
    },

    initializeGrid() {
      const grid = document.getElementById('grid');
      if (!grid) return;

      grid.innerHTML = '';

      for (let i = 0; i < 100; i++) {
        const cell = document.createElement('div');
        cell.setAttribute(this.scopeId, this.scopeId);
        cell.className = 'grid-cell';
        cell.dataset.row = Math.floor(i / 10).toString();
        cell.dataset.col = (i % 10).toString();
        grid.appendChild(cell);
      }

      //this.updateGridSelection();
      this.updateDragHandlePosition();
    },

    updateGridSelection() {
      const cells = document.querySelectorAll('.grid-cell');
      let count = 1;

      // Determine numbering direction based on locked dimension
      const numberByColumns = this.selectedNumber && this.lockedDimension === 'height';

      cells.forEach(cell => {
        const row = parseInt((cell as HTMLElement).dataset.row || '0');
        const col = parseInt((cell as HTMLElement).dataset.col || '0');

        if (row < this.gridHeight && col < this.gridWidth) {
          cell.classList.add('selected');

          // Calculate number based on direction
          let cellNumber;
          if (numberByColumns) {
            // Number by columns: fill down each column
            cellNumber = col * this.gridHeight + row + 1;
          } else {
            // Number by rows: fill across each row
            cellNumber = row * this.gridWidth + col + 1;
          }

          cell.textContent = cellNumber.toString();

          // Determine emphasis
          let shouldEmphasize = false;

          if (this.selectedNumber) {
            // Check if this is a multiple of selected number
            const isMultiple = (cellNumber % this.selectedNumber === 0);

            // Check if this is in the last row/column
            const isInLastColumn = (numberByColumns && col === this.gridWidth - 1);
            const isInLastRow = (!numberByColumns && row === this.gridHeight - 1);

            // Emphasize multiples of selected number, but NOT in last row/column unless it's a multiple
            if (isMultiple) {
              shouldEmphasize = true;
            } else if (isInLastColumn || isInLastRow) {
              shouldEmphasize = false; // Hide non-multiples in last row/column completely
            }
          } else {
            shouldEmphasize = true;
          }

          if (shouldEmphasize) {
            cell.classList.remove('de-emphasized');
          } else {
            cell.classList.add('de-emphasized');
          }

        } else {
          cell.classList.remove('selected', 'de-emphasized');
          cell.textContent = '';
        }
      });

      // Position tooltips relative to the drag element using svmin
      const widthTooltip = document.getElementById('height-tooltip');
      const heightTooltip = document.getElementById('width-tooltip');

      if (widthTooltip && heightTooltip) {
        // Calculate drag handle position in svmin (3svmin per cell)
        const cellWidth = 3; // svmin
        const cellHeight = 3; // svmin
        const handleX = this.gridWidth * cellWidth;
        const handleY = this.gridHeight * cellHeight;

        // Position width tooltip: ensure it stays outside the grid
        const widthTopPosition = handleY; // Aligned with drag element vertically
        // Position further left as gridWidth increases to account for text width
        const widthLeftPosition = handleX - (this.gridWidth * 3) - 3; // Move left by grid width + padding

        widthTooltip.style.left = widthLeftPosition + 'svmin';
        widthTooltip.style.top = widthTopPosition + 'svmin';
        widthTooltip.style.display = 'block';

        // Position height tooltip: gridHeight * -10svmin offset from top of drag element
        const heightLeftPosition = handleX; // Aligned with drag element horizontally

        heightTooltip.style.left = heightLeftPosition + 'svmin';
        heightTooltip.style.top = '-4svmin';
        heightTooltip.style.display = 'block';
      }

      // Update drag handle appearance based on snap mode
      const handle = document.getElementById('drag-handle');
      if (handle) {
        if (this.selectedNumber !== null) {
          handle.classList.add('snap-mode');
        } else {
          handle.classList.remove('snap-mode');
        }
      }

      this.checkGridAnswer();
    },

    updateDragHandlePosition() {
      const handle = document.getElementById('drag-handle');

      if (!handle) return;

      // Use svmin units: 3svmin per cell (30svmin / 10 cells)
      const cellWidth = 3; // svmin
      const cellHeight = 3; // svmin

      const x = this.gridWidth * cellWidth;
      const y = this.gridHeight * cellHeight;

      handle.style.left = x + 'svmin';
      handle.style.top = y + 'svmin';
    },

    setupDragHandle() {
      const handle = document.getElementById('drag-handle');
      if (!handle) return;

      //handle.addEventListener('mousedown', this.startDrag);
      handle.addEventListener('pointerdown', this.startDrag);

      //document.addEventListener('mousemove', this.drag);
      document.addEventListener('pointermove', this.drag);

      //document.addEventListener('mouseup', this.stopDrag);
      document.addEventListener('pointerup', this.stopDrag);

      // Add keyboard navigation for the drag handle
      handle.addEventListener('keydown', (e: KeyboardEvent) => {
        if (!['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'].includes(e.key)) {
          return;
        }

        e.preventDefault();
        e.stopPropagation();

        const container = document.querySelector('.grid-container');
        if (!container) return;

        const containerRect = container.getBoundingClientRect();
        const cellWidth = containerRect.width / 10;
        const cellHeight = containerRect.height / 10;

        // Get current handle position
        const handleRect = handle.getBoundingClientRect();
        const currentX = handleRect.left + handleRect.width / 2;
        const currentY = handleRect.top + handleRect.height / 2;

        // Calculate new position based on arrow key
        let newX = currentX;
        let newY = currentY;

        if (e.key === 'ArrowRight') {
          newX = currentX + cellWidth;
        } else if (e.key === 'ArrowLeft') {
          newX = currentX - cellWidth;
        } else if (e.key === 'ArrowDown') {
          newY = currentY + cellHeight;
        } else if (e.key === 'ArrowUp') {
          newY = currentY - cellHeight;
        }

        // Simulate drag sequence
        this.startDrag({ preventDefault: () => {} });
        
        // Create synthetic pointer event
        const syntheticEvent = {
          preventDefault: () => {},
          clientX: newX,
          clientY: newY
        };
        
        this.drag(syntheticEvent);
        this.stopDrag();
      });

      // Initial position
      this.updateDragHandlePosition();
    },

    startDrag(e: any) {
      this.isDragging = true;
      e.preventDefault();
    },

    drag(e: any) {
      if (!this.isDragging) return;

      e.preventDefault();
      const container = document.querySelector('.grid-container');
      if (!container) return;

      const containerRect = container.getBoundingClientRect();

      let clientX, clientY;
      // if (e.type === 'touchmove') {
      //   clientX = e.touches[0].clientX;
      //   clientY = e.touches[0].clientY;
      //} else {
        clientX = e.clientX;
        clientY = e.clientY;
      //}

      // Calculate position relative to container upper left corner
      const x = clientX - containerRect.left;
      const y = clientY - containerRect.top;




      const cellWidth = containerRect.width / 10;
      const cellHeight = containerRect.height / 10;

      let newWidth = Math.max(1, Math.min(10, Math.round(x / cellWidth)));
      let newHeight = Math.max(1, Math.min(10, Math.round(y / cellHeight)));


      
        
      // Dynamic locking based on distance from current grid position
      if (this.selectedNumber !== null) {
        
        // if(newWidth > this.selectedNumber && newHeight < this.selectedNumber ) {
        //   this.lockedDimension = 'width' as any;
        //   newWidth = this.selectedNumber;
        // }
        // else if(newWidth < this.selectedNumber && newHeight > this.selectedNumber ) {
        //   this.lockedDimension = 'height' as any;
        //   newHeight = this.selectedNumber;
        // }
        // else 
        if(newWidth <= this.selectedNumber && newHeight <= this.selectedNumber) {
          if (newWidth <= newHeight) {
          // Moving more horizontally - lock height (rows)
          this.lockedDimension = 'height' as any;
          newHeight = this.selectedNumber;
          document.title = newWidth + " - " + newHeight + " - height";

        } else {
          // Moving more vertically - lock width (columns)
          this.lockedDimension = 'width' as any;
          newWidth = this.selectedNumber;
          document.title = newWidth + " - " + newHeight + " - width";
        }
        }
        else
        {
        if (newWidth >= newHeight) {
          // Moving more horizontally - lock height (rows)
          this.lockedDimension = 'height' as any;
          newHeight = this.selectedNumber;
          document.title = newWidth + " - " + newHeight + " - height";

        } else {
          // Moving more vertically - lock width (columns)
          this.lockedDimension = 'width' as any;
          newWidth = this.selectedNumber;
          document.title = newWidth + " - " + newHeight + " - width";
        }
      }
        
      }

      

      if (newWidth !== this.gridWidth || newHeight !== this.gridHeight) {
        this.gridWidth = newWidth;
        this.gridHeight = newHeight;
        this.updateGridSelection();
        this.updateDragHandlePosition();
      }
    },

    stopDrag() {
      this.isDragging = false;
      //this.selectedPosition = null;
      this.lockedDimension = null;
    },

    checkGridAnswer() {
      const num1Element = document.getElementById('num1');
      const num2Element = document.getElementById('num2');
      const widthTooltip = document.getElementById('width-tooltip');
      const heightTooltip = document.getElementById('height-tooltip');

      if (!num1Element || !num2Element || !widthTooltip || !heightTooltip) return;

      const num1 = parseInt(num1Element.textContent || '0');
      const num2 = parseInt(num2Element.textContent || '0');

      const isCorrect = (this.gridWidth === num1 && this.gridHeight === num2) ||
        (this.gridWidth === num2 && this.gridHeight === num1);

      if (isCorrect) {
        widthTooltip.style.color = '#27ae60';
        heightTooltip.style.color = '#27ae60';
      } else {
        widthTooltip.style.color = '#666';
        heightTooltip.style.color = '#666';
      }
    },

    unselectNumbers() {
      document.querySelectorAll('.number').forEach(n => n.classList.remove('selected'));
      this.selectedNumber = null;
      this.selectedPosition = null;
      this.lockedDimension = null;

      // Hide dimension tooltips when no selection
      const widthTooltip = document.getElementById('width-tooltip');
      const heightTooltip = document.getElementById('height-tooltip');
      if (widthTooltip) {
        widthTooltip.style.display = 'none';
      }
      if (heightTooltip) {
        heightTooltip.style.display = 'none';
      }

      this.updateGridSelection();
      this.updateDragHandlePosition();
    },

    selectNumber(position: any, value: any, value2: any) {
      // Clear previous selection
      this.unselectNumbers();

      // Select new number
      const numElement = document.getElementById(`num${position}`);
      if (numElement) {
        numElement.classList.add('selected');
      }

      // Store selected number and position for snap mode
      this.selectedNumber = value;
      this.selectedPosition = position;
      this.lockedDimension = null; // Reset locked dimension

      // Set the grid dimensions based on the selected numbers
      this.gridWidth = this.selectedNumber as any;
      this.gridHeight = value2;

      // Update the visual feedback
      this.updateGridSelection();
      this.updateDragHandlePosition();
    },

    setRectangleSize(width: any, height: any) {
      // Ensure values are within bounds
      this.gridWidth = Math.max(1, Math.min(10, width));
      this.gridHeight = Math.max(1, Math.min(10, height));

      // Clear any selection state
      document.querySelectorAll('.number').forEach(n => n.classList.remove('selected'));
      this.selectedNumber = null;
      //this.selectedPosition = null;
      this.lockedDimension = null;

      // Update grid
      this.updateGridSelection();
      this.updateDragHandlePosition();
    },


    footerButtonClick(e: Event, item: ServerDatabaseItemInterface) {
      awesum.goToItem(item.order)
    },
    footerOnMouseDown(e: MouseEvent) {
      this.footerMouseDown = true;
      this.footerMousePos = e.clientX;
    },
    /*  footerOnKeyDown(e: KeyboardEvent) {
       if (e.key === 'ArrowRight') {
  
         if (parseFloat((this.footerDiv as HTMLButtonElement)!.style.left) > -parseFloat((this.footerDiv as HTMLButtonElement)!.style.width) + 85) {
  
           this.footerDiv.style.left = parseFloat(this.footerDiv.style.left) - 5 + 'svmin';
         }
         e.stopPropagation()
         e.preventDefault();
  
       }
       else if (e.key === 'ArrowLeft') {
         if (parseFloat((this.footerDiv as HTMLButtonElement)!.style.left) <= -5
         ) {
  
           this.footerDiv.style.left = parseFloat(this.footerDiv.style.left) + 5 + 'svmin';
         }
         e.stopPropagation()
         e.preventDefault();
       }
     }, */
    footerOnWheel(e: WheelEvent) {
      if (e.deltaY > 0) {
        if (parseFloat((this.footerDiv as HTMLButtonElement)!.style.left) <= -5
        ) {

          this.footerDiv.style.left = parseFloat(this.footerDiv.style.left) + 5 + 'svmin';
        }
      }
      else {
        if (parseFloat((this.footerDiv as HTMLButtonElement)!.style.left) > -parseFloat((this.$refs.footerDivParent as HTMLDivElement)!.style.width) - 55) {

          this.footerDiv.style.left = parseFloat(this.footerDiv.style.left) - 5 + 'svmin';
        }
      }
    },
    async playSound(e: Event) {
      var audioOrSpeech = '';
      if ((awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.audioType == audioType.TTS) {
        audioOrSpeech = this.answer.toString();
      }
      else {
        var audioOrSpeechMedia = await this.$awesum.AwesumDexieDB.serverMedia.get((awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.sound);
        if (audioOrSpeechMedia) {
          audioOrSpeech = audioOrSpeechMedia.data;
        }
      }
      awesum.playAudioOrSpeech((awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.audioType, audioOrSpeech);
      e.stopPropagation();
      e.preventDefault();
    },

    async sliderChanged(el: HTMLElement, mouseMoving: boolean = false) {

      if (this.sliderDoneChanging || !el || !el.parentElement) {
        return;
      }
      var charIndex = Array.from(el.parentElement!.children).indexOf(el);
      if (el.style.top != '7.6svmin' && !this.changedSliders.includes(charIndex)) {

        this.changedSliders.push(charIndex);


      }
      var chars = el.childNodes;
      var letterTop = 0;

      for (let i = 0; i < chars.length; i++) {
        if (Math.abs(-parseFloat(el.style.top) - letterTop + 0) < 1) {

          (chars[i] as HTMLElement).classList.remove('nonCurrentLetter');
          (chars[i] as HTMLElement).classList.add('currentLetter');

          //this.setRectangleSize(this.selectedNumber, (chars[i] as HTMLElement).textContent);

          //this.selectedChars[charIndex] = (chars[i] as HTMLElement).innerHTML;

          this.selectedLetter = (chars[i] as HTMLElement).innerHTML;
        }
        else {
          (chars[i] as HTMLElement).classList.remove('currentLetter');
          (chars[i] as HTMLElement).classList.add('nonCurrentLetter');
        }

        letterTop += 7.6;
      }

      if (mouseMoving) {
        return;
      }



      if (this.delayRedHandle) {
        clearInterval(this.delayRedHandle);
      }
      this.delayRedHandle = window.setTimeout(() => {

        var buttonChildren = this.spellingDiv.getElementsByClassName('parentDiv');

        for (let i = 0; i < buttonChildren.length; i++) {
          //get ith child of spellingDiv
          var child = buttonChildren[i];


          //get currentLetter div inside child
          var currentLetter = child.getElementsByClassName('currentLetter')[0];
          if (currentLetter) {
            if (currentLetter.innerHTML.toLocaleLowerCase() != this.answer.toString()) {
              (currentLetter as HTMLElement).style.border = '.5svmin dashed red';
            }

          }
        }

      }, 1000);











      if (this.selectedLetter ==
        this.answer.toString()
        //  && this.selectedChars.join('').toLocaleLowerCase() == (awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.text.toLocaleLowerCase()
      ) {



        this.sliderDoneChanging = true;
        var items = document.getElementsByClassName('parentDiv');
        for (const item of items) {
          (item as HTMLElement).style.top = '0svmin';
          (item as HTMLElement).style.height = '7.6svmin';
          (item as HTMLElement).style.opacity = '1';
          (item as HTMLElement).setAttribute('disabled', 'disabled')
        }

        var items = document.getElementsByClassName('nonCurrentLetter');
        for (const item of items) {
          (item as HTMLElement).style.display = 'none';
        }

        var audioOrSpeech = '';
        if ((this.$awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.successSound) {
          var successSoundMedia = await this.$awesum.AwesumDexieDB.serverMedia.get((this.$awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.successSound);
          if (successSoundMedia) {
            audioOrSpeech = successSoundMedia.data;
          }
        }
        await this.$awesum.playAudioOrSpeech(audioType.File, audioOrSpeech);

        document.getElementById('outlineRectParent')!.style.display = '';
        (this.$refs.spellingOutlineDiv as HTMLDivElement).style.display = 'none';


        const wordLength = 1;
        var rect = document.getElementById('outlineRect') as HTMLOrSVGElement;
        (rect as SVGRectElement).setAttribute('width', (wordLength * 7.6 + 1) + '%');
        (rect as SVGRectElement).setAttribute('x', ((100 - wordLength * 7.6) / 2 - 1) + '%');
        animate(rect,
          {
            //@ts-ignore
            strokeDasharray: 300,
            strokeDashoffset: [300, 0],
          }, {
          duration: 10,
        });

        if (this.usedHint) {
          setTimeout(() => {
            awesum.refreshNumber++;
          }, 2000);

        }
        else {



          //search for a completion with the current item id
          if (!this.$awesum.currentDatabaseCompletions.get(awesum.currentDatabaseItem.id)) {

            var newId = uuid();

            var itemsInUnit = await this.$awesum.AwesumDexieDB.serverDatabaseItems.where('unitId').equals(awesum.currentDatabaseUnit.id).toArray();
            var completedItemsInUnit = await this.$awesum.AwesumDexieDB.serverFollowerDatabaseCompletions.where('parentItemId').equals(awesum.currentDatabaseUnit.id).and((followerDatabaseCompletion: ServerFollowerDatabaseCompletionInterface) => followerDatabaseCompletion.itemId != '').toArray();

            //get all itemsInUnit that are not inside completedItemsInUnit
            var incompleteItemsInUnit = itemsInUnit.filter((item: ServerDatabaseItemInterface) => !completedItemsInUnit.some((completedItem: ServerFollowerDatabaseCompletionInterface) => completedItem.itemId == item.id));


            var doneWithUnit = false;
            if (incompleteItemsInUnit.length == 1 && incompleteItemsInUnit[0].id == awesum.currentDatabaseItem.id) {
              doneWithUnit = true;
              this.clearingUnitItemCompletions = true;
            }

            await this.$awesum.AwesumDexieDB.transaction('rw', this.$awesum.AwesumDexieDB.serverFollowerDatabaseCompletions, async () => {
              // if (doneWithUnit) {

              //   // await Global.awesumDb.serverFollowerDatabaseCompletions.where('unitId').equals(awesum.currentDatabaseUnit.id).and((followerDatabaseCompletion: ServerFollowerDatabaseCompletion) => followerDatabaseCompletion.itemId != '').delete();

              //   // await Global.awesumDb.serverFollowerDatabaseCompletions.add({
              //   //   created: Date.now(),
              //   //   followerId: currentFollower ? currentFollower.id : null,
              //   //   id: newId,
              //   //   itemId: awesum.zerosGuid,
              //   //   unitId: awesum.currentDatabaseUnit.id,
              //   //   databaseId: awesum.currentDatabase.id,
              //   //   followerAppId: currentFollower ? currentFollower.followerAppId : null,
              //   //   leaderAppId: currentFollower ? currentFollower.leaderAppId : null,
              //   // } as ServerFollowerDatabaseCompletion);
              // }
              // else {
              await this.$awesum.AwesumDexieDB.serverFollowerDatabaseCompletions.add({
                id: newId,
                followerRequestId: '',
                description: '',
                created: Date.now(),
                lastModified: Date.now(),
                version: 0,
                itemId: awesum.currentDatabaseItem.id,
                parentItemId: awesum.currentDatabaseUnit.id,
                itemLevel: 0,
                touched: false,
              } as ServerFollowerDatabaseCompletionInterface);
              //}
            })










            if ((awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.successAnimations.indexOf('Balloons') > -1) {
              var balloonCanvas = document.getElementById('balloonCanvas') as HTMLCanvasElement;
              balloonCanvas.style.display = '';
              this.balloons = new Balloons(balloonCanvas);
              this.balloons.createBalloons(30);
            }

            if ((awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.successAnimations.indexOf('Fireworks') > -1) {
debugger;
              let fireworksCanvas = document.getElementById('fireworksCanvas') as HTMLCanvasElement
              fireworksCanvas.style.display = '';

              const fireworks = new Fireworks(fireworksCanvas, { /* options */ })
              fireworks.start();
              this.fireworks = fireworks;
            }

            let confettiCanvas = document.getElementById('confettiCanvas') as HTMLCanvasElement

            if ((awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.successAnimations.indexOf('Confetti') > -1) {

              confettiCanvas.style.display = '';

              const showConfetti = async () => {
                await confetti('confettiCanvas', {
                  count: 200,
                  spread: 100,
                  origin: { y: 0.6 }
                });
              }

              showConfetti();
              this.confettiHandle = window.setInterval(() => {
                showConfetti();
              }, 2000);
            }

            await awesum.delay((this.$awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.successImageTime);

            // Stop all animations after the timer expires
            if (this.confettiHandle) {
              clearInterval(this.confettiHandle);
              this.confettiHandle = 0;
            }

            confettiCanvas.style.display = 'none';

            // if (this.fireworks.stop) {
            //   this.fireworks.stop();
            //   this.fireworks = {} as Fireworks;
            // }

            if (this.balloons.removeBalloons) {
              this.balloons.removeBalloons();
              this.balloons = {} as Balloons;
            }



            if (doneWithUnit) {
              // const asdValue = await Global.waitForFunctionWithValidation(
              //   "serverFollowerDatabaseCompletions",
              //   () => {
              //     //return true if "value" has newId as an id, looping through each item
              //     for (const item of Global.awesum.currentDatabaseItemCompletions.values()) {
              //       if (item.id == newId) {
              //         console.log('found it')
              //         return true;
              //       }
              //     }
              //     console.log('not found')
              //     return false;
              //   },
              //   5000 // Timeout in milliseconds
              // );

              //route to /completed instead of /(awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.order



              if ((awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.successImageType == imageType.None) {

              }
              else {
                document.getElementById('outlineRectParent')!.style.display = 'none';
                var successImageMedia = await this.$awesum.AwesumDexieDB.serverMedia.get((this.$awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.successImage);
                if (successImageMedia) {
                  (this.$refs.successImage as HTMLImageElement).src = successImageMedia.data;
                }
                (this.$refs.successImageParent as HTMLDivElement).style.display = '';
                await this.$awesum.delay((this.$awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.successImageTime);
              }

              this.$router.push('/' + encodeURI(this.$awesum.currentApp.name) + '/' +
                encodeURI(this.$awesum.currentDatabase.name) + '/' +
                encodeURI(this.$awesum.currentDatabaseUnit.name) + '/' +
                I18nGlobal.t(resources.completed.key));


            }
            else {

              //replace the view content with (awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.successImage
              //if it is a web address, use it, otherwise use the media
              //if it is a web address, use it, otherwise use the media
              if ((awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.successImageType == imageType.None) {

              }
              else {
                document.getElementById('outlineRectParent')!.style.display = 'none';
                var successImageMedia = await this.$awesum.AwesumDexieDB.serverMedia.get((this.$awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.successImage);
                if (successImageMedia) {
                  (this.$refs.successImage as HTMLImageElement).src = successImageMedia.data;
                }
                (this.$refs.successImageParent as HTMLDivElement).style.display = '';
                await this.$awesum.delay((this.$awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.successImageTime);
              }

              awesum.goToNextIncomplete();

            }
          }
        }
      }
    },


    generateSimilarLetters(letter: string) {
      letter = letter.toLocaleUpperCase();
      const numbers = "1234567890";
      const consonants = "BCDFGHJKLMNPQRSTVWXZ";
      const vowels = "AEIOUY";
      let similarLetters = new Array<string>();

      if (consonants.includes(letter)) {
        // generate a random list of other consonants
        while (similarLetters.length < 5) {
          let randomConsonant = consonants[Math.floor(Math.random() * consonants.length)];
          if (randomConsonant !== letter && !similarLetters.includes(randomConsonant)) {
            similarLetters.push(randomConsonant);
          }
        }
      } else if (vowels.includes(letter)) {
        // generate a random list of other vowels
        while (similarLetters.length < 5) {
          let randomVowel = vowels[Math.floor(Math.random() * vowels.length)];
          if (randomVowel !== letter && !similarLetters.includes(randomVowel)) {
            similarLetters.push(randomVowel);
          }
        }
      }
      else if (numbers.includes(letter)) {
        // generate a random list of other vowels
        while (similarLetters.length < 5) {
          let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
          if (randomNumber !== letter && !similarLetters.includes(randomNumber)) {
            similarLetters.push(randomNumber);
          }
        }
      }


      return similarLetters;
    },
  }
}
</script>

<template>
  <div class="view" ref="view"
    style="display: flex;justify-items: center;height: 100%;flex-direction: column;align-items: center;position:relative;overflow: hidden;">

    <div id="balloonCanvas"
      style="display: none; position:absolute;width:100svmin;height:90svmin;margin:auto;z-index:9999;pointer-events:none;overflow: hidden;">
    </div>
    <canvas id="emojiCanvas"
      style="background:transparent;display: none;position:absolute;width:100svmin;height:100svmin;margin:auto;z-index:9999;pointer-events:none;"></canvas>
    <canvas id="confettiCanvas"
      style="background:transparent;display: none;position:absolute;width:100svmin;height:100svmin;margin:auto;z-index:9999;pointer-events:none;"></canvas>
    <canvas id="fireworksCanvas"
      style="background:transparent;display: none;position:absolute;width:100svmin;height:100svmin;margin:auto;z-index:9999;pointer-events:none;"></canvas>

    <div ref="successImageParent"
      style="display:none;z-index: 9999;width: 100svmin;height: 100svmin;position: absolute;margin: auto;background:black;">
      <img ref="successImage" id="successImage"
        style="object-fit: contain;width: 100svmin;height: 100svmin;pointer-events: none;" />
    </div>


    <div id="gridContainer">
      <div class="container">
        <div class="math-problem">
          <div class="problem-row">
            <button type="button" class="btn btn-link"
              style="background: none;border: none;text-decoration: none;padding:0svmin;">
              <div class="number" id="num1">{{ ($awesum.currentDatabaseItem as
                ServerOneByOneMathDatabaseItemInterface).data.firstNumber }}</div>
            </button>
            <div class="multiplication-sign">×</div>
            <button type="button" class="btn btn-link"
              style="background: none;border: none;text-decoration: none;padding:0svmin;">
              <div class="number" id="num2">{{ ($awesum.currentDatabaseItem as
                ServerOneByOneMathDatabaseItemInterface).data.secondNumber }}</div>
            </button>
          </div>
        </div>

        <div class="grid-section" v-if="!completedFromLoad">

          <div class="grid-container">
            <div class="grid" id="grid"></div>
            <button type="button" class="drag-handle btn btn-link" id="drag-handle"
              style="text-decoration: none;cursor: grab;">
            </button>
            <!-- Dynamic dimension displays -->
            <div id="width-tooltip" class="dimension-tooltip width-tooltip">{{ gridWidth }}</div>
            <div id="height-tooltip" class="dimension-tooltip height-tooltip">{{ gridHeight }}</div>
          </div>

        </div>
      </div>
    </div>

    <div ref="spellingDivParent" style="overflow:hidden">
      <div v-if="completedFromLoad"
        style="display: flex;justify-content: space-evenly;align-content: center;align-items: center;width: 100svmin;height: 30svmin;">
        <div
          style="text-align: center; width: 90svmin; height: 28svmin; background: #35ff04; z-index: 9999;border-radius: 1svmin;border:1svmin solid black;padding-top:5svmin;">
          <div style="padding-bottom:2svmin;">Completed!</div>
          <div v-for="c in answer.toString()" class="letterStyle" style="display: inline-block;margin-left:.25svmin;">
            {{ c.toLocaleUpperCase() }}
          </div>
        </div>
      </div>
      <div v-if="!completedFromLoad" id="spellingDiv" ref="spellingDiv"
        style="height: 31svmin; position: relative;user-select: none;z-index: 1;touch-action: none;">
        <div ref="spellingOutlineDiv" id="spellingOutlineDiv"
          style="height:7.7svmin;border:.1svmin solid black;position:absolute;top:.6svmin;user-select:none;">
        </div>

      </div>
    </div>

    <div id="outlineRectParent"
      style="display:none;position:absolute;width:100svmin;height: 100svmin;left:0svmin;top:0svmin;">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
        style="position:absolute;top:1.1svmin;user-select:none;">
        <rect id="outlineRect" x="0" y="53%" width="100%" height="9%" fill="none" stroke="green" stroke-width=".3">
        </rect>
      </svg>
    </div>

    <button v-if="!completedFromLoad" ref="hintButton" class="hintButton btn btn-link" @click="applyHint()">
      <FaWandMagicSparkles />
    </button>
    <button id="backButton" class="backButton btn btn-link"
      style="cursor:pointer;position:absolute;left:.5svmin;top:34svmin;padding:0 .5svmin .5svmin .5svmin;" @click="$awesum.goBack()"
      v-if="$awesum.canGoBack()">
      <FaBackward />
    </button>

    <button id="forwardButton" class="forwardButton btn btn-link"
      style="cursor:pointer;position:absolute;right:.5svmin;top:34svmin;padding:0 .5svmin .5svmin .5svmin" @click="$awesum.goForward()"
      v-if="$awesum.canGoForward()">
      <FaForward />
    </button>

    <div ref="footerDivParent"
      style="overflow:auto;white-space: nowrap;width:90svmin;user-select: none;display: flex;flex-direction: column;align-items: flex-start;justify-content: flex-end;padding:1svmin;margin-top:auto;height:8.2svmin;scrollbar-width: none;">
      <button class="btn btn-link" ref="footerDiv" @wheel="footerOnWheel($event)"
        @pointerdown="footerOnMouseDown($event)"
        style="position:relative;left:0;background: none;border:none;font-size: 3svmin;padding:0;">
        <button v-for="item in $awesum.currentDatabaseItems" :key="item.id" class="btn btn-link" style="
        margin-right:.5svmin;
        width :5svmin;
        padding-Left: .5svmin;
        padding-right: .5svmin;
        " v-bind:style="{ backgroundColor: clearingUnitItemCompletions || $awesum.currentDatabaseCompletions.get(item.id) ? '#68ff68' : '', border: $awesum.currentDatabaseItem.order == item.order ? '.5svmin dashed black' : '' }"
          @click="footerButtonClick($event, item)">
          <span>{{ item.order }}</span>



        </button>
      </button>
    </div>

  </div>
</template>

<style lang="scss" scoped deep>
#imageAndSound {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  margin-top: 1svmin;
}
</style>
<style scoped>
.hintButton {
  position: absolute;
  right: 2svmin;
  top: 0svmin;
  height: 7svmin;
  cursor: pointer;
}

.force-grab * {
  cursor: grab !important;
}

.letterStyle {
  width: 7svmin;
  height: 7svmin;
  font-Size: 4svmin;
  text-Align: center;
  color: black;
  background-Color: white;
  border: .1svmin solid black;
  border-Radius: .5svmin;
  margin-Bottom: .6svmin;
  padding-top: .5svmin;
  line-height: 5svmin;
}

.nonCurrentLetter {
  opacity: .3;
}

.currentLetter {
  opacity: 1;
}

.parentDiv {
  scroll-margin-top: 18svmin;
  cursor: grab;
}

.parentDiv div {
  cursor: grab;
}


#balloon-container {
  height: 90vh;
  padding: 1em;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  transition: opacity 500ms;
}

.balloon {
  height: 125px;
  width: 105px;
  border-radius: 75% 75% 70% 70%;
  position: relative;
}

.balloon:before {
  content: "";
  height: 75px;
  width: 1px;
  padding: 1px;
  background-color: #FDFD96;
  display: block;
  position: absolute;
  top: 125px;
  left: 0;
  right: 0;
  margin: auto;
}

.balloon:after {
  content: "▲";
  text-align: center;
  display: block;
  position: absolute;
  color: inherit;
  top: 120px;
  left: 0;
  right: 0;
  margin: auto;
}

@keyframes balloon-float {
  from {
    transform: translateY(100vh);
    opacity: 1;
  }

  to {
    transform: translateY(-300vh);
    opacity: 0;
  }
}

.grid-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2svmin;
}

.grid-info {
  font-size: 2.5svmin;
  color: #666;
  font-weight: bold;
}

.grid-container {
  position: relative;
  width: 30svmin;
  height: 30svmin;
  border: 0.4svmin solid #333;
  background: white;
  margin-right: 3svmin;
  /* Space for width tooltip */
  margin-bottom: 3svmin;
  /* Space for height tooltip */
}

.dimension-tooltip {
  position: absolute;
  background: rgba(255, 255, 255, 0.8);
  color: rgb(0, 0, 0);
  padding: 0.3svmin 0.6svmin;
  border-radius: 0.3svmin;
  font-size: 1.8svmin;
  font-weight: bold;
  pointer-events: none;
  z-index: 20;
  white-space: nowrap;
  box-shadow: 0 0.2svmin 0.5svmin rgba(0, 0, 0, 0.3);
  display: none;
  /* Initially hidden */
  border: 0.1svmin solid #333;
}

/* Width and height tooltips inherit base styling from .dimension-tooltip */

.grid {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  gap: 0.3svmin;
}

.grid-cell {
  background: #f8f9fa;
  border: 0.05svmin solid #dee2e6;
  transition: background-color 0.3s ease, color 0.3s ease;
  color: white;
}

.grid-cell.selected {
  background: rgba(102, 126, 234, 0.4);
  border-color: #667eea;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5svmin;
  font-weight: bold;
  color: #333;
}

.grid-cell.de-emphasized {
  color: #9d9d9d !important;
}

.drag-handle {
  position: absolute;
  width: 2svmin;
  height: 2svmin;
  padding: 0;
  background: #667eea;
  border: 0.3svmin solid white;
  border-radius: 50%;
  cursor: grab;
  z-index: 10;
  transition: transform 0.1s ease, background-color 0.3s ease;
  transform: translate(-50%, -50%);
}

.drag-handle.snap-mode {
  background: #e74c3c;
  box-shadow: 0 0.5svmin 1svmin rgba(231, 76, 60, 0.5);
}

.drag-handle:active {
  cursor: grabbing;
  transform: translate(-50%, -50%) scale(1.2);
}

.drag-handle:hover {
  transform: translate(-50%, -50%) scale(1.1);
}

.math-problem {
  justify-self: center;
  width: 20svmin;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2svmin;
  margin-top: 2svmin;
  margin-bottom: 2svmin;
}

.problem-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2svmin;
}

.number {
  padding: 1.5svmin;
  font-size: 4svmin;
  font-weight: bold;
  color: #333;
  border-radius: 1.5svmin;
  cursor: pointer;
  transition: all 0.3s ease;
  user-select: none;
  border: 0.3svmin solid transparent;
  outline: none;
}

.number:focus {
  outline: none;
  box-shadow: none;
}

.number:hover {
  background: rgba(102, 126, 234, 0.1);
  transform: scale(1.05);
}

.number.selected {
  background: rgba(102, 126, 234, 0.2);
  border-color: #667eea;
}

.multiplication-sign {
  font-size: 6svmin;
  font-weight: bold;
  color: #667eea;
}

.line {
  width: 15svmin;
  height: 0.5svmin;
  background: #333;
}

.controls {
  margin-top: 2svmin;
  display: flex;
  gap: 1svmin;
  justify-content: center;
  align-items: center;
}

.controls button {
  padding: 1svmin 2svmin;
  border: none;
  border-radius: 1svmin;
  background: #667eea;
  color: white;
  cursor: pointer;
  font-size: 1.5svmin;
}

.controls button:hover {
  background: #5a67d8;
}

#gridContainer {
  width: 100svmin;
}
</style>