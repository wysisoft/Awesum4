<script lang="ts">
import { createReusableTemplate } from '@vueuse/core'
import { v7 as uuid } from "uuid";
import { animate } from "motion";

import { awesum } from '@/awesum';
import Fireworks from 'fireworks-js';
import { Balloons } from '../Balloons';
import { confetti } from "@tsparticles/confetti";
import { imageModeType } from "../../../server/typebox";
import { ref } from 'vue';
import { I18nGlobal } from '@/i18nGlobal';
import { resources } from '@/resources/Resources';
import type { ServerFollowerDatabaseCompletionInterface } from "../../../server/serverInterfaces/ServerFollowerDatabaseCompletionInterface";
import type { ServerDatabaseItemInterface } from "../../../server/serverInterfaces/ServerDatabaseItemInterface";
import { itemType } from "../../../server/typebox";
import { audioType, imageType } from "../../../server/typebox";
import { getCurrentInstance } from 'vue';
import type { ServerOneByTwoDigraphsDatabaseItemInterface } from "../../../server/serverInterfaces/ServerOneByTwoDigraphsDatabaseItemInterface";
const [DefineTemplate, ReuseTemplate] = createReusableTemplate()

export default {
  components: {
    DefineTemplate,
    ReuseTemplate,
  },
  setup() {

    const instance = getCurrentInstance() as any;
    const $awesum = instance.appContext.config.globalProperties.$awesum


    let imageMode = ref(imageModeType.Image);
    let imageData = ref('');
    let showModal = ref(false);
    const footerDiv = ref(null as any as HTMLElement);
    const imageAndSound = ref(null as any as HTMLDivElement);
    const view = ref(null as any as HTMLDivElement);
    const modalBody = ref(null as any as HTMLDivElement);
    const modalSlot = ref(null as any as HTMLDivElement);
    let completedFromLoad = ref(false);
    let clearingUnitItemCompletions = ref(false);

    let mouseDown = ref(false)
    let footerMouseDown = ref(false)

    let mousePos = ref(0)
    let footerMousePos = ref(0)
    let button = ref(null as any as HTMLButtonElement);
    let selectedChars = ref(new Array<string>());
    let sliderDoneChanging = ref(false);

    let balloons = ref({} as Balloons);
    let fireworks = ref({} as Fireworks);

    let confettiHandle = ref(0);

    let changedSliders = ref(new Array<Number>());

    let delayRedHandle = ref(0);

    let usedHint = ref(false);

    // WordBuilder specific refs
    const draggedElement = ref(null as any as HTMLElement);
    const pointerStartPos = ref({ x: 0, y: 0 });
    const isDragging = ref(false);
    const dragClone = ref(null as any as HTMLElement);
    const pointerId = ref(null as number | null);

    // Valid words that can be formed
    const validWords = [($awesum.currentDatabaseItem as ServerOneByTwoDigraphsDatabaseItemInterface).data.text.toLocaleUpperCase()];
    const leftDigraphs = ($awesum.currentDatabaseItem as ServerOneByTwoDigraphsDatabaseItemInterface).data.leftDigraphs.toLocaleUpperCase().split(',');
    const rightDigraphs = ($awesum.currentDatabaseItem as ServerOneByTwoDigraphsDatabaseItemInterface).data.rightDigraphs.toLocaleUpperCase().split(',');

    return {
      usedHint,
      imageMode,

      mouseDown,
      mousePos,
      button,
      selectedChars,
      footerDiv,
      footerMouseDown,
      footerMousePos,
      imageAndSound,
      showModal,
      view,
      modalBody,
      modalSlot,
      window,
      imageModeType,
      completedFromLoad,
      sliderDoneChanging,
      clearingUnitItemCompletions,
      balloons,
      fireworks,
      confettiHandle,
      changedSliders,
      delayRedHandle,
      imageType,
      imageData,
      // WordBuilder specific returns
      draggedElement,
      pointerStartPos,
      isDragging,
      dragClone,
      pointerId,
      validWords,
      leftDigraphs,
      rightDigraphs
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
          if (previousButton.parentElement == this.$refs.footerDiv) {
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
          if (nextButton.parentElement == this.$refs.footerDiv) {
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

    this.imageAndSound = this.$refs.imageAndSound as HTMLDivElement;

    //this.spellingDiv = this.$refs.spellingDiv as HTMLElement;
    this.footerDiv = this.$refs.footerDiv as HTMLElement;


    window.onkeydown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && e.ctrlKey && awesum.canGoForward()) {
        awesum.goForward();
      }
      if (e.key === 'ArrowLeft' && e.ctrlKey && awesum.canGoBack()) {
        awesum.goBack();
      }
      // }
    }

    // Add WordBuilder event listeners using pointer events
    // Add pointer event listeners to all digraphs
    document.querySelectorAll('.digraph').forEach(digraph => {
      digraph.addEventListener('pointerdown', this.handlePointerDown as EventListener);
      digraph.addEventListener('contextmenu', (e) => e.preventDefault());
    });

    // Add global pointer event listeners
    window.addEventListener('pointermove', this.handlePointerMove as EventListener);
    window.addEventListener('pointerup', this.handlePointerUp as EventListener);

    // Add keyboard event listeners for accessibility
    document.querySelectorAll('.digraph').forEach(digraph => {
      digraph.addEventListener('keydown', this.handleKeyDown as unknown as EventListener);
    });
  },

  beforeUnmount() {
    // Clean up global event listeners
    window.removeEventListener('pointermove', this.handlePointerMove as EventListener);
    window.removeEventListener('pointerup', this.handlePointerUp as EventListener);

    // Clean up any remaining drag clone
    if (this.dragClone && document.body.contains(this.dragClone)) {
      document.body.removeChild(this.dragClone);
    }
  },

  methods: {

    async beforeRouteEnter() {

      let imageSrc = await awesum.AwesumDexieDB.serverMedia.get((awesum.currentDatabaseItem as ServerOneByTwoDigraphsDatabaseItemInterface).data.image);
      if (imageSrc) {
        awesum.currentDatabaseItemAsyncData.imageSrc = imageSrc.data;
      }
    },
    applyHint() {
      this.usedHint = true;
      //if the innerText of the left digraph is not the starting letter of $(awesum.currentDatabaseItem as ServerTwoDigraphsDatabaseItemInterface).data.text, then use handleKeyDown to move the left digraph to the correct position
      if ((awesum.currentDatabaseItem as ServerOneByTwoDigraphsDatabaseItemInterface).data.text.startsWith((document.getElementById('left-content') as HTMLDivElement)!.innerText)) {
        var correctLeftDigraph = (awesum.currentDatabaseItem as ServerOneByTwoDigraphsDatabaseItemInterface).data.text[0];
        var leftDigraph = document.getElementById('left-column') as HTMLDivElement;
        for (const digraph of leftDigraph.children) {
          if ((digraph as HTMLDivElement).innerText.toLocaleLowerCase() == correctLeftDigraph.toLocaleLowerCase()) {
            //send enter key to the digraph
            (digraph as HTMLElement).dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
          }
        }
      }
      else {
        var correctRightDigraph = (awesum.currentDatabaseItem as ServerOneByTwoDigraphsDatabaseItemInterface).data.text.substring(1);
        var rightDigraph = document.getElementById('right-column') as HTMLDivElement;
        for (const digraph of rightDigraph.children) {
          if ((digraph as HTMLDivElement).innerText.toLocaleLowerCase() == correctRightDigraph.toLocaleLowerCase()) {
            (digraph as HTMLElement).dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
          }
        }
      }
    },
    footerButtonClick(e: Event, item: ServerDatabaseItemInterface) {
      awesum.goToItem(item.order)
    },
    footerOnMouseDown(e: MouseEvent) {
      this.footerMouseDown = true;
      this.footerMousePos = e.pageX;
    },

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
      if ((awesum.currentDatabaseItem as ServerOneByTwoDigraphsDatabaseItemInterface).data.audioType == audioType.TTS) {
        audioOrSpeech = (awesum.currentDatabaseItem as ServerOneByTwoDigraphsDatabaseItemInterface).data.text;
      }
      else {
        var audioOrSpeechMedia = await this.$awesum.AwesumDexieDB.serverMedia.get((awesum.currentDatabaseItem as ServerOneByTwoDigraphsDatabaseItemInterface).data.sound);
        if (audioOrSpeechMedia) {
          audioOrSpeech = audioOrSpeechMedia.data;
        }
      }
      awesum.playAudioOrSpeech((awesum.currentDatabaseItem as ServerOneByTwoDigraphsDatabaseItemInterface).data.audioType, audioOrSpeech);
      e.stopPropagation();
      e.preventDefault();
    },
    toggleLightbox() {
      //if(!this.completedFromLoad){
      if (this.showModal) {

        (this.$refs.itemParent as HTMLDivElement).style.display = '';
        (this.$refs.footerDivParent as HTMLDivElement).style.display = '';
      }
      else {
        (this.$refs.itemParent as HTMLDivElement).style.display = 'none';
        (this.$refs.footerDivParent as HTMLDivElement).style.display = 'none';
      }

      this.showModal = !this.showModal;
      //}
    },
    async sliderChanged(el: HTMLElement, mouseMoving: boolean = false) {


    },

    shuffleArray(array: Array<any>) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    },
    showImage(e: Event) {
      this.imageMode = imageModeType.Image;
      e.stopPropagation();
      e.preventDefault();
    },
    showVisualHint(e: Event) {

      this.imageMode = imageModeType.VisualHint;
      e.stopPropagation();
      e.preventDefault();
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

    // WordBuilder methods using pointer events
    handlePointerDown(e: PointerEvent) {
      // Only handle if it's a digraph element and left button
      if ((e.target as HTMLElement).classList.contains('digraph') && e.button === 0) {
        e.preventDefault();
        e.stopPropagation();

        this.draggedElement = e.target as HTMLElement;
        this.draggedElement.classList.add('dragging');
        this.pointerId = e.pointerId;

        this.pointerStartPos = { x: e.pageX, y: e.pageY };

        // Create visual clone for dragging
        this.dragClone = this.draggedElement.cloneNode(true) as HTMLElement;
        this.dragClone.style.position = 'fixed';
        this.dragClone.style.zIndex = '1000';
        this.dragClone.style.pointerEvents = 'none';
        this.dragClone.style.transform = 'rotate(5deg) scale(1.1)';
        this.dragClone.style.opacity = '0.8';

        this.dragClone.style.left = e.pageX - this.draggedElement.clientWidth / 2 + 'px';
        this.dragClone.style.top = e.pageY - this.draggedElement.clientHeight / 2 + 'px';

        this.dragClone.style.transition = 'none'; // Disable transitions for smooth movement
        this.dragClone.classList.add('drag-clone'); // Add class for easier identification
        document.body.appendChild(this.dragClone);

        this.isDragging = true;
      }
    },

    handlePointerMove(e: PointerEvent) {
      if (!this.isDragging || !this.dragClone || e.pointerId !== this.pointerId) return;

      if (this.footerMouseDown) {

        //as the mouse moves left/right, footerDiv left should move the same amount to the left/right
        this.footerDiv.style.left = parseFloat(this.footerDiv.style.left) + (e.clientX - this.footerMousePos) * 4 / 100 + 'svmin';
        this.footerMousePos = e.clientX;

      }

      e.preventDefault();
      e.stopPropagation();



      if (this.dragClone) {
        // Simply position the clone at the pointer position
        this.dragClone.style.left = e.pageX - this.dragClone.clientWidth / 2 + 'px';
        this.dragClone.style.top = e.pageY - this.dragClone.clientHeight / 2 + 'px';
      }

      // Find element under pointer with a small offset for better detection
      const elementBelow = document.elementFromPoint(e.clientX, e.clientY);
      const targetContent = elementBelow?.closest('.target-content');
      const target = targetContent?.closest('.target');

      // Visual feedback - only update if target changed
      if (targetContent && this.draggedElement) {
        const draggedSide = this.draggedElement.dataset.side;
        const targetSide = targetContent.id.includes('left') ? 'left' : 'right';

        // Remove previous feedback
        document.querySelectorAll('.target-content').forEach(t => t.classList.remove('drag-over', 'drag-blocked'));

        if (draggedSide === targetSide) {
          // Show green feedback for valid drops
          targetContent.classList.add('drag-over');
        } else {
          // Show red feedback for invalid drops
          targetContent.classList.add('drag-blocked');
        }
      }
    },

    handlePointerUp(e: PointerEvent) {

      this.mouseDown = false;
      this.footerMouseDown = false;

      if (!this.isDragging || e.pointerId !== this.pointerId) return;

      e.preventDefault();
      e.stopPropagation();

      // Use a small delay to ensure the pointer event has fully processed
      setTimeout(() => {
        const elementBelow = document.elementFromPoint(e.clientX, e.clientY);
        const targetContent = elementBelow?.closest('.target-content');
        const target = targetContent?.closest('.target');
        const grid = elementBelow?.closest('.digraph-grid');

        // Clean up visual clone
        if (this.dragClone) {
          document.body.removeChild(this.dragClone);
          this.dragClone = null as any;
        }

        // Remove all visual feedback
        document.querySelectorAll('.target-content').forEach(t => t.classList.remove('drag-over', 'drag-blocked'));

        // Handle drop logic
        if (target) {
          this.handleDropLogic(target as HTMLElement);
        } else if (grid && this.draggedElement?.classList.contains('in-target')) {
          this.handleDropToColumnLogic(grid as HTMLElement);
        }

        // Clean up dragging state
        if (this.draggedElement) {
          this.draggedElement.classList.remove('dragging');
          this.draggedElement = null as any;
        }
        this.isDragging = false;
        this.pointerId = null;
      }, 10); // Small delay to ensure proper pointer event handling
    },

    // Keyboard event handler for accessibility
    async handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const digraph = e.target as HTMLElement;
        const side = digraph.dataset.side;

        // If the digraph is already in a target, return it to original position
        if (digraph.classList.contains('in-target')) {
          this.returnToOriginal(digraph);
          return;
        }

        // Find the appropriate target based on the side
        const targetId = side === 'left' ? 'left-content' : 'right-content';
        const target = document.getElementById(targetId);

        if (target) {
          // If there's already a digraph in the target, return it to its original column
          const existingDigraph = target.querySelector('.digraph');
          if (existingDigraph) {
            this.returnToOriginal(existingDigraph as HTMLElement);
          }

          // Move the digraph to the target
          target.appendChild(digraph);
          digraph.classList.add('in-target');

          // Add click listener using arrow function to preserve context
          const clickHandler = () => this.returnToOriginal(digraph);
          digraph.addEventListener('click', clickHandler);

          // Store the handler reference so we can remove it later
          (digraph as any)._clickHandler = clickHandler;

          // Check for word completion
          await this.checkForWordCompletion();
        }
      }
    },


    async handleDropLogic(target: HTMLElement) {
      if (this.draggedElement) {
        const draggedSide = this.draggedElement.dataset.side;
        const targetSide = target.id.includes('left') ? 'left' : 'right';

        // Check if the digraph belongs to the correct side
        if (draggedSide === targetSide) {
          const targetContent = target.querySelector('.target-content');

          // If there's already a digraph in the target, return it to its original column
          const existingDigraph = targetContent?.querySelector('.digraph');
          if (existingDigraph) {
            this.returnToOriginal(existingDigraph as HTMLElement);
          }

          // Add the new digraph to the target
          if (targetContent) {
            targetContent.appendChild(this.draggedElement);
            this.draggedElement.classList.add('in-target');

            // Add click listener using arrow function to preserve context
            const clickHandler = () => this.returnToOriginal(this.draggedElement);
            this.draggedElement.addEventListener('click', clickHandler);

            // Store the handler reference so we can remove it later
            (this.draggedElement as any)._clickHandler = clickHandler;

            // Check if a word is formed
            await this.checkForWordCompletion();
          }
        } else {
          // Visual feedback for wrong drop
          target.style.background = 'rgba(244, 67, 54, 0.3)';
          target.style.borderColor = '#f44336';
          setTimeout(() => {
            target.style.background = 'rgba(255, 255, 255, 0.1)';
            target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
          }, 500);
        }
      }
    },


    handleDropToColumnLogic(grid: HTMLElement) {
      if (this.draggedElement && this.draggedElement.classList.contains('in-target')) {
        const draggedSide = this.draggedElement.dataset.side;

        // Check if dropping to correct original column
        if ((draggedSide === 'left' && grid.id === 'left-column') ||
          (draggedSide === 'right' && grid.id === 'right-column')) {
          grid.appendChild(this.draggedElement);
          this.draggedElement.classList.remove('in-target');

          // Remove the stored click handler
          if ((this.draggedElement as any)._clickHandler) {
            this.draggedElement.removeEventListener('click', (this.draggedElement as any)._clickHandler);
            delete (this.draggedElement as any)._clickHandler;
          }
        }
      }
    },

    returnToOriginal(element: HTMLElement) {
      const side = element.dataset.side;
      const originalColumn = document.getElementById(side + '-column');
      if (originalColumn) {
        originalColumn.appendChild(element);
        element.classList.remove('in-target');

        // Remove the stored click handler
        if ((element as any)._clickHandler) {
          element.removeEventListener('click', (element as any)._clickHandler);
          delete (element as any)._clickHandler;
        }
      }
    },

    async checkForWordCompletion() {
      const leftDigraph = document.querySelector('#left-content .digraph');
      const rightDigraph = document.querySelector('#right-content .digraph');

      if (leftDigraph && rightDigraph) {
        const letter = leftDigraph.textContent?.toLocaleUpperCase();
        const ending = rightDigraph.textContent?.toLocaleUpperCase();
        if (letter && ending) {
          const word = letter + ending;

          if (this.validWords.includes(word)) {






            var audioOrSpeech = '';
            if ((this.$awesum.currentDatabaseItem as ServerOneByTwoDigraphsDatabaseItemInterface).data.successSound) {
              var successSoundMedia = await this.$awesum.AwesumDexieDB.serverMedia.get((this.$awesum.currentDatabaseItem as ServerOneByTwoDigraphsDatabaseItemInterface).data.successSound);
              if (successSoundMedia) {
                audioOrSpeech = successSoundMedia.data;
              }
            }
            await this.$awesum.playAudioOrSpeech(audioType.File, audioOrSpeech);

            document.getElementById('outlineRectParent')!.style.display = '';

            var rect = document.getElementById('outlineRect') as HTMLOrSVGElement;
            (rect as SVGRectElement).setAttribute('width', ((this.$awesum.currentDatabaseItem as ServerOneByTwoDigraphsDatabaseItemInterface).data.text.length * 10 - 4) + '%');
            (rect as SVGRectElement).setAttribute('x', ((100 - (this.$awesum.currentDatabaseItem as ServerOneByTwoDigraphsDatabaseItemInterface).data.text.length * 7.6) / 2 - 2) + '%');
            animate(rect,
              {
                //@ts-ignore
                strokeDasharray: 300,
                strokeDashoffset: [300, 0],
              }, {
              duration: 2,
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










                if ((awesum.currentDatabaseItem as ServerOneByTwoDigraphsDatabaseItemInterface).data.successAnimations.indexOf('Balloons') > -1) {
                  var balloonCanvas = document.getElementById('balloonCanvas') as HTMLCanvasElement;
                  balloonCanvas.style.display = '';
                  this.balloons = new Balloons(balloonCanvas);
                  this.balloons.createBalloons(30);
                }

                if ((awesum.currentDatabaseItem as ServerOneByTwoDigraphsDatabaseItemInterface).data.successAnimations.indexOf('Fireworks') > -1) {

                  let fireworksCanvas = document.getElementById('fireworksCanvas') as HTMLCanvasElement
                  fireworksCanvas.style.display = '';

                  const fireworks = new Fireworks(fireworksCanvas, { /* options */ })
                  fireworks.start();
                  this.fireworks = fireworks;
                }

                let confettiCanvas = document.getElementById('confettiCanvas') as HTMLCanvasElement

                if ((awesum.currentDatabaseItem as ServerOneByTwoDigraphsDatabaseItemInterface).data.successAnimations.indexOf('Confetti') > -1) {

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

                await awesum.delay((this.$awesum.currentDatabaseItem as ServerOneByTwoDigraphsDatabaseItemInterface).data.successImageTime);

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


                  if ((awesum.currentDatabaseItem as ServerOneByTwoDigraphsDatabaseItemInterface).data.successImageType == imageType.None) {

                  }
                  else {
                    document.getElementById('outlineRectParent')!.style.display = 'none';
                    var successImageMedia = await this.$awesum.AwesumDexieDB.serverMedia.get((this.$awesum.currentDatabaseItem as ServerOneByTwoDigraphsDatabaseItemInterface).data.successImage);
                    if (successImageMedia) {
                      (this.$refs.successImage as HTMLImageElement).src = successImageMedia.data;
                    }
                    (this.$refs.successImageParent as HTMLDivElement).style.display = '';
                    await this.$awesum.delay((this.$awesum.currentDatabaseItem as ServerOneByTwoDigraphsDatabaseItemInterface).data.successImageTime);
                  }

                  this.$router.push('/' + encodeURI(this.$awesum.currentApp.name) + '/' +
                    encodeURI(this.$awesum.currentDatabase.name) + '/' +
                    encodeURI(this.$awesum.currentDatabaseUnit.name) + '/' +
                    I18nGlobal.t(resources.completed.key));


                }
                else {

                  //replace the view content with (awesum.currentDatabaseItem as ServerOneByTwoDigraphsDatabaseItemInterface).data.successImage
                  //if it is a web address, use it, otherwise use the media
                  //if it is a web address, use it, otherwise use the media
                  if ((awesum.currentDatabaseItem as ServerOneByTwoDigraphsDatabaseItemInterface).data.successImageType == imageType.None) {

                  }
                  else {
                    document.getElementById('outlineRectParent')!.style.display = 'none';
                    var successImageMedia = await this.$awesum.AwesumDexieDB.serverMedia.get((this.$awesum.currentDatabaseItem as ServerOneByTwoDigraphsDatabaseItemInterface).data.successImage);
                    if (successImageMedia) {
                      (this.$refs.successImage as HTMLImageElement).src = successImageMedia.data;
                    }
                    (this.$refs.successImageParent as HTMLDivElement).style.display = '';
                    await this.$awesum.delay((this.$awesum.currentDatabaseItem as ServerOneByTwoDigraphsDatabaseItemInterface).data.successImageTime);
                  }

                  awesum.goToNextIncomplete();

                }
              }
            }


          }
          else {
            if (this.delayRedHandle) {
              clearInterval(this.delayRedHandle);
            }

            this.delayRedHandle = window.setTimeout(() => {

              //if left target is not the correct first letter, add red border
              if ((this.$awesum.currentDatabaseItem as ServerOneByTwoDigraphsDatabaseItemInterface).data.text[0].toLocaleUpperCase() != letter.toLocaleUpperCase()) {
                (leftDigraph as HTMLElement).style.border = '.5svmin dashed red';
              }

              //if right target is not the correct last letter, add red border
              if ((this.$awesum.currentDatabaseItem as ServerOneByTwoDigraphsDatabaseItemInterface).data.text.substring(1).toLocaleUpperCase() != ending.toLocaleUpperCase()) {
                (rightDigraph as HTMLElement).style.border = '.5svmin dashed red';
              }


            }, 2000);
          }
        }
      }
    },


  }
}
</script>

