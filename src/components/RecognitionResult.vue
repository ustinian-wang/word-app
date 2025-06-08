<template>
  <div class="card" v-if="imageUrl && products && products.length">
    <ImageTagOverlay :image-url="imageUrl" :products="products" />
  </div>
</template>

<script>
import ImageTagOverlay from './ImageTagOverlay.vue';
export default {
  name: 'RecognitionResult',
  props: {
    imageUrl: String,
    products: Array
  },
  components: { ImageTagOverlay }
};
</script>
