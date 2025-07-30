<script setup lang="ts">
//import { ref } from 'vue'
import HeaderPart from './components/HeaderPart.vue'
import ProductPhone from './components/ProductPhone.vue'
//import { useProductStore } from '@/stores/ProductStore'
//import {useProductStore} from '@/data/products.json'
//const productStore = useProductStore()

//import products from '@/data/products.json'
//import { useProductStore } from './stores/ProductStore'
//const productStore = useProductStore()
//const count = ref(0)
/*
interface productStore {
  id: number
  name: string
  vendor: string
  year: number
  diagonal: number
  country: string
  memory: number
  freq: number
  nfc: boolean
  ecim: boolean
  wcharg: boolean
  price: number
}
*/
//export default {
//  components: { HeaderPart, ProductPhone },
/*  data() {
    return {
      name: '',
      vendor: '',
    }
  },*/
//}
</script>

<template>
  <HeaderPart />

  <!--  <ProductPhone v-for="product of productStore.products" :key="product.id" :product="product" />-->
  <ProductPhone />

  <!--
    <div class="products">
    {{ productStore.products }}
  </div>

  <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <products
        v-for="product in productStore.products"
        :image="product.img"
        :key="product.name"
      />
    </ul>
-->

  <!--
  <div id="apps">
    <button @click="count++">
      Счётчик: {{ count }}
    </button>
  </div>
-->
  <footer></footer>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