<template>
  <div class="view" ref="view"
    style="display: flex;justify-items: center;height: 100%;flex-direction: column;align-items: center;position:relative;overflow: hidden;">

    <div id="balloonCanvas"
      style="display: none; position:absolute;width:100svmin;height:100svmin;margin:auto;z-index:9999;pointer-events:none;">
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



    <DefineTemplate>
      <div id="imageAndSound" ref="imageAndSound" :style="'height: ' + (showModal ? '82svmin' : '') + ';width: 100%;'">
        <button @click="toggleLightbox()" class='btn btn-link' :disabled='showModal'
          style="text-decoration: none; ;background:white;border:.1svmin solid black;">
          <img v-if="imageMode == imageModeType.Image" style="object-fit:contain;" :src="$awesum.currentDatabaseItemAsyncData.imageSrc"
            :style="'height:' + (showModal ? '80svmin' : '30svmin') + ';width:' + (showModal ? '82svmin' : '100%')" />
          <div style="height:30svmin;width:90svmin;" v-if="imageMode == imageModeType.VisualHint"><span>
              {{ ($awesum.currentDatabaseItem as ServerOneByTwoDigraphsDatabaseItemInterface).data.visualHint }}
            </span></div>
        </button>
        <button @click="playSound($event)" class="btn btn-link"
          style="left:-10svmin;right:0;top:0;bottom:0;margin:auto;width:6svmin;height:6svmin;position:absolute;border:none;background: none;">
          <FaVolumeHigh />
        </button>
        <button v-if="imageMode == imageModeType.VisualHint" @click="showImage($event)" class="btn btn-link"
          style="left:10svmin;right:0;top:0;bottom:0;margin:auto;width:6svmin;height:6svmin;position:absolute;border:none;background: none;">
          <BxImage />
        </button>
        <button v-if="imageMode == imageModeType.Image" @click="showVisualHint($event)" class="btn btn-link"
          style="left:10svmin;right:0;top:0;bottom:0;margin:auto;width:6svmin;height:6svmin;position:absolute;border:none;background: none;">
          <BsCardText />
        </button>
      </div>
    </DefineTemplate>

    <Modal :childId="'imageAndSound'" :focusedElementId="''"
      :additionalCss="'max-width:95svmin;position:relative;left:1svmin;'" @hidden="toggleLightbox()" :shown="showModal"
      :title="''">
      <ReuseTemplate />
    </Modal>


    <div v-if="!showModal">
      <ReuseTemplate />
    </div>

    <div ref="itemParent" style="overflow:hidden" class="itemParent">

      <div v-if="completedFromLoad"
        style="display: flex;justify-content: space-evenly;align-content: center;align-items: center;width: 100svmin;height: 30svmin;">
        <div
          style="text-align: center; width: 90svmin; height: 28svmin; background: #35ff04; z-index: 9999;border-radius: 1svmin;border:1svmin solid black;padding-top:5svmin;">
          <div style="padding-bottom:2svmin;">Completed!</div>
          <div
            style="display: flex;place-content: center space-evenly;align-items: center;width: 100%;height: 8svmin;gap: 1svmin;flex-direction: row;align-content: center;justify-content: center;">
            <div class="digraph in-target btn btn-link">{{ ($awesum.currentDatabaseItem as
              ServerOneByTwoDigraphsDatabaseItemInterface).data.text[0].toLocaleUpperCase() }}</div>
            <div class="digraph in-target btn btn-link">{{ ($awesum.currentDatabaseItem as
              ServerOneByTwoDigraphsDatabaseItemInterface).data.text.substring(1).toLocaleUpperCase() }}</div>
          </div>
        </div>
      </div>
      <div v-if="!completedFromLoad">

        <!-- WordBuilder Content -->
        <div class="word-display" id="word-display"></div>

        <!-- Drag Targets -->
        <div class="drag-targets">
          <div class="target" id="left-target">
            <div class="target-content" id="left-content"></div>
          </div>
          <div class="target" id="right-target">
            <div class="target-content" id="right-content"></div>
          </div>
        </div>

        <!-- Digraph Columns -->
        <div class="digraph-columns">
          <div class="column">
            <button class="digraph-grid btn btn-link" id="left-column">
              <button class="digraph btn btn-link" data-side="left" tabindex="0" role="button"
                :aria-label="`Select letter ${digraph}`" v-for="digraph in leftDigraphs" :key="digraph">{{ digraph }}
              </button>
            </button>
          </div>

          <div class="column">
            <button class="digraph-grid btn btn-link" id="right-column">
              <button class="digraph btn btn-link" data-side="right" tabindex="0" role="button"
                :aria-label="`Select ending ${digraph}`" v-for="digraph in rightDigraphs" :key="digraph">{{ digraph }}
              </button>
            </button>
          </div>
        </div>
      </div>
    </div>


    <div id="outlineRectParent"
      style="display:none;position:absolute;width:100svmin;height: 100svmin;left:0svmin;top:0svmin;">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
        style="position:absolute;top:1.1svmin;user-select:none;">
        <rect id="outlineRect" x="0" y="35%" width="100%" height="15%" fill="none" stroke="green" stroke-width=".3">
        </rect>
      </svg>
    </div>

    <button v-if="!completedFromLoad" ref="hintButton" class="hintButton btn btn-link" @click="applyHint()">
      <FaWandMagicSparkles />
    </button>
    <button id="backButton" class="backButton btn btn-link"
      style="cursor:pointer;position:absolute;left:.5svmin;top:34svmin;padding:0 .5svmin .5svmin .5svmin"
      @click="$awesum.goBack()" v-if="$awesum.canGoBack()">
      <FaBackward />
    </button>

    <button id="forwardButton" class="forwardButton btn btn-link"
      style="cursor:pointer;position:absolute;right:.5svmin;top:34svmin;padding:0 .5svmin .5svmin .5svmin"
      @click="$awesum.goForward()" v-if="$awesum.canGoForward()">
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
  top: 2svmin;
  height: 7svmin;
  cursor: pointer;
  padding: 0 .5svmin 0svmin .5svmin;

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
  height: 100vh;
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

