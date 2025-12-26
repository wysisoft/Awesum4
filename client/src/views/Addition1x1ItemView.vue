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
import { itemType,imageType,audioType } from "../../../server/typebox";
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

    // Number line related properties
    let numberLineLength = ref(20);
    let selectedPosition = ref(null);
    let firstAddend = ref(0);
    let secondAddend = ref(0);

    const instance = getCurrentInstance() as any;
    const $awesum = instance.appContext.config.globalProperties.$awesum

    let answer = ($awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.firstNumber + ($awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.secondNumber;

    // 1. Add new reactive properties in setup():
    let isDraggingFirst = ref(false);
    let isDraggingSecond = ref(false);
    let dragStartXFirst = ref(0);
    let dragStartXSecond = ref(0);

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
      // Number line related properties
      numberLineLength,
      selectedPosition,
      firstAddend,
      secondAddend,
      isDraggingFirst,
      isDraggingSecond,
      dragStartXFirst,
      dragStartXSecond,
      scopeId
    };
  },
  async mounted() {

    document.onkeydown = function (e: KeyboardEvent) {
      if (e.key == 'ArrowLeft') {
        var buttons = document.querySelectorAll('button');
        var currentButton = document.activeElement as HTMLButtonElement;
        var currentIndex = Array.from(buttons).indexOf(currentButton);
        var previousButton = buttons[currentIndex - 1] as HTMLButtonElement;
        if (previousButton) {
          previousButton.focus();
          previousButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
      else if (e.key == 'ArrowRight') {
        var buttons = document.querySelectorAll('button');
        var currentButton = document.activeElement as HTMLButtonElement;
        var currentIndex = Array.from(buttons).indexOf(currentButton);
        var nextButton = buttons[currentIndex + 1] as HTMLButtonElement;
        if (nextButton) {
          nextButton.focus();
          nextButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }

    await this.$awesum.refreshCurrentDatabaseItems();

    var itemsInUnit = this.$awesum.currentDatabaseItems;
    var completedItemsInUnit = await this.$awesum.AwesumDexieDB.serverFollowerDatabaseCompletions.where('parentItemId').equals(this.$awesum.currentDatabaseUnit.id).and((followerDatabaseCompletion: ServerFollowerDatabaseCompletionInterface) => followerDatabaseCompletion.itemId != '').toArray();

    var incompleteItemsInUnit = itemsInUnit.filter((item: ServerDatabaseItemInterface) => !completedItemsInUnit.some((completedItem: ServerFollowerDatabaseCompletionInterface) => completedItem.itemId == item.id));

    var doneWithUnit = false;
    if (incompleteItemsInUnit.length == 0) {
      this.$router.push('/' + encodeURI(this.$awesum.currentApp.name) + '/' +
        encodeURI(this.$awesum.currentDatabase.name)  + '/' +
        encodeURI(this.$awesum.currentDatabaseUnit.name) + '/' +
        I18nGlobal.t(resources.completed.key));
    }

    this.completedFromLoad = await this.$awesum.AwesumDexieDB.serverFollowerDatabaseCompletions.where('itemId').equals(awesum.currentDatabaseItem.id).count() > 0;

    this.spellingDiv = this.$refs.spellingDiv as HTMLElement;
    this.footerDiv = this.$refs.footerDiv as HTMLElement;
    this.spellingOutlineDiv = this.$refs.spellingOutlineDiv as HTMLElement;

    var letters = new Array<Array<string>>();
    var word = this.answer.toString();

      const wordLength = 1;

    if (this.spellingDiv) {
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
          if (e.key === 'ArrowUp') {
            this.resetInputBuffer();

            if (parseFloat((e.target as HTMLButtonElement)!.style.top) > -parseFloat((e.target as HTMLButtonElement)!.style.height) + 15
            ) {
              (e.target as HTMLButtonElement)!.style.top = (parseFloat((e.target as HTMLButtonElement)!.style.top) - 7.6) + 'svmin';
            }
            e.stopPropagation()
            e.preventDefault();
          }
          else if (e.key === 'ArrowDown') {
            this.resetInputBuffer();

            if (parseFloat((e.target as HTMLButtonElement)!.style.top) <= -7.6) {
              (e.target as HTMLButtonElement)!.style.top = (parseFloat((e.target as HTMLButtonElement)!.style.top) + 7.6) + 'svmin';
            }
            e.stopPropagation()
            e.preventDefault();
          }
          else if (e.key.match(/^[0-9]$/i)) {
            this.inputBuffer += e.key;
            this.startInputTimer();

            var chars = (e.target as HTMLElement).childNodes;
            var letterTop = 0;
            var foundMatch = false;

            for (let i = 0; i < chars.length; i++) {
              const charText = (chars[i] as HTMLElement).innerHTML;

              if (charText === this.inputBuffer) {
                (e.target as HTMLButtonElement)!.style.top = -(letterTop) + 'svmin';
                foundMatch = true;

                if ((e.target as HTMLElement).nextElementSibling) {
                  ((e.target as HTMLElement).nextElementSibling as HTMLElement).focus();
                }

                this.resetInputBuffer();
                break;
              }

              if (charText.startsWith(this.inputBuffer)) {
                (e.target as HTMLButtonElement)!.style.top = -(letterTop) + 'svmin';
                foundMatch = true;
                break;
              }

              letterTop += 7.6;
            }

            if (!foundMatch) {
              this.resetInputBuffer();
              this.inputBuffer = e.key;
              this.startInputTimer();

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
          if (this.footerMouseDown && Math.abs(e.clientX - this.footerMousePos) > 100) {
            var diff = (e.clientX - this.footerMousePos);
            if (diff > 0 && parseFloat((this.footerDiv as HTMLButtonElement)!.style.left) <= -5) {
              this.footerDiv.style.left = parseFloat(this.footerDiv.style.left) + 5 + 'svmin';
            }
            if (diff < 0 && parseFloat((this.footerDiv as HTMLButtonElement)!.style.left) > -parseFloat((this.footerDiv as HTMLButtonElement)!.style.width) + 85) {
              this.footerDiv.style.left = parseFloat(this.footerDiv.style.left) - 5 + 'svmin';
            }
            this.footerMousePos = e.clientX;
          }

          if (this.mouseDown && Math.abs(e.clientY - this.mousePos) > 40) {
            var diff = (e.clientY - this.mousePos);
            if (diff > 0 && parseFloat((this.button as HTMLButtonElement)!.style.top) <= -7.6) {
              this.button.style.top = parseFloat(this.button.style.top) + 7.6 + 'svmin';
            }
            if (diff < 0 && parseFloat((this.button as HTMLButtonElement)!.style.top) > -parseFloat((this.button as HTMLButtonElement)!.style.height) + 7.6 * 2) {
              this.button.style.top = parseFloat(this.button.style.top) - 7.6 + 'svmin';
            }

            await this.sliderChanged(this.button, true);
            this.mousePos = e.clientY;
          }
        }

        parentDiv.onwheel = async (e: WheelEvent) => {
          var el = e.target as HTMLButtonElement;
          if (el.tagName != 'BUTTON') {
            el = el.parentElement as HTMLButtonElement;
          }
          if (e.deltaY > 0) {
            if (parseFloat((el as HTMLButtonElement)!.style.top) > -parseFloat((el as HTMLButtonElement)!.style.height) + 7.6 * 2) {
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

      // Initialize the number line
      this.initializeNumberLine();

      // Set initial values to 1
      this.firstAddend = 1;
      this.secondAddend = 1;

      this.selectNumber(1, 1);
    }
  },

  methods: {
    applyHint() {
      this.usedHint = true;
      
      this.firstAddend = (this.$awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.firstNumber;
      this.secondAddend = (this.$awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.secondNumber;

      
      this.updateNumberLineSelection();
      this.updateDragHandlePositions();

    },

    resetInputBuffer() {
      this.inputBuffer = '';
      if (this.inputTimer) {
        clearTimeout(this.inputTimer);
        this.inputTimer = 0;
      }
    },

    startInputTimer() {
      if (this.inputTimer) {
        clearTimeout(this.inputTimer);
      }
      this.inputTimer = window.setTimeout(() => {
        this.inputBuffer = '';
        this.inputTimer = 0;
      }, 2000);
    },

    initializeNumberLine() {
      const num1Element = document.getElementById('num1')?.parentNode;
      const num2Element = document.getElementById('num2')?.parentNode;

      // if (num1Element) {
      //   num1Element.addEventListener('click', () => {
      //     const value = parseInt(num1Element.textContent || '0');
      //     this.selectNumber(1, value);
      //   });
      // }

      // if (num2Element) {
      //   num2Element.addEventListener('click', () => {
      //     const value = parseInt(num2Element.textContent || '0');
      //     this.selectNumber(2, value);
      //   });
      // }

      this.createNumberLine();
      this.setupDragHandle();

      document.addEventListener('keydown', (e) => {
        if (e.key === ' ') {
          e.preventDefault();
        }
      });

      window.addEventListener('resize', () => {
        setTimeout(() => {
          this.updateNumberLineSelection();
        }, 100);
      });
    },

    createNumberLine() {
      const numberLine = document.getElementById('number-line');
      if (!numberLine) return;

      numberLine.innerHTML = '';

      // Create number line segments
      for (let i = 1; i <= this.numberLineLength; i++) {
        const segment = document.createElement('div');
        segment.setAttribute(this.scopeId, this.scopeId);
        segment.className = 'number-line-segment';
        segment.dataset.number = i.toString();

        const label = document.createElement('div');
        label.setAttribute(this.scopeId, this.scopeId);
        label.className = 'number-label';
        label.textContent = i.toString();
        segment.appendChild(label);

        numberLine.appendChild(segment);
      }

      this.updateNumberLineSelection();
    },

    updateNumberLineSelection() {
      const segments = document.querySelectorAll('.number-line-segment');

      segments.forEach((segment, index) => {
        segment.classList.remove('first-addend', 'second-addend');

        if (index < this.firstAddend) {
          segment.classList.add('first-addend');
        }

        if (index >= this.firstAddend && index < this.firstAddend + this.secondAddend) {
          segment.classList.add('second-addend');
        }


      });

      // Update ruler display
      const ruler = document.getElementById('ruler-total');
      if (ruler) {
        ruler.textContent = (this.firstAddend + this.secondAddend).toString();
      }

      this.checkNumberLineAnswer();
    },

    setupDragHandle() {
      const handleFirst = document.getElementById('drag-handle-first');
      const handleSecond = document.getElementById('drag-handle-second');

      if (handleFirst) {
        handleFirst.addEventListener('mousedown', (e) => this.startDrag(e, 'first'));
        handleFirst.addEventListener('touchstart', (e) => this.startDrag(e, 'first'), { passive: false });
        
        // Add keyboard navigation for first handle
        handleFirst.addEventListener('keydown', (e: KeyboardEvent) => {
          if (!['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'].includes(e.key)) {
            return;
          }

          e.preventDefault();
          e.stopPropagation();

          const container = document.querySelector('.number-line-container');
          if (!container) return;

          const containerRect = container.getBoundingClientRect();
          const segmentWidth = containerRect.width / this.numberLineLength;

          // Get current handle position
          const handleRect = handleFirst.getBoundingClientRect();
          const currentX = handleRect.left + handleRect.width / 2;

          // Calculate new position based on arrow key
          let newX = currentX;

          if (e.key === 'ArrowRight') {
            newX = currentX + segmentWidth;
          } else if (e.key === 'ArrowLeft') {
            newX = currentX - segmentWidth;
          }

          // Simulate drag sequence
          this.startDrag({ preventDefault: () => {} }, 'first');
          
          // Create synthetic pointer event
          const syntheticEvent = {
            preventDefault: () => {},
            clientX: newX,
            clientY: handleRect.top + handleRect.height / 2
          };
          
          this.drag(syntheticEvent);
          this.stopDrag();
        });
      }

      if (handleSecond) {
        handleSecond.addEventListener('mousedown', (e) => this.startDrag(e, 'second'));
        handleSecond.addEventListener('touchstart', (e) => this.startDrag(e, 'second'), { passive: false });
        
        // Add keyboard navigation for second handle
        handleSecond.addEventListener('keydown', (e: KeyboardEvent) => {
          if (!['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'].includes(e.key)) {
            return;
          }

          e.preventDefault();
          e.stopPropagation();

          const container = document.querySelector('.number-line-container');
          if (!container) return;

          const containerRect = container.getBoundingClientRect();
          const segmentWidth = containerRect.width / this.numberLineLength;

          // Get current handle position
          const handleRect = handleSecond.getBoundingClientRect();
          const currentX = handleRect.left + handleRect.width / 2;

          // Calculate new position based on arrow key
          let newX = currentX;

          if (e.key === 'ArrowRight') {
            newX = currentX + segmentWidth;
          } else if (e.key === 'ArrowLeft') {
            newX = currentX - segmentWidth;
          }

          // Simulate drag sequence
          this.startDrag({ preventDefault: () => {} }, 'second');
          
          // Create synthetic pointer event
          const syntheticEvent = {
            preventDefault: () => {},
            clientX: newX,
            clientY: handleRect.top + handleRect.height / 2
          };
          
          this.drag(syntheticEvent);
          this.stopDrag();
        });
      }

      document.addEventListener('mousemove', this.drag);
      document.addEventListener('touchmove', this.drag, { passive: false });

      document.addEventListener('mouseup', this.stopDrag);
      document.addEventListener('touchend', this.stopDrag);

      this.updateDragHandlePositions();
    },

    // 3. Update the drag handle positioning method:
    updateDragHandlePositions() {
      const handleFirst = document.getElementById('drag-handle-first');
      const handleSecond = document.getElementById('drag-handle-second');

      if (handleFirst) {
        const segmentWidth = 4.2; // svmin per segment
        const x = this.firstAddend * segmentWidth;
        handleFirst.style.left = x + 'svmin';
        handleFirst.style.background = '#3498db';
      }

      if (handleSecond) {
        const segmentWidth = 4.2; // svmin per segment
        const x = (this.firstAddend + this.secondAddend) * segmentWidth;
        handleSecond.style.left = x + 'svmin';
        handleSecond.style.background = '#e74c3c';
      }
    },

    // 4. Modify the startDrag method:
    startDrag(e: any, handle: string) {
      e.preventDefault();

      if (handle === 'first') {
        this.isDraggingFirst = true;
        if (e.type === 'touchstart') {
          this.dragStartXFirst = e.touches[0].clientX;
        } else {
          this.dragStartXFirst = e.clientX;
        }
      } else {
        this.isDraggingSecond = true;
        if (e.type === 'touchstart') {
          this.dragStartXSecond = e.touches[0].clientX;
        } else {
          this.dragStartXSecond = e.clientX;
        }
      }
    },

    // 5. Update the drag method:
    drag(e: any) {
      if (!this.isDraggingFirst && !this.isDraggingSecond) return;

      e.preventDefault();
      const container = document.querySelector('.number-line-container');
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      let clientX;
      if (e.type === 'touchmove') {
        clientX = e.touches[0].clientX;
      } else {
        clientX = e.clientX;
      }

      const x = clientX - containerRect.left;
      const segmentWidth = containerRect.width / this.numberLineLength;
      const position = Math.max(0, Math.min(this.numberLineLength, Math.round(x / segmentWidth)));

      if (this.isDraggingFirst) {
        // First handle can go from 0 to 20, but can't go past second handle's end position
        const maxFirst = this.numberLineLength - 1; // Leave at least 1 for second addend
        const newFirst = Math.max(0, Math.min(maxFirst, position));

        if (newFirst !== this.firstAddend) {
          // If moving first handle to the right past current second handle end, 
          // adjust second addend to maintain minimum of 1
          const currentEnd = this.firstAddend + this.secondAddend;
          if (newFirst > currentEnd - 1) {
            this.secondAddend = Math.max(1, currentEnd - newFirst);
          }
          this.firstAddend = newFirst;

          // Ensure second addend is at least 1
          if (this.secondAddend < 1) {
            this.secondAddend = 1;
          }
        }
      } else if (this.isDraggingSecond) {
        // Second handle represents the end position, so it can go from firstAddend+1 to 20
        const minSecond = this.firstAddend + 1;
        const maxSecond = this.numberLineLength;
        const newEnd = Math.max(minSecond, Math.min(maxSecond, position));

        this.secondAddend = newEnd - this.firstAddend;
      }

      if(this.firstAddend + this.secondAddend > this.numberLineLength) {
        this.secondAddend = this.numberLineLength - this.firstAddend;
      }

      this.updateNumberLineSelection();
      this.updateDragHandlePositions();
    },

    // 6. Update the stopDrag method:
    stopDrag() {
      this.isDraggingFirst = false;
      this.isDraggingSecond = false;
    },

    checkNumberLineAnswer() {
      const num1Element = document.getElementById('num1');
      const num2Element = document.getElementById('num2');
      const ruler = document.getElementById('ruler-total');

      if (!num1Element || !num2Element || !ruler) return;

      const num1 = parseInt(num1Element.textContent || '0');
      const num2 = parseInt(num2Element.textContent || '0');

      const isCorrect = (this.firstAddend === num1 && this.secondAddend === num2) ||
        (this.firstAddend === num2 && this.secondAddend === num1);

      if (isCorrect) {
        ruler.style.color = '#27ae60';
      } else {
        ruler.style.color = '#666';
      }
    },

    selectNumber(position: any, value: any) {
      // // Clear previous selection
      // document.querySelectorAll('.number').forEach(n => n.classList.remove('selected'));

      // // Select new number
      // const numElement = document.getElementById(`num${position}`);
      // if (numElement) {
      //   numElement.classList.add('selected');
      // }

      this.selectedPosition = position;

      if (position === 1) {
        this.firstAddend = value;
      } else {
        this.secondAddend = value;
      }

      this.updateNumberLineSelection();
      this.updateDragHandlePositions();
    },

    footerButtonClick(e: Event, item: ServerDatabaseItemInterface) {
      awesum.goToItem(item.order)
    },

    footerOnMouseDown(e: MouseEvent) {
      this.footerMouseDown = true;
      this.footerMousePos = e.clientX;
    },

    footerOnWheel(e: WheelEvent) {
      if (e.deltaY > 0) {
        if (parseFloat((this.footerDiv as HTMLButtonElement)!.style.left) <= -5) {
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
          var child = buttonChildren[i];
          var currentLetter = child.getElementsByClassName('currentLetter')[0];
          if (currentLetter) {
            if (currentLetter.innerHTML.toLocaleLowerCase() != this.answer.toString()) {
              (currentLetter as HTMLElement).style.border = '.5svmin dashed red';
            }
          }
        }
      }, 1000);

      if (this.selectedLetter == this.answer.toString()) {
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

        var rect = document.getElementById('outlineRect') as HTMLOrSVGElement;
        (rect as SVGRectElement).setAttribute('width', (this.answer.toString().length * 7.6 + 1) + '%');
        (rect as SVGRectElement).setAttribute('x', ((100 - this.answer.toString().length * 7.6) / 2 - 1) + '%');
        animate(rect, {
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
          if (!this.$awesum.currentDatabaseCompletions.has(awesum.currentDatabaseItem.id)) {
            var newId = uuid();

            var itemsInUnit = await this.$awesum.AwesumDexieDB.serverDatabaseItems.where('unitId').equals(awesum.currentDatabaseUnit.id).toArray();
            var completedItemsInUnit = await this.$awesum.AwesumDexieDB.serverFollowerDatabaseCompletions.where('parentItemId').equals(awesum.currentDatabaseUnit.id).and((followerDatabaseCompletion: ServerFollowerDatabaseCompletionInterface) => followerDatabaseCompletion.itemId != '').toArray();

            var incompleteItemsInUnit = itemsInUnit.filter((item: ServerDatabaseItemInterface) => !completedItemsInUnit.some((completedItem: ServerFollowerDatabaseCompletionInterface) => completedItem.itemId == item.id));

            var doneWithUnit = false;
            if (incompleteItemsInUnit.length == 1 && incompleteItemsInUnit[0].id == awesum.currentDatabaseItem.id) {
              doneWithUnit = true;
              this.clearingUnitItemCompletions = true;
            }

            await this.$awesum.AwesumDexieDB.transaction('rw', this.$awesum.AwesumDexieDB.serverFollowerDatabaseCompletions, async () => {
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
            })

            if ((awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.successAnimations.indexOf('Balloons') > -1) {
              var balloonCanvas = document.getElementById('balloonCanvas') as HTMLCanvasElement;
              balloonCanvas.style.display = '';
              this.balloons = new Balloons(balloonCanvas);
              this.balloons.createBalloons(30);
            }

            if ((awesum.currentDatabaseItem as ServerOneByOneMathDatabaseItemInterface).data.successAnimations.indexOf('Fireworks') > -1) {
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

            if (this.fireworks.stop) {
              this.fireworks.stop();
              this.fireworks = {} as Fireworks;
            }

            if (this.balloons.removeBalloons) {
              this.balloons.removeBalloons();
              this.balloons = {} as Balloons;
            }

            if (doneWithUnit) {
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
                encodeURI(this.$awesum.currentDatabase.name) +  '/' +
                encodeURI(this.$awesum.currentDatabaseUnit.name) + '/' +
                I18nGlobal.t(resources.completed.key));
            }
            else {
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
        while (similarLetters.length < 5) {
          let randomConsonant = consonants[Math.floor(Math.random() * consonants.length)];
          if (randomConsonant !== letter && !similarLetters.includes(randomConsonant)) {
            similarLetters.push(randomConsonant);
          }
        }
      } else if (vowels.includes(letter)) {
        while (similarLetters.length < 5) {
          let randomVowel = vowels[Math.floor(Math.random() * vowels.length)];
          if (randomVowel !== letter && !similarLetters.includes(randomVowel)) {
            similarLetters.push(randomVowel);
          }
        }
      }
      else if (numbers.includes(letter)) {
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

    <div id="numberLineContainer">
      <div class="container">
        <div class="math-problem">
          <div class="problem-row">
            <div class="number" id="num1">{{ ($awesum.currentDatabaseItem as
              ServerOneByOneMathDatabaseItemInterface).data.firstNumber }}</div>
            <div class="addition-sign">+</div>
            <div class="number" id="num2">{{ ($awesum.currentDatabaseItem as
              ServerOneByOneMathDatabaseItemInterface).data.secondNumber }}</div>

          </div>
        </div>

        <div class="number-line-section" v-if="!completedFromLoad">
          <div class="number-line-container">
            <div class="number-line" id="number-line"></div>
            <button type="button" class="drag-handle btn btn-link" id="drag-handle-first"
              style="text-decoration: none;cursor: grab;">
            </button>
            <button type="button" class="drag-handle btn btn-link" id="drag-handle-second"
              style="text-decoration: none;cursor: grab;">
            </button>
          </div>

          <div class="ruler">
            <div class="ruler-label">Total: <span id="ruler-total">{{ firstAddend + secondAddend }}</span></div>
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
        <rect id="outlineRect" x="0" y="37.7%" width="100%" height="9%" fill="none" stroke="green" stroke-width=".3">
        </rect>
      </svg>
    </div>

    <button v-if="!completedFromLoad" ref="hintButton" class="hintButton btn btn-link" @click="applyHint()">
      <FaWandMagicSparkles />
    </button>
    <button id="backButton" class="backButton btn btn-link"
      style="cursor:pointer;position:absolute;left:.5svmin;top:34svmin;padding:0 .5svmin .5svmin .5svmin" @click="$awesum.goBack()"
      v-if="$awesum.canGoBack()">
      <FaBackward />
    </button>

    <button id="forwardButton" class="forwardButton btn btn-link"
      style="cursor:pointer;position:absolute;right:.5svmin;top:34svmin;padding:0 .5svmin .5svmin .5svmin" @click="$awesum.goForward()"
      v-if="$awesum.canGoForward()">
      <FaForward />
    </button>

    <div ref="footerDivParent"
      style="overflow:hidden;white-space: nowrap;width:90svmin;user-select: none;
    display: flex;flex-direction: column;align-items: flex-start;justify-content: flex-end;padding:1svmin;margin-top:auto;height:8.2svmin">
      <button class="btn btn-link" ref="footerDiv" @wheel="footerOnWheel($event)"
        @pointerdown="footerOnMouseDown($event)"
        style="position:relative;left:0;background: none;border:none;font-size: 3svmin;padding:0;">
        <button v-for="item in $awesum.currentDatabaseItems" :key="item.id" class="btn btn-link" style="
        margin-right:.5svmin;
        width :5svmin;
        padding-Left: .5svmin;
        padding-right: .5svmin;
        " v-bind:style="{ backgroundColor: clearingUnitItemCompletions || $awesum.currentDatabaseCompletions.has(item.id) ? '#68ff68' : '', border: $awesum.currentDatabaseItem.order == item.order ? '.5svmin dashed black' : '' }"
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
  top: 2svmin;
  height: 7svmin;
  cursor: pointer;
  padding:0 .5svmin 0svmin .5svmin;
  
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

.number-line-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2svmin;
}

.number-line-container {
  position: relative;
  width: 84svmin;
  /* 20 segments * 4svmin + padding */
  height: 8svmin;
  background: white;
  border: 0.3svmin solid #333;
  margin-bottom: 2svmin;
}

.number-line {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
}

.number-line-segment {
  flex: 1;
  height: 100%;
  border-right: 0.1svmin solid #ddd;
  position: relative;
  transition: background-color 0.3s ease;
}

.number-line-segment:last-child {
  border-right: none;
}

.number-line-segment.first-addend {
  background-color: rgba(52, 152, 219, 0.4);
}

.number-line-segment.second-addend {
  background-color: rgba(231, 76, 60, 0.4);
}



.number-label {
  position: absolute;
  bottom: -3svmin;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5svmin;
  font-weight: bold;
  color: #333;
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
  transition: transform 0.1s ease;
  transform: translate(-50%, -50%);
  top: 50%;
}

.drag-handle:active {
  cursor: grabbing;
  transform: translate(-50%, -50%) scale(1.2);
}

.drag-handle:hover {
  transform: translate(-50%, -50%) scale(1.1);
}

.ruler {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1svmin;
}

.ruler-label {
  font-size: 2.5svmin;
  font-weight: bold;
  color: #333;
  background: rgba(255, 255, 255, 0.9);
  padding: 0.5svmin 1svmin;
  border-radius: 0.5svmin;
  border: 0.2svmin solid #ddd;
}

.math-problem {
  justify-self: center;
  width: 30svmin;
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
  transition: all 0.3s ease;
  user-select: none;
  border: 0.3svmin solid transparent;
  outline: none;
}


.addition-sign,
.equals-sign {
  font-size: 4svmin;
  font-weight: bold;
  color: #667eea;
}

.answer {
  font-size: 4svmin;
  font-weight: bold;
  color: #27ae60;
  padding: 1.5svmin;
  border-radius: 1.5svmin;
  background: rgba(46, 204, 113, 0.1);
}

#numberLineContainer {
  width: 100svmin;
}
</style>