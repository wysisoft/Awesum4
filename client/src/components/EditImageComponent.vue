<script lang="ts">

import { imageType } from '../../../server/typebox';

import { type PropType, ref } from 'vue';

import CameraPhoto, { FACING_MODES, IMAGE_TYPES } from 'jslib-html5-camera-photo';

interface refs {
  view: HTMLDivElement;
  videoId: HTMLVideoElement;
}

export default

  {
    props: {
      image: String,
      imageType: Number as PropType<imageType>,
      allowNone: Boolean,
    },
    setup(props) {
      let showCamera = ref(false);
      let showImageFilePicker = ref(false);
      let showImageUrlTextBox = ref(false);
      let cameraPhoto: CameraPhoto = null!;
      let imageType = ref(props.imageType);
      let imageGuid = ref(props.image);
      let imageSource = ref('');
      let previousImageSource = ref('');
      let imageData = ref('');

      let typedRefs: refs = null as unknown as refs;

      return {
        showCamera, showImageFilePicker,
        showImageUrlTextBox,
        cameraPhoto
        , imageSource
        , previousImageSource
        , imageData
        , imageType
        , imageGuid
        , typedRefs
      };
    },
    async mounted() {

      this.typedRefs = this.$refs as unknown as refs;

      if (this.imageGuid) {
        var mediaItem = await this.$awesum.AwesumDexieDB.serverMedia.get(this.imageGuid);

        if (mediaItem) {
          this.imageData = mediaItem.data;
        }
        else {
          this.imageData = '';
        }
      }
      if (this.imageType == imageType.Camera) {
        this.imageSource = 'From Camera'
        this.imageSourceChanged(true);
      }
      else if (this.imageType == imageType.File) {
        this.imageSource = 'From File'
        this.imageSourceChanged(true);
      }
      else if (this.imageType == imageType.WebAddress) {
        this.imageSource = 'From Web Address'
        this.imageSourceChanged(true);
      }
      else {
        this.imageSource = 'None'
      }
    },
    methods: {
      blobToDataURL(blob: any): Promise<string> {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string); // The result is the data URL
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });
      },
      dataURLToBlob(dataURL: string) {
        // Split the data URL into metadata and data parts
        const [metadata, data] = dataURL.split(',');
        const mimeType = metadata?.match(/:(.*?);/)?.[1]; // Extract the MIME type
        const byteString = atob(data); // Decode the base64 string

        // Convert the byte string to an array of bytes
        const byteArray = new Uint8Array(byteString.length);
        for (let i = 0; i < byteString.length; i++) {
          byteArray[i] = byteString.charCodeAt(i);
        }

        // Create and return a Blob
        return new Blob([byteArray], { type: mimeType });
      },
      resizeImage(file: any, maxWidth = 400, maxHeight = 200) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
              // Determine the scaling factor to fit within the max dimensions
              let scaleFactor = Math.min(maxWidth / img.width, maxHeight / img.height, 1);
              const canvas = document.createElement('canvas');
              canvas.width = img.width * scaleFactor;
              canvas.height = img.height * scaleFactor;

              const ctx = canvas.getContext('2d');
              if (ctx) {
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
              }

              // Convert the resized image back to a data URL (or Blob)
              canvas.toBlob((blob) => {
                if (blob) {
                  resolve(blob); // Returns a resized image as a Blob
                } else {
                  reject(new Error("Canvas conversion failed"));
                }
              }, 'image/jpeg'); // You can use 'image/png' or other formats
            };
            img.onerror = reject;
            img.src = e.target?.result as string;
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      },



      readFile(ev: Event, prop: string) {
        var reader = new FileReader();
        reader.onloadend = (e) => {
          (this as any)[prop] = e.target?.result as string;
        }

        if (ev.target) {
          if (ev.target instanceof HTMLInputElement) {
            if (ev.target.files && ev.target.files.length > 0) {
              reader.readAsDataURL(ev.target.files[0]);
            }
          }
        }
      },

      imageSourceChanged(dontClearData = false) {
        if (this.imageData && !dontClearData) {
          var y = confirm('This will clear any existing image. Continue?');
          if (y) {
            this.imageData = '';
          }
          else {
            this.imageSource = this.previousImageSource;
            return;
          }
        }

        this.previousImageSource = this.imageSource;

        this.showCamera = false;
        //document.getElementById('cameraContainer').style.display = 'none';

        this.showImageFilePicker = false;
        this.showImageUrlTextBox = false;
        if (this.imageSource == 'From File') {
          this.showImageFilePicker = true;
        }
        if (this.imageSource == 'From Web Address') {
          this.showImageUrlTextBox = true;
        }
        if (this.imageSource == 'From Camera') {
          this.showCamera = true;
          //document.getElementById('cameraContainer').style.display = '';


          this.$nextTick(() => {

            // get video and image elements
            let videoElement = this.typedRefs.videoId as HTMLVideoElement;
            //let imgElement = document.getElementById('imgId');


            let takePhotoButtonElement = this.typedRefs.view.getElementsByClassName('takePhotoButtonId')[0] as HTMLElement;


            // instantiate CameraPhoto with the videoElement
            let cameraPhoto = new CameraPhoto(videoElement);

            // start the camera with prefered environment facingMode ie. ()
            // if the environment facingMode is not avalible, it will fallback
            // to the default camera avalible.
            function startCameraDefaultResolution() {
              let facingMode = 'ENVIRONMENT';
              //@ts-ignore
              cameraPhoto.startCamera(FACING_MODES[facingMode])
                .then(() => {
                  let log =
                    `Camera started with default resolution and ` +
                    `prefered facingMode : ${facingMode}`;
                  console.log(log);
                })
                .catch((error: Error) => {
                  console.error('Camera not started!', error);
                });
            }

            // function called by the buttons.
            var takePhoto = async () => {
              let sizeFactor = 1;
              let imageType = IMAGE_TYPES.JPG;
              let imageCompression = 1;

              let config = {
                sizeFactor,
                imageType,
                imageCompression
              };

              this.imageData = cameraPhoto.getDataUri(config);

              var blob = this.dataURLToBlob(this.imageData)

              const resizedBlob = await this.resizeImage(blob);

              this.imageData = await this.blobToDataURL(resizedBlob);


              //this.showCamera = false;
            }



            function startCameraDefaultAll() {
              cameraPhoto.startCamera()
                .then(() => {
                  let log = `Camera started with default All`;
                  console.log(log);
                })
                .catch((error: Error) => {
                  console.error('Camera not started!', error);
                });
            }

            // start the camera with prefered environment facingMode ie. ()


            /* function takePhotoAndDownload() {
              let sizeFactor = 1;
              let imageType = IMAGE_TYPES.JPG;
              let imageCompression = 1;

              let config = {
                sizeFactor,
                imageType,
                imageCompression
              };

              let dataUri = cameraPhoto.getDataUri(config);
              downloadPhoto(dataUri, 'myPhoto', 1);
              //imgElement.src = dataUri;
            } */

            function showCameraSettings() {
              let settings = cameraPhoto.getCameraSettings();

              // by default is no camera...
              let innerHTML = 'No active camera';
              if (settings) {
                let { aspectRatio, frameRate, height, width } = settings;
                innerHTML = `
        <b>Current active camera:</b>
        aspectRatio:${aspectRatio}
        frameRate: ${frameRate}
        height: ${height}
        width: ${width}
    `;
              }
              //cameraSettingElement.innerHTML = innerHTML;
            }

            function showSwitchCameraButtons() {
              //@ts-ignore
              cameraPhoto.enumerateCameras().then((cameras: any) => {
                if (cameras && cameras.length > 0) {
                  let cameraButtonsContainer = document.getElementById('cameraButtonsContainerId');
                  cameraButtonsContainer!.innerHTML = '';

                  cameras.forEach((camera: any) => {
                    let { kind, label, deviceId } = camera;
                    const buttonElement = document.createElement('button');
                    buttonElement.type = 'button';
                    buttonElement.innerHTML = `${label}`;
                    (function (deviceId) {
                      buttonElement.addEventListener('click', function () {
                        console.log('click on', deviceId);
                        startCameraIdMaxResolution(deviceId);
                      });
                    })(deviceId);
                    cameraButtonsContainer!.appendChild(buttonElement);
                  });
                }
              }).catch((error: Error) => {
                console.log('Error could not enumerateCameras:', error);
              });
            }

            function stopCamera() {
              cameraPhoto.stopCamera()
                .then(() => {
                  console.log('Camera stoped!');
                })
                .catch((error: Error) => {
                  console.log('No camera to stop!:', error);
                });
            }

            function startCameraIdMaxResolution(deviceId: string) {
              cameraPhoto.startCameraMaxResolution(deviceId)
                .then(() => {
                  let log =
                    `Camera started with maximum resoluton and ` +
                    `prefered deviceId: ${deviceId} `;
                  console.log(log);
                })
                .catch((error: Error) => {
                  console.error('Camera not started!', error);
                });
            }

            setInterval(() => {
              showCameraSettings();
            }, 500);

            takePhotoButtonElement.onclick = takePhoto;

            showSwitchCameraButtons();
            startCameraDefaultResolution();
          });
        }
      },
      downloadImage() {
        var a = document.createElement('a');
        a.href = this.imageData;
        a.download = 'image.jpg';
        a.click();
      }
    },
  };

