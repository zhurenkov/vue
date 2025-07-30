//import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

//import products from '@/data/products.json'

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [
      {
        id: 'iPhone12',
        name: 'Apple iPhone 12',
        vendor: 'Apple',
        year: 2020,
        diagonal: 6.1,
        country: 'Китай',
        memory: 128,
        freq: 60,
        nfc: false,
        esim: true,
        wcharg: true,
        price: 81990,
        iw: 130,
        ih: 240,
      },
      {
        id: 'XiaomiMi11Lite',
        name: 'Xiaomi Mi 11 Lite',
        vendor: 'Xiaomi',
        year: 2021,
        diagonal: 6.55,
        country: 'Китай',
        memory: 128,
        freq: 90,
        nfc: true,
        esim: true,
        wcharg: false,
        price: 27490,
        iw: 168,
        ih: 240,
      },
      {
        id: 'SamsungGalaxyA72',
        name: 'Samsung Galaxy A72',
        vendor: 'Samsung',
        year: 2021,
        diagonal: 6.7,
        country: 'Вьетнам',
        memory: 128,
        freq: 90,
        nfc: true,
        esim: false,
        wcharg: true,
        price: 32890,
        iw: 181,
        ih: 240,
      },
    ],
  }),
})

/*
export const useProductStore = defineStore('product', () => {
  const count = ref(0)
  const name = ref('Apple iPhone 12')
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, name, doubleCount, increment }
})
*/
