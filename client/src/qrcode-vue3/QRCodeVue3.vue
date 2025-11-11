<script lang="ts">
import { ref} from "vue";
import QRCodeStyling from "./core/QRCodeStyling";

interface Props {
  value: string;
  width: number;
  height: number;
  margin: number;
  imgclass: string;
  myclass: string;
  downloadButton: string;
  ButtonName: string;
  qrOptions: any;
  imageOptions: any;
  dotsOptions: any;
  backgroundOptions: any;
  cornersSquareOptions: any;
  cornersDotOptions: any;
  fileExt: string;
  image: string;
  download: boolean;
  downloadOptions: any;
}


export default {
  name: "QRCodeVue3",
  props:  {
    value: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    margin: {
      type: Number,
      required: true
    },
    imgclass: {
      type: String,
      required: true
    },
    myclass: {
      type: String,
      required: true
    },
    ButtonName: {
      type: String,
      required: true
    },
    qrOptions: {
      type: Object,
      required: true
    },
    imageOptions: {
      type: Object,
      required: true
    },
    dotsOptions: {
      type: Object,
      required: true
    },
    backgroundOptions: {
      type: Object,
      required: true
    },
    cornersSquareOptions: {
      type: Object,
      required: true
    },
    cornersDotOptions: {
      type: Object,
      required: true
    },
    fileExt: {
      type: String,
      required: true
    },
    download: {
      type: Boolean,
      required: true
    },
    downloadOptions: {
      type: Object,
      required: true
    }
  },
  setup(props: Props) {



    const qrCode = new QRCodeStyling({
      data: props.value,
      width: props.width,
      height: props.height,
      margin: props.margin,
      qrOptions: props.qrOptions,
      imageOptions: props.imageOptions,
      dotsOptions: props.dotsOptions,
      backgroundOptions: props.backgroundOptions,
      image: props.image,
      cornersSquareOptions: props.cornersSquareOptions,
      cornersDotOptions: props.cornersDotOptions
    });

    let imageUrl = ref("");
    return {
      imageUrl,
      qrCode
    }
  },
  async beforeCreate() {
    this.imageUrl = await this.qrCode.getImageUrl(this.$props.fileExt);
  },
  methods: {
    onDownloadClick() {
      this.qrCode.download(this.$props.downloadOptions);
    }
  }
}
</script>

<template>
  <div>
    <div v-if="imageUrl" :class="myclass">
      <img :src="imageUrl" :class="imgclass" crossorigin="anonymous" />
    </div>
    <div v-if="imageUrl && download">
      <button @click="onDownloadClick" :class="downloadButton">
        {{ ButtonName }}
      </button>
    </div>
  </div>
</template>