</script>

<template>
  <div class="view" ref="view">
    <div class="input-group mb-3" style="border:.1svmin solid #bfbfbf;border-radius:.7svmin;">
      <label style="width:16.5svmin;" class="input-group-text" for="inputGroupSelect01">Source</label>
      <select v-model="imageSource" @change="imageSourceChanged()" style="width:25svmin;padding-left:2svmin;"
        class="form-select">
        <option value="From Web Address">From Web Address</option>
        <option value="From File">From File</option>
        <option value="From Camera">From Camera</option>
        <option v-if="$props.allowNone" value="None">None</option>
      </select>
    </div>




    <div v-if="showImageFilePicker" class="input-group mb-3" style="margin-top:1svmin;">
      <input id="inputGroupFile01" class="form-control" type="file" @change="readFile($event, 'imageData')"
        style="padding-left:1.9svmin;font-size:2.5svmin;padding-top:1svmin;padding-bottom:1svmin;" />
    </div>

    <div v-if="showImageUrlTextBox" class="input-group mb-3" style="margin-top:1svmin;border:.1svmin solid #bfbfbf;border-radius:.7svmin;">
      <label class="input-group-text" style="width:16.5svmin;">Web Url</label>
      <input class="form-control" v-model="imageData" placeholder="https://..."
        style="width:71svmin;padding-left:2svmin;font-size:2.5svmin;" />
    </div>

    <div v-if="showCamera" class="formRow" style="padding-top:1svmin;display: flex;
    flex-direction: column;
    align-items: center;margin-top:1svmin;">
      <div style="display: flex;
    flex-direction: row;
    align-items: center;">
        <div id="cameraButtonsContainerContainerId">
          <div id="cameraButtonsContainerId" style="margin-bottom:1svmin;"></div>
          <video ref="videoId" autoplay="true" playsinline style="height:20svmin;"></video>
          <button class="btn btn-primary takePhotoButtonId" type="button" style="display:block;">Take Photo</button>
        </div>

      </div>
    </div>

    <div v-if="imageData">
    <h2 style="font-size:3svmin;margin-top:2svmin;text-align:center;">{{ $t($resources.Image_Preview.key) }}</h2>
    <div style="display: flex;
    flex-direction: column;
    align-items: center;justify-content: center;">
      <img v-bind:src="imageData"
        style="border:.2svmin solid black;height:20svmin;width:20svmin;object-fit: contain;" />
      <a style="cursor:pointer;" href="#" @click="downloadImage()">Download Image</a>

    </div>
  </div>





  </div>
