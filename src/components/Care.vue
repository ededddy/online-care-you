<script lang="ts">
import { defineComponent } from "vue";
import domtoimage from "dom-to-image-more";
import { saveAs } from "file-saver";
export default defineComponent({
  props: { name: String, target: String},
  methods : {
    onCapture (evt) {
      evt.preventDefault();
      const capture = this.$refs.capture;
      domtoimage.toBlob(capture)
        .then(function(blob) {
          saveAs(blob, `online-care.png`)
        });
    },
  }
});
</script>

<template>
  <div id="care">
    <h1 class="n-h" id="care-text"  ref="capture">
      <span>
        <n-text type="success">{{ name }}</n-text>
        <n-text> 關心了 </n-text>
        <n-text type="warning">{{target}}</n-text>
      </span>
    </h1>
  </div>
  <n-button type="primary" size="large" @click="onCapture" :disabled="!this.$isMobile()">
      立即截圖分享!
  </n-button>
</template>

<style scoped>
#care {
  padding: 2em 0;
}
#care-text{
  --bezier: cubic-bezier(.4, 0, .2, 1);
  --font-size: 32px;
  --margin: 0;
  --bar-color: #63e2b7;
  --bar-width: 4px;
  --font-weight: 500;
  --text-color: rgba(255, 255, 255, 0.9);
  --prefix-width: 16px;
  padding:1em;
}
</style>
