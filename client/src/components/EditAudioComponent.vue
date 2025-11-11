<script>
import WaveSurfer from 'wavesurfer.js'
import RecordPlugin from 'wavesurfer.js/dist/plugins/record.esm.js'
import RegionsPlugin from 'wavesurfer.js/dist/plugins/regions.esm.js'
import { ref } from 'vue';
import { audioType } from '../../../server/typebox';



export default {
  props: {
    audio: String,
    audioType: Number,
    allowNone: Boolean,
  },
  setup(props) {
    return {
      showImageFilePicker: ref(false),
      showImageUrlTextBox: ref(false),
      showAudioFilePicker: ref(false),
      showAudioUrlTextBox: ref(false),
      audioType: props.audioType,
      soundSource: ref(''),
      previousSoundSource: ref(''),
      audioGuid: ref(''),
      soundData: ref(props.audio),
      wavesurfer: ref(null),
      record: ref(null),
      regions: ref(null),
      isRecording: ref(false),
      isStarting: ref(false),
      hasRecording: ref(false),
      loopRegions: ref(true),
      regionsList: ref([]),
      activeRegion: ref(null),
      recordingTimer: ref(null),
      isPlaying: ref(false),
      audioContext: ref(null)
    }
  },
  async mounted() {
    if (this.audioType == audioType.TTS) {
      this.soundData = 'TTS'
    }
    else if (this.audioType == audioType.None) {
      this.soundData = '';
    }
    else {
      var audioOrSpeechMedia = await this.$awesum.AwesumDexieDB.serverMedia.get(this.soundData);
      if (audioOrSpeechMedia) {
        this.soundData = audioOrSpeechMedia.data;
      }
    }

    if (this.audioType == audioType.TTS) {
      this.soundSource = 'From Text To Speech'
      this.soundSourceChanged(null, true);
    }
    else {

      if (this.audioType == audioType.Microphone) {
        this.soundSource = 'From Microphone'
        this.soundSourceChanged(null, true);

        (this.$refs.microphoneContainer).style.display = '';
        (this.$refs.view).getElementsByClassName('vjs-icon-audio-perm')[0].click();
      }
      else if (this.audioType == audioType.WebAddress) {
        this.soundSource = 'From Web Address'
        this.soundSourceChanged(null, true);
      }
      else if (this.audioType == audioType.File) {

        this.audioType = audioType.File;
        this.soundSource = 'From File'
        this.soundSourceChanged(null, true);
        this.fileOpened = true;
        (this.$refs.microphoneContainer).style.display = '';
        //this.$refs.view.getElementsByClassName('vjs-icon-audio-perm')[0].click();
      }
      else {
        this.soundSource = 'None'
        this.soundSourceChanged(null, true);
      }
    }
  },
  beforeUnmount() {
    if (this.record && this.isRecording) {
      this.record.stopRecording()
    }
    if (this.wavesurfer) {
      this.wavesurfer.destroy()
    }
  },
  methods: {
    initWaveSurfer(options = {}) {
      this.activeRegion = null
      if (this.wavesurfer) {
        this.wavesurfer.destroy()
      }

      const {
        mode = 'recording', // 'recording' or 'playback'
        url = null,
        blob = null
      } = options

      // Determine colors based on mode
      const colors = mode === 'recording'
        ? { waveColor: '#4F4A85', progressColor: '#383351' }
        : { waveColor: '#28a745', progressColor: '#218838' }

      // Create base configuration
      const config = {
        container: this.$refs.waveform,
        waveColor: colors.waveColor,
        progressColor: colors.progressColor,
        cursorColor: '#FF6B35',
        barWidth: 2,
        barRadius: 3,
        cursorWidth: 2,
        height: 200,
        barGap: 3,
        responsive: true,
        normalize: mode === 'playback', // true for playback, false for recording
        fillParent: true,
        scrollParent: false,
        hideScrollbar: true,
        autoCenter: true,
        minPxPerSec: 50,
        barMinHeight: 1
      }

      // Add URL if provided, or create URL from blob
      if (url) {
        config.url = url
      } else if (blob) {
        config.url = URL.createObjectURL(blob)
      }

      // Initialize plugins array
      const plugins = []

      // Add Regions plugin for playback mode
      if (mode === 'playback') {
        this.regions = RegionsPlugin.create()
        plugins.push(this.regions)
      }

      // Add plugins to config if any exist
      if (plugins.length > 0) {
        config.plugins = plugins
      }

      this.wavesurfer = WaveSurfer.create(config)

      // Initialize Record plugin for recording mode
      if (mode === 'recording') {
        this.record = this.wavesurfer.registerPlugin(
          RecordPlugin.create({
            renderRecordedAudio: false,
            scrollingWaveform: false,
            continuousWaveform: false,
            continuousWaveformDuration: 30
          })
        )

        // Handle record events
        this.record.on('record-start', () => {
          this.isRecording = true
          this.isStarting = false
          // Hide cursor during recording
          this.wavesurfer.setOptions({ cursorWidth: 0 })
          console.log('Recording started')

          // Auto-stop recording after 5 seconds
          this.recordingTimer = setTimeout(() => {
            if (this.record && this.record.isRecording()) {
              this.record.stopRecording()
            }
          }, 5000)
        })

        this.record.on('record-end', (blob) => {
          this.isRecording = false
          this.isStarting = false
          this.hasRecording = true
          // Clear the timer
          if (this.recordingTimer) {
            clearTimeout(this.recordingTimer)
            this.recordingTimer = null
          }
          // Show cursor after recording
          this.wavesurfer.setOptions({ cursorWidth: 2 })
          console.log('Recording ended', blob)
          this.createRecordedWavesurfer(blob)
        })

        this.record.on('record-progress', (time) => {
          // Optional: you can track recording time here
          console.log('Recording progress:', time)
        })
      }

      // Set up region functionality for playback mode
      if (mode === 'playback' && this.regions) {
        // Enable drag selection
        this.regions.enableDragSelection({
          color: 'rgba(255, 107, 53, 0.1)',
        })

        this.regions.on('region-created', (region) => {
          if (this.activeRegion) {
            this.activeRegion.remove()
          }
          this.activeRegion = region
        })

        // Reset the active region when the user clicks anywhere in the waveform
        this.wavesurfer.on('click', () => {
          if (this.activeRegion) {
            this.activeRegion.remove()
          }
        })
      }

      // Handle playback events (common to both modes)
      this.wavesurfer.on('play', () => {
        this.isPlaying = true
      })

      this.wavesurfer.on('pause', () => {
        this.isPlaying = false
      })

      this.wavesurfer.on('finish', () => {
        this.isPlaying = false
      })

      // Create test regions after audio loads
      this.wavesurfer.on('decode', () => {
        console.log('Audio decoded, regions ready')
      })
    },

    createRecordedWavesurfer(blob) {
      const recordedUrl = URL.createObjectURL(blob)
      this.initWaveSurfer({ mode: 'playback', url: recordedUrl })
    },

    async toggleRecording() {
      if (this.record && this.record.isRecording()) {
        // Stop recording
        this.record.stopRecording()
      } else {
        this.initWaveSurfer()
        // Start recording
        this.isStarting = true
        try {
          await this.record.startRecording()
        } catch (error) {
          console.error('Error starting recording:', error)
          alert('Error starting recording. Please check microphone permissions.')
          this.isStarting = false
        }
      }
    },

    trimToSelection() {
      if (this.activeRegion && this.wavesurfer) {
        console.log('Trimming to selection:', this.activeRegion.start, 'to', this.activeRegion.end)

        // Get the current audio URL
        const currentUrl = this.wavesurfer.getMediaElement().src

        // Create a new audio element to work with the current audio
        const audio = new Audio(currentUrl)
        audio.crossOrigin = 'anonymous'

        audio.onloadedmetadata = () => {
          // Create an audio context
          const audioContext = new (window.AudioContext || window.webkitAudioContext)()

          // Fetch the audio data
          fetch(currentUrl)
            .then(response => response.arrayBuffer())
            .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
            .then(audioBuffer => {
              // Calculate start and end samples
              const sampleRate = audioBuffer.sampleRate
              const startSample = Math.floor(this.activeRegion.start * sampleRate)
              const endSample = Math.floor(this.activeRegion.end * sampleRate)
              const length = endSample - startSample

              // Create a new audio buffer with just the selected region
              const trimmedBuffer = audioContext.createBuffer(
                audioBuffer.numberOfChannels,
                length,
                sampleRate
              )

              // Copy the selected portion of each channel
              for (let channel = 0; channel < audioBuffer.numberOfChannels; channel++) {
                const channelData = audioBuffer.getChannelData(channel)
                const trimmedData = trimmedBuffer.getChannelData(channel)

                for (let i = 0; i < length; i++) {
                  trimmedData[i] = channelData[startSample + i]
                }
              }

              // Convert to blob and create new wavesurfer
              this.audioBufferToBlob(trimmedBuffer).then(blob => {
                this.initWaveSurfer({ mode: 'playback', blob })
                console.log('Audio trimmed successfully')
              })

              this.activeRegion = null
            })
            .catch(error => {
              console.error('Error trimming audio:', error)
            })


        }


      }
    },

    audioBufferToBlob(audioBuffer) {
      return new Promise((resolve) => {
        // Create an offline audio context
        const offlineContext = new OfflineAudioContext(
          audioBuffer.numberOfChannels,
          audioBuffer.length,
          audioBuffer.sampleRate
        )

        // Create a buffer source
        const source = offlineContext.createBufferSource()
        source.buffer = audioBuffer
        source.connect(offlineContext.destination)
        source.start()

        // Render the audio
        offlineContext.startRendering().then(renderedBuffer => {
          // Convert to WAV format
          const wavBlob = this.audioBufferToWav(renderedBuffer)
          resolve(wavBlob)
        })
      })
    },

    audioBufferToWav(buffer) {
      const length = buffer.length
      const numberOfChannels = buffer.numberOfChannels
      const sampleRate = buffer.sampleRate
      const arrayBuffer = new ArrayBuffer(44 + length * numberOfChannels * 2)
      const view = new DataView(arrayBuffer)

      // WAV header
      const writeString = (offset, string) => {
        for (let i = 0; i < string.length; i++) {
          view.setUint8(offset + i, string.charCodeAt(i))
        }
      }

      writeString(0, 'RIFF')
      view.setUint32(4, 36 + length * numberOfChannels * 2, true)
      writeString(8, 'WAVE')
      writeString(12, 'fmt ')
      view.setUint32(16, 16, true)
      view.setUint16(20, 1, true)
      view.setUint16(22, numberOfChannels, true)
      view.setUint32(24, sampleRate, true)
      view.setUint32(28, sampleRate * numberOfChannels * 2, true)
      view.setUint16(32, numberOfChannels * 2, true)
      view.setUint16(34, 16, true)
      writeString(36, 'data')
      view.setUint32(40, length * numberOfChannels * 2, true)

      // Write audio data
      let offset = 44
      for (let i = 0; i < length; i++) {
        for (let channel = 0; channel < numberOfChannels; channel++) {
          const sample = Math.max(-1, Math.min(1, buffer.getChannelData(channel)[i]))
          view.setInt16(offset, sample * 0x7FFF, true)
          offset += 2
        }
      }

      return new Blob([arrayBuffer], { type: 'audio/wav' })
    },

    playAudio() {
      if (this.wavesurfer) {
        this.wavesurfer.play()
      }
    },

    pauseAudio() {
      if (this.wavesurfer) {
        this.wavesurfer.pause()
      }
    },

    stopAudio() {
      if (this.wavesurfer) {
        this.wavesurfer.stop()
      }
    },

    loadAudio(base64String) {
      this.soundData = base64String;
      (this.$refs.microphoneContainer).style.display = '';

      // Decode the audio data
      const audioContext = new (window.AudioContext || window.webkitAudioContext)()

      // Convert base64 string back to ArrayBuffer
      const binaryString = atob(base64String)
      const uint8Array = new Uint8Array(binaryString.length)
      for (let i = 0; i < binaryString.length; i++) {
        uint8Array[i] = binaryString.charCodeAt(i)
      }
      const arrayBuffer = uint8Array.buffer

      audioContext.decodeAudioData(arrayBuffer)
        .then(audioBuffer => {
          console.log('Audio duration:', audioBuffer.duration)

          // If audio is longer than 5 seconds, trim it
          if (audioBuffer.duration > 5) {
            console.log('Trimming audio to first 5 seconds')
            const trimmedBuffer = this.trimAudioBuffer(audioBuffer, 0, 5)
            this.audioBufferToBlob(trimmedBuffer).then(blob => {
              this.hasRecording = true
              this.initWaveSurfer({ mode: 'playback', blob })
              console.log('Audio file loaded and trimmed')
            })
          } else {
            // Audio is 5 seconds or less, use as is
            this.audioBufferToBlob(audioBuffer).then(blob => {
              this.hasRecording = true
              this.initWaveSurfer({ mode: 'playback', blob })
              console.log('Audio file loaded')

            })
          }
        })
        .catch(error => {
          console.error('Error decoding audio file:', error)
          alert('Error loading audio file. Please try a different file.')
        })
    },

    loadAudioFile(event) {
      const file = event.target.files[0]
      if (file) {
        console.log('Loading audio file:', file.name)

        // Create audio context to process the file
        const audioContext = new (window.AudioContext || window.webkitAudioContext)()

        const reader = new FileReader()
        reader.onload = (e) => {
          const arrayBuffer = e.target.result

          // Convert ArrayBuffer to base64 string
          const uint8Array = new Uint8Array(arrayBuffer)
          const base64String = btoa(String.fromCharCode.apply(null, uint8Array))

          this.loadAudio(base64String);


        }
        reader.readAsArrayBuffer(file)

        // Reset the file input
        event.target.value = ''
      }
    },

    trimAudioBuffer(audioBuffer, startTime, endTime) {
      const sampleRate = audioBuffer.sampleRate
      const startSample = Math.floor(startTime * sampleRate)
      const endSample = Math.floor(endTime * sampleRate)
      const length = endSample - startSample

      // Create a new audio buffer with just the selected portion
      const trimmedBuffer = new AudioContext().createBuffer(
        audioBuffer.numberOfChannels,
        length,
        sampleRate
      )

      // Copy the selected portion of each channel
      for (let channel = 0; channel < audioBuffer.numberOfChannels; channel++) {
        const channelData = audioBuffer.getChannelData(channel)
        const trimmedData = trimmedBuffer.getChannelData(channel)

        for (let i = 0; i < length; i++) {
          trimmedData[i] = channelData[startSample + i]
        }
      }

      return trimmedBuffer
    },
    soundSourceChanged(ev, dontClearData = false) {

      if (this.soundSource == 'From Microphone') {
        if (this.soundData) {
          this.loadAudio(this.soundData)
        }
      }
      else if (this.soundData && !dontClearData) {
        var y = confirm('This will clear any existing sound. Continue?');
        if (y) {
          this.soundData = '';
        }
        else {
          this.soundSource = this.previousSoundSource;
          return;
        }
      }

      // if (this.soundSource == 'From Text To Speech') {
      //   this.soundData = 'TTS';
      // }

      this.previousSoundSource = this.soundSource;

      (this.$refs.microphoneContainer).style.display = 'none';


      this.showAudioFilePicker = false;
      this.showAudioUrlTextBox = false;
      if (this.soundSource == 'From File') {
        this.fileOpened = false;
        this.showAudioFilePicker = true;
      }
      if (this.soundSource == 'From Web Address') {
        this.showAudioUrlTextBox = true;
      }
      if (this.soundSource == 'From Microphone' || this.soundSource == 'From File') {


        (this.$refs.microphoneContainer).style.display = '';

      }
    }
  }
}
</script>