</template>

<style lang="scss">
@use '../scss/bootstrap.scss';

#cameraButtonsContainerId button {
  @extend #{'.btn', '.btn-primary'};
}

#cameraButtonsContainerContainerId button {
  @extend #{'.btn', '.btn-primary'};
}

#cameraButtonsContainerId button{
  margin-right:1svmin;
  margin-bottom:1svmin;
}

</style>

<style scoped>
.formLabel {
  width: 100%;
}

.formInput,
.formInput::placeholder {
  padding: .1svmin;
}

.formInput {
  border: .1svmin solid gray;
  width: 30svmin;
  height: 5svmin;
  min-height: 5svmin;
}

.formRow {
  line-height: normal;
  font-size: 3svmin;
  margin-top: 1svmin;
}

.view {
  width: 97%;
}

.wavesurfer-region {
  background: blue;
}

#myAudio {
  margin: auto;
}

.myAudio-dimensions {
  width: 72svmin;
  height: 40svmin;
}

select {
  border-width: .1svmin !important;
  text-overflow: '';
  outline-width: .5svmin;
  padding: 0;
  margin: 0;
  text-indent: .1svmin;
  line-height: 4svmin;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.formLabelSelectDiv {
  position: relative;
}

.formLabelSelectDiv::after {
  content: "▼";
  font-size: 2svmin;
  color: #333;
  right: .05svmin;
  top: .1svmin;
  padding: 0;
  position: absolute;
  pointer-events: none;
  background-color: white;
  padding-top: .5svmin;
  padding-bottom: .8svmin;
  padding-right: 1svmin;
  padding-left: .5svmin;
}

select:focus-visible {
  outline: 0.5svmin solid black;
}

button {
  border-width: .1svmin;
  font-size: 3svmin;
  padding: .1svmin;
  margin: 0;
}

button:focus-visible {
  outline: 0.5svmin solid black;
}

input {
  border-width: .1svmin;
  font-size: 3svmin;
  padding: .1svmin;
  margin: 0;
  outline-width: .5svmin;
}

input:focus-visible {
  outline: 0.5svmin solid black;
}

textarea {
  border-width: .1svmin;
  font-size: 3svmin;
  padding: .1svmin;
  margin: 0;
  outline-width: .5svmin;
}

textarea:focus-visible {
  outline: 0.5svmin solid black;
}

.video-js {
  font-size: 2svmin;

}

#cameraButtonsContainerId button {
  height: 5svmin;
}
</style>