/* WordBuilder Styles */
.word-display {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 9.1svmin;
  font-weight: bold;
  color: #FFD700;
  text-shadow: 0.39svmin 0.39svmin 0.78svmin rgba(0, 0, 0, 0.5);
  opacity: 0;
  pointer-events: none;
  z-index: 10;
}

.drag-targets {
  display: flex;
  flex-direction: row;
  height: 13svmin;
  gap: 1svmin;
  margin-bottom: 3.9svmin;
  width: 100svmin;
}

.target {
  flex: 1;
  /* background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(1.3svmin); */
  /* border-radius: 2svmin;
  border: 0.4svmin dashed rgba(255, 255, 255, 0.3); */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;
  min-height: 19.5svmin;
}

.target.drag-over {
  border-color: #4CAF50;
  background: rgba(76, 175, 80, 0.2);
  transform: scale(1.02);
}

.target-content.drag-over {
  border: 0.4svmin solid #4CAF50 !important;
  background: rgba(76, 175, 80, 0.2);
  transform: scale(1.02);
  border-radius: 1svmin;
}

.target-content.drag-blocked {
  border: 0.4svmin solid #f44336 !important;
  background: rgba(244, 67, 54, 0.2);
  border-radius: 1svmin;
  cursor: not-allowed;
}