<template>


  <div class="view" ref="view">

    <div class="input-group mb-3">
      <label style="width:17svmin;" class="input-group-text" for="inputGroupSelect01">Source</label>
      <select class="form-select" v-model="soundSource" @change="soundSourceChanged" style="width:75svmin;">
        <option value="From Web Address">From Web Address</option>
        <option value="From File">From File</option>
        <option value="From Microphone">From Microphone</option>
        <option value="From Text To Speech">From Text To Speech</option>
        <option v-if="$props.allowNone" value="None">None</option>

      </select>
    </div>


    <div id="micContainer">
      <div class="formRow" ref="microphoneContainer" style="display:none;margin-left:2svmin;">

        <div class="audio-recorder">

          <div class="controls">
            <button @click="toggleRecording" :disabled="isStarting" class="btn"
              :class="isRecording ? 'btn-danger' : 'btn-primary'">
              {{ isRecording ? 'Stop Recording' : 'Start Recording' }}
            </button>

            <button v-if="activeRegion && hasRecording && !isRecording" @click="trimToSelection"
              class="btn btn-success">
              Trim to Selection
            </button>

          </div>

          <div class="waveform-container">
            <div ref="waveform" class="waveform"></div>
          </div>

          <div class="playback-controls" v-if="hasRecording && !isRecording">
            <button @click="playAudio" class="btn btn-success">
              {{ isPlaying ? 'Pause' : 'Play' }}
            </button>
            <button v-if="isPlaying" @click="pauseAudio" class="btn btn-warning">
              Pause
            </button>
            <button v-if="isPlaying" @click="stopAudio" class="btn btn-secondary">
              Stop
            </button>
          </div>
        </div>

      </div>
    </div>


    <div v-if="showAudioFilePicker" class="input-group mb-3" style="margin-top:1svmin;">
      <input id="inputGroupFile01" class="form-control" type="file" @change="loadAudioFile($event)"
        style="padding-left:1.9svmin;font-size:2.5svmin;padding-top:1svmin;padding-bottom:1svmin;" />
    </div>

    <div v-if="showAudioUrlTextBox" class="input-group mb-3" style="margin-top:1svmin;">
      <label class="input-group-text" style="width:17svmin;">Web Url</label>
      <input class="form-control" v-model="soundData" placeholder="https://..." style="width:71svmin;" />
      <audio v-if="soundData" controls style="width:94svmin;margin-top:2svmin;">
        <source :src="soundData" type="audio/mpeg">
      </audio>
    </div>







  </div>



</template>


<style scoped>
.audio-recorder {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

.controls {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 20px;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 120px;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background-color: #0056b3;
}

.btn-danger {
  background-color: #dc3545;
  color: white;
}

.btn-danger:hover:not(:disabled) {
  background-color: #c82333;
}

.btn-success {
  background-color: #28a745;
  color: white;
}

.btn-success:hover:not(:disabled) {
  background-color: #218838;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-secondary:hover:not(:disabled) {
  background-color: #545b62;
}

.btn-warning {
  background-color: #ffc107;
  color: #212529;
}

.btn-warning:hover:not(:disabled) {
  background-color: #e0a800;
}

.status {
  text-align: center;
  margin-bottom: 20px;
  min-height: 24px;
}

.recording-status {
  color: #dc3545;
  font-weight: bold;
  animation: pulse 1.5s infinite;
}

.ready-status {
  color: #28a745;
  font-weight: bold;
}

.starting-status {
  color: #007bff;
  font-weight: bold;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
}

.waveform-container {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #dee2e6;
  width: 90svmin;
  overflow: hidden;
  position: relative;
}

.waveform {
  width: 100% !important;
  height: 200px !important;
  min-height: 200px;
  max-height: 200px;
  overflow: hidden;
  position: relative;
}

/* Ensure WaveSurfer canvas doesn't cause scrolling */
.waveform canvas {
  max-width: 100% !important;
  height: auto !important;
  display: block;
}

.region-controls {
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #dee2e6;
}

.control-group {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.region-buttons {
  margin-top: 10px;
  display: flex;
  gap: 10px;
}

.region-info {
  margin-top: 20px;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #dee2e6;
}

.region-info h3 {
  margin: 0 0 15px 0;
  color: #333;
  font-size: 18px;
}

.region-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.region-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: white;
  border-radius: 6px;
  border: 1px solid #dee2e6;
}

.region-item span {
  font-family: monospace;
  color: #333;
}

.region-actions {
  display: flex;
  gap: 5px;
}

.btn-small {
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-small:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-info {
  background-color: #17a2b8;
  color: white;
}

.btn-info:hover:not(:disabled) {
  background-color: #138496;
}

.file-input-label {
  cursor: pointer;
  display: inline-block;
}

.file-input-label:hover {
  background-color: #138496 !important;
}

.playback-controls {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.file-input-label {
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 120px;
  background-color: #17a2b8;
  color: white;
}

.file-input-label:hover:not(:disabled) {
  background-color: #138496;
}

.view {
  width: 97%;
}
</style>
