<script lang="ts">
import { createReusableTemplate } from '@vueuse/core'
import { v7 as uuid } from "uuid";
import { animate } from "motion";

import { awesum } from '@/awesum';
import Fireworks from 'fireworks-js';
import { Balloons } from '../Balloons';
import { confetti } from "@tsparticles/confetti";
import { imageModeType } from "../../../server/typebox";
import { ref, getCurrentInstance,onRenderTracked, onRenderTriggered } from 'vue';
import { I18nGlobal } from '@/i18nGlobal';
import { resources } from '@/resources/Resources';
import type { ServerFollowerDatabaseCompletionInterface } from "../../../server/serverInterfaces/ServerFollowerDatabaseCompletionInterface";
import type { ServerDatabaseItemInterface } from "../../../server/serverInterfaces/ServerDatabaseItemInterface";
import { audioType, imageType } from "../../../server/typebox";
import type { ServerSpellingDatabaseItemInterface } from "../../../server/serverInterfaces/ServerSpellingDatabaseItemInterface";


const [DefineTemplate, ReuseTemplate] = createReusableTemplate()



export default {
  components: {
    DefineTemplate,
    ReuseTemplate,
  },
  onRenderTracked(e:any) {
    console.log("SpellingItemView render tracked",e);
  },
  onRenderTriggered(e:any) {
    console.log("SpellingItemView render triggered",e);
  },
  setup() {
    console.log("SpellingItemView setup called");


    //@ts-ignore
    const { type } = getCurrentInstance()

    // The scopeId Vue generates for this component
    const scopeId = type.__scopeId



    let imageMode = ref(imageModeType.Image);
    let imageData = ref('');
    let showModal = ref(false);
    const spellingDiv = ref(null as any as HTMLElement);
    const footerDiv = ref(null as any as HTMLElement);
    const spellingOutlineDiv = ref(null as any as HTMLElement);
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

    let completedText = (awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.text

    return {
      usedHint,
      imageMode,
      spellingDiv,
      mouseDown,
      mousePos,
      button,
      selectedChars,
      footerDiv,
      footerMouseDown,
      footerMousePos,
      spellingOutlineDiv,
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
      scopeId,
      completedText
    };
  },
  async created() {
    console.log("SpellingItemView created called");


    document.onkeydown = (e: KeyboardEvent) => {

      // if (e.key == 'ArrowLeft' && !e.altKey) {
      //   //get all buttons in view ordered by tab index, some buttons are inside of other buttons
      //   var buttons = document.querySelectorAll('button');
      //   var currentButton = document.activeElement as HTMLButtonElement;
      //   var currentIndex = Array.from(buttons).indexOf(currentButton);
      //   var previousButton = buttons[currentIndex - 1] as HTMLButtonElement;
      //   if (previousButton) {
      //     previousButton.focus();
      //     if(previousButton.parentElement == this.$refs.footerDiv) {
      //       previousButton.scrollIntoView({ behavior: 'instant', inline: 'center' });
      //     }
      //   }
      //   e.stopPropagation();
      //   e.preventDefault();  
      // }
      // else if (e.key == 'ArrowRight' && !e.altKey) {
      //   //get all buttons in view ordered by tab index
      //   var buttons = document.querySelectorAll('button');
      //   var currentButton = document.activeElement as HTMLButtonElement;
      //   var currentIndex = Array.from(buttons).indexOf(currentButton);
      //   var nextButton = buttons[currentIndex + 1] as HTMLButtonElement;
      //   if (nextButton) {
      //     nextButton.focus();
      //     if(nextButton.parentElement == this.$refs.footerDiv) {
      //     nextButton.scrollIntoView({ behavior: 'instant', inline: 'center' });
      //     }
      //   }
      //   e.stopPropagation();
      //   e.preventDefault();
      // }
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

    this.spellingDiv = this.$refs.spellingDiv as HTMLElement;
    this.footerDiv = this.$refs.footerDiv as HTMLElement;


    for (const child of this.footerDiv.children) {
      if (child.textContent == this.$awesum.currentDatabaseItem.order.toString()) {
        child.scrollIntoView({ behavior: 'instant', inline: 'center' });
        break;
      }
    }




    this.spellingOutlineDiv = this.$refs.spellingOutlineDiv as HTMLElement;



    //commenting this out for now, might need it back later, but don't think i do
    //this.footerDiv.style.width = (items.length ) * 5 + 'svmin';





    var letters = new Array<Array<string>>();

    if ((awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.letters.length == 0) {
      var word = (awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.text;
      for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        const childArray = [letter.toLocaleUpperCase()];
        // generate a random list of 6 similar letters
        const similarLetters = this.generateSimilarLetters(letter);
        for (let j = 0; j < similarLetters.length; j++) {
          childArray.push(similarLetters[j]);
        }
        // shuffle the child array

        this.shuffleArray(childArray);

        letters.push(childArray);
      }

      //if the first letter of each letters element spells the word, shuffle again
      for (const element of letters) {
        if (element[0] == (awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.text[letters.indexOf(element)].toLocaleUpperCase()) {
          this.shuffleArray(element);
        }
      }
    }
    else {
      var lettersTemp = (awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.letters.split('\n');

      var itr = 0;
      for (const iterator of lettersTemp) {
        var arr = [];
        for (const letter of iterator) {
          if (letter != ',' && letter != ' ')
            arr.push(letter.toLocaleUpperCase());
        }

        //make sure arr contains the nth letter of the word, if not, add it
        if (!arr.includes((awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.text[itr].toLocaleUpperCase())) {
          arr.push((awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.text[itr].toLocaleUpperCase());
        }

        //this.shuffleArray(arr);

        letters.push(arr);
        itr++;
      }
    }









    var word = (awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.text;

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

      this.spellingDiv.style.width = (word.length * 7.5 + 2) + 'svmin';
      this.spellingDiv.style.marginTop = '7.6svmin';
      this.spellingOutlineDiv.style.width = (word.length * 7.5 + 2) + 'svmin';

      for (let i = 0; i < word.length; i++) {

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
            if (parseFloat((e.target as HTMLButtonElement)!.style.top) > -parseFloat((e.target as HTMLButtonElement)!.style.height) + 15
            ) {
              (e.target as HTMLButtonElement)!.style.top = (parseFloat((e.target as HTMLButtonElement)!.style.top) - 7.6) + 'svmin';
            }
            e.stopPropagation()
            e.preventDefault();
          }
          else if (e.key === 'ArrowDown') {
            if (parseFloat((e.target as HTMLButtonElement)!.style.top) <= -7.6) {
              (e.target as HTMLButtonElement)!.style.top = (parseFloat((e.target as HTMLButtonElement)!.style.top) + 7.6) + 'svmin';
            }
            e.stopPropagation()
            e.preventDefault();
          }

          //else if letter is a-z
          else if (e.key.match(/^[a-z]$/i)) {

            var chars = (e.target as HTMLElement).childNodes;
            var letterTop = 0;
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
            this.button.focus();
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
          parentDiv.focus();
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

      }


      window.onkeydown = (e: KeyboardEvent) => {
        // if (e.key === 'ArrowRight' && e.ctrlKey && awesum.canGoForward()) {
        //   awesum.goForward();
        // }
        // if (e.key === 'ArrowLeft' && e.ctrlKey && awesum.canGoBack()) {
        //   awesum.goBack();
        // }
      }
    }
  },

  methods: {
    async beforeRouteLeave() {
      document.getElementById('fireworksCanvas')!.remove();
      document.getElementById('balloonCanvas')!.remove();
      document.getElementById('emojiCanvas')!.remove();
      document.getElementById('confettiCanvas')!.remove();
      
    },
    async beforeRouteEnter() {
      let imageSrc = await awesum.AwesumDexieDB.serverMedia.get((awesum.currentDatabaseItemTemp as ServerSpellingDatabaseItemInterface).data.image);
      if (imageSrc) {
        awesum.currentDatabaseItemAsyncData.imageSrc = imageSrc.data;
      }

    },
    applyHint() {
      this.usedHint = true;
      var children = document.getElementsByClassName('parentDiv');
      var idx = 0;
      for (const ltr of children as any as Array<HTMLElement>) {
        var correctChar = (awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.text[idx++];
        if (this.selectedChars[idx]?.toLocaleLowerCase() != correctChar?.toLocaleLowerCase() || ltr.style.top == '7.6svmin') {
          var allChildren = ltr.children
          for (let index = allChildren.length - 1; index >= 0; --index) {
            const child = allChildren[index] as HTMLElement;

            if (child.innerText.toLocaleLowerCase() == correctChar.toLocaleLowerCase()) {
              ltr.style.top = -(7.6 * index) + 'svmin';
              this.sliderChanged(ltr);
              return;

            }
          }
        }
      }
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
        //scroll right
        (this.$refs.footerDivParent as HTMLDivElement).scrollLeft += 20;
      }
      else {
        //scroll left
        (this.$refs.footerDivParent as HTMLDivElement).scrollLeft -= 20;
      }
      e.stopPropagation();
      e.preventDefault();
    },
    async playSound(e: Event) {
      var audioOrSpeech = '';
      if ((awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.audioType == audioType.TTS) {
        audioOrSpeech = (awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.text;
      }
      else {
        var audioOrSpeechMedia = await this.$awesum.AwesumDexieDB.serverMedia.get((awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.sound);
        if (audioOrSpeechMedia) {
          audioOrSpeech = audioOrSpeechMedia.data;
        }
      }
      awesum.playAudioOrSpeech((awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.audioType, audioOrSpeech);
      e.stopPropagation();
      e.preventDefault();
    },
    toggleLightbox() {
      //if(!this.completedFromLoad){
      if (this.showModal) {

        (this.$refs.spellingDivParent as HTMLDivElement).style.display = '';
        (this.$refs.footerDivParent as HTMLDivElement).style.display = '';
      }
      else {
        (this.$refs.spellingDivParent as HTMLDivElement).style.display = 'none';
        (this.$refs.footerDivParent as HTMLDivElement).style.display = 'none';
      }

      this.showModal = !this.showModal;
      //}
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

          this.selectedChars[charIndex] = (chars[i] as HTMLElement).innerHTML;
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

      if (this.changedSliders.length == (awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.text.length &&
        this.selectedChars.join('').toLocaleLowerCase() != (awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.text.toLocaleLowerCase()
      ) {



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
              if (currentLetter.innerHTML.toLocaleLowerCase() != (this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.text[i].toLocaleLowerCase()) {
                (currentLetter as HTMLElement).style.border = '.5svmin dashed red';
              }

            }
          }

        }, 2000);







      }



      if (awesum.currentDatabaseItem && this.selectedChars.join('').toLocaleLowerCase() == (awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.text.toLocaleLowerCase()) {



        this.sliderDoneChanging = true;
        var items = document.getElementsByClassName('parentDiv');
        for (const item of items) {
          (item as HTMLElement).style.top = '0px';
          (item as HTMLElement).style.height = '7.6svmin';
          (item as HTMLElement).style.opacity = '1';
          (item as HTMLElement).setAttribute('disabled', 'disabled')
        }

        var items = document.getElementsByClassName('nonCurrentLetter');
        for (const item of items) {
          (item as HTMLElement).style.display = 'none';
        }

        var audioOrSpeech = '';
        if ((this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successSound) {
          var successSoundMedia = await this.$awesum.AwesumDexieDB.serverMedia.get((this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successSound);
          if (successSoundMedia) {
            audioOrSpeech = successSoundMedia.data;
          }
        }
        await this.$awesum.playAudioOrSpeech(audioType.File, audioOrSpeech);

        document.getElementById('outlineRectParent')!.style.display = '';
        (this.$refs.spellingOutlineDiv as HTMLDivElement).style.display = 'none';

        var rect = document.getElementById('outlineRect') as HTMLOrSVGElement;
        (rect as SVGRectElement).setAttribute('width', ((this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.text.length * 7.6 +1) + '%');
        (rect as SVGRectElement).setAttribute('x', ((100 - (this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.text.length * 7.6) / 2 -1) + '%');
        animate(rect,
          {
            //@ts-ignore
            strokeDasharray: 300,
            strokeDashoffset: [300, 0],
          }, {
          duration: 3,
        });

        if (this.usedHint) {
          setTimeout(() => {
            awesum.refreshNumber++;
          }, 2000);

        }
        else {



          //search for a completion with the current item id
          if (!this.$awesum.currentDatabaseCompletions.has(awesum.currentDatabaseItem.id)) {

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

            await this.$awesum.AwesumDexieDB.transaction('rw', 
            this.$awesum.AwesumDexieDB.serverFollowerDatabaseCompletions,
            this.$awesum.AwesumDexieDB.additions,
            this.$awesum.AwesumDexieDB.serverDatabases,
            async () => {
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










            if ((awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successAnimations.indexOf('Balloons') > -1) {
              var balloonCanvas = document.getElementById('balloonCanvas') as HTMLCanvasElement;
              balloonCanvas.style.display = '';
              this.balloons = new Balloons(balloonCanvas);
              this.balloons.createBalloons(30);
            }

            if ((awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successAnimations.indexOf('Fireworks') > -1) {

              let fireworksCanvas = document.getElementById('fireworksCanvas') as HTMLCanvasElement
              fireworksCanvas.style.display = '';

              const fireworks = new Fireworks(fireworksCanvas, { /* options */ })
              fireworks.start();
              this.fireworks = fireworks;
            }

            let confettiCanvas = document.getElementById('confettiCanvas') as HTMLCanvasElement

            if ((awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successAnimations.indexOf('Confetti') > -1) {

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

            await awesum.delay((this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successImageTime);

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

              //route to /completed instead of /(awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.order



              if ((awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successImageType == imageType.None) {

              }
              else {
                document.getElementById('outlineRectParent')!.style.display = 'none';
                var successImageMedia = await this.$awesum.AwesumDexieDB.serverMedia.get((this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successImage);
                if (successImageMedia) {
                  (this.$refs.successImage as HTMLImageElement).src = successImageMedia.data;
                }
                (this.$refs.successImageParent as HTMLDivElement).style.display = '';
                await this.$awesum.delay((this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successImageTime);
              }

              this.$router.push('/' + encodeURI(this.$awesum.currentApp.name) + '/' +
                encodeURI(this.$awesum.currentDatabase.name) + '/' +
                encodeURI(this.$awesum.currentDatabaseUnit.name) + '/' +
                I18nGlobal.t(resources.completed.key));


            }
            else {

              //replace the view content with (awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successImage
              //if it is a web address, use it, otherwise use the media
              //if it is a web address, use it, otherwise use the media
              if ((awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successImageType == imageType.None) {

              }
              else {
                document.getElementById('outlineRectParent')!.style.display = 'none';
                var successImageMedia = await this.$awesum.AwesumDexieDB.serverMedia.get((this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successImage);
                if (successImageMedia) {
                  (this.$refs.successImage as HTMLImageElement).src = successImageMedia.data;
                }
                (this.$refs.successImageParent as HTMLDivElement).style.display = '';
                await this.$awesum.delay((this.$awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.successImageTime);
              }

              awesum.goToNextIncomplete();

            }
          }
        }
      }
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
  }
}
</script>

<template>
  <div>
    <div class="view" ref="view"
      style="display: flex;justify-items: center;height: 100%;flex-direction: column;align-items: center;position:relative;overflow: hidden;">

      <div id="balloonCanvas"
        style="display: none; position:absolute;width:100svmin;height:100svmin;margin:auto;z-index:9999;pointer-events:none;overflow: hidden;">
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
        <div id="imageAndSound" ref="imageAndSound"
          :style="'height: ' + (showModal ? '82svmin' : '') + ';width: 100%;'">
          <button @click="toggleLightbox()" class='btn btn-link' :disabled='showModal'
            style="text-decoration: none; ;background:white;border:.1svmin solid black;">
            <img v-if="imageMode == imageModeType.Image" style="object-fit:contain;"
              :src="$awesum.currentDatabaseItemAsyncData.imageSrc"
              :style="'height:' + (showModal ? '80svmin' : '30svmin') + ';width:' + (showModal ? '82svmin' : '100%')" />
            <div style="height:30svmin;width:90svmin;" v-if="imageMode == imageModeType.VisualHint"><span>
                {{ ($awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.visualHint }}
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
        :additionalCss="'max-width:95svmin;position:relative;left:1svmin;'" @hidden="toggleLightbox()"
        :shown="showModal" :title="''">
        <ReuseTemplate />
      </Modal>


      <div v-if="!showModal">
        <ReuseTemplate />
      </div>

      <div ref="spellingDivParent" style="overflow:hidden">
        <div  v-if="completedFromLoad" 
          style="display: flex;justify-content: space-evenly;align-content: center;align-items: center;width: 100svmin;height: 30svmin;">
          <div
            style="text-align: center; width: 90svmin; height: 28svmin; background: #35ff04; z-index: 9999;border-radius: 1svmin;border:1svmin solid black;padding-top:5svmin;">
            <div style="padding-bottom:2svmin;">Completed!</div>
            <div v-for="c in ($awesum.currentDatabaseItem as ServerSpellingDatabaseItemInterface).data.text"
              class="letterStyle" style="display: inline-block;margin-left:.25svmin;">
              {{ c.toLocaleUpperCase() }}
            </div>
          </div>
        </div>
        <div v-if="!completedFromLoad" id="spellingDiv" ref="spellingDiv"
          style="height: 41svmin; position: relative;user-select: none;z-index: 1;touch-action: none;">
          <div ref="spellingOutlineDiv" id="spellingOutlineDiv"
            style="height:7.7svmin;border:.1svmin solid black;position:absolute;top:.6svmin;user-select:none;">
          </div>
        </div>
      </div>

      <div id="outlineRectParent"
        style="display:none;position:absolute;width:100svmin;height: 100svmin;left:0svmin;top:0svmin;">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
          style="position:absolute;top:1.1svmin;user-select:none;">
          <rect id="outlineRect" x="0" y="40%" width="100%" height="8.5%" fill="none" stroke="green" stroke-width=".3">
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

      <!--use css to hide scrollbars on footerDivParent but still allow scrolling-->
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
        " v-bind:style="{ backgroundColor: clearingUnitItemCompletions || $awesum.currentDatabaseCompletions.has(item.id) ? '#68ff68' : '', border: $awesum.currentDatabaseItem.order == item.order ? '.5svmin dashed black' : '' }"
            @click="footerButtonClick($event, item)">
            <span>{{ item.order }}</span>



          </button>
        </button>
      </div>

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
</style>