.target h2 {
  color: white;
  margin: 0 0 2svmin 0;
  font-size: 2svmin;
  text-shadow: 0.26svmin 0.26svmin 0.52svmin rgba(0, 0, 0, 0.3);
}

.target-content {
  display: flex;
  flex-wrap: wrap;
  gap: 1svmin;
  justify-content: center;
  align-items: center;
  padding: 1.3svmin;
  width: 40svmin;
  height: 13svmin;
  border: .2svmin dashed black;
  border-radius: 1svmin;
  transition: all 0.2s ease;
  /* Touch improvements */
  touch-action: none;
  -webkit-touch-callout: none;
}

.target-content.drag-over {
  background-color: rgba(76, 175, 80, 0.2);
  border-color: #4CAF50;
  border-style: solid;
  transform: scale(1.02);
}

.target-content.drag-blocked {
  background-color: rgba(244, 67, 54, 0.2);
  border-color: #f44336;
  border-style: solid;
  transform: scale(1.02);
}

#left-target {
  align-items: end;
}

#right-target {
  align-items: start;
}

#left-target .target-content {
  justify-content: flex-end;
}

#right-target .target-content {
  justify-content: flex-start;
}

.digraph-columns {
  display: flex;
  flex-direction: row;
  gap: 2.6svmin;
  flex: 1;
  width: 100%;
}

