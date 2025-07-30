import { defineStore } from 'pinia'

export const useDifproductStore = defineStore('difproductStore', {
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
    ],
  }),
})