.column {
  flex: 1;
  /* background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(1.3svmin); */
  /* border-radius: 2svmin;
  border: 0.13svmin solid rgba(255, 255, 255, 0.2); */
  padding: 2.6svmin;
}

.column h3 {
  color: white;
  text-align: center;
  margin: 0 0 2.6svmin 0;
  font-size: 1.7svmin;
  text-shadow: 0.26svmin 0.26svmin 0.52svmin rgba(0, 0, 0, 0.3);
}

.keyboard-instructions {
  margin-top: 2.6svmin;
  text-align: center;
}

.keyboard-instructions p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.3svmin;
  margin: 0;
  text-shadow: 0.13svmin 0.13svmin 0.26svmin rgba(0, 0, 0, 0.3);
}

.digraph-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.3svmin;
  justify-content: left;
  align-items: left;
  background: none;
  border: none;
  text-decoration: none;
}

.digraph {
  text-decoration: none;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  border-radius: 1.3svmin;
  text-align: center;
  font-weight: bold;
  font-size: 2.4svmin;
  cursor: grab;
  transition: all 0.3s ease;
  /* box-shadow: 0 0.52svmin 1svmin rgba(0, 0, 0, 0.2); */
  user-select: none;
  height: 7svmin;
  line-height: 4.5svmin;
  border: .5svmin solid #a1a1a1;
  /* Touch improvements */
  touch-action: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.digraph:active {
  cursor: grabbing;
}

.digraph.dragging {
  opacity: 0.5;
  transform: rotate(5deg);
  transition: none;
  /* Disable transitions during drag */
}

/* Drag clone styles */
.drag-clone {
  pointer-events: none !important;
  user-select: none !important;
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
}

/* Touch-specific styles */
@media (hover: none) and (pointer: coarse) {
  .digraph {
    min-height: 44px;
    /* Minimum touch target size */
    min-width: 44px;
  }

  .digraph:active {
    transform: scale(0.95);
    transition: transform 0.1s ease;
  }
}

.digraph.in-target {
  cursor: pointer;
  font-size: 5svmin;
  text-align: center;
  transition: all 0.3s ease;
  height: 10svmin;
  line-height: 8.5svmin;
}



.digraph.fade-out {
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.5s ease-out;
}



.itemParent {
  padding-top: 1svmin;
}
</style>