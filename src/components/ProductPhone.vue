<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useProductStore } from '@/stores/ProductStore'
//import { useProductStore } from '@/data/products.json'
//import SelectSearch from '@/components/SelectSearch.vue'
const productStore = useProductStore()

const props = defineProps({
  product: {
    type: Object,
    required: true,
    default: () => {},
  },
})
console.log(props.product)

interface productStore {
  id: string
  name: string
  vendor: string
  year: number
  diagonal: number
  country: string
  memory: number
  freq: number
  nfc: boolean
  esim: boolean
  wcharg: boolean
  price: number
  iw: number
  ih: number
}
/*
import { useDifproductStore } from '@/stores/DifproductStore'
const difproductStore = useDifproductStore()
console.log(difproductStore)
//useDifproductStore = productStore
*/

/*
var field = $('#phoneList').find('option');

//
$('#searchInput').bind('keyup', function() {
    var q = new RegExp($(this).val(), 'ig');

    for (var i = 0, l = field.length; i < l; i += 1) {
        var option = $(field[i]),
            parent = option.parent();

        if ($(field[i]).text().match(q)) {
            if (parent.is('span')) {
                option.show();
                parent.replaceWith(option);
            }
        } else {
            if (option.is('option') && (!parent.is('span'))) {
                option.wrap('<span>').hide();
            }
        }
    }
});
*/
const productSet = new Set()
//const productSet = new Set(productStore.products)
//productSet.add(productStore.products)
//console.log(productSet)

function productSetUniq(item: string) {
  //  productSet.clear()
  productSet.add(item)
  productSet.add('item')
  console.log(productSet)
  return 0
  //productSet.size
}

const difnot = ref(true)
console.log(difnot.value)
const numdif = ref(3)
console.log(numdif.value)
//type viewer = [id: string, isVisible: boolean]
/*
interface viewer {
  [key: string]: boolean
}
const viewfieldset: viewer[] //ref(false)
*/
const viewfieldset: { [id: string]: boolean } = reactive({})
//viewfieldset["iP"]=true
//const shown = ref()
function logger(arg: string) {
  console.log(arg)
}
/* Object
let difproduct = new Object()
difproduct = productStore.products
*/
//import { reactive } from 'vue'

let allproduct: productStore[] = [] //new Array.from({length: numdif})
allproduct = productStore.products
let difproduct: productStore[] = []
//let otherproduct: productStore[] = []
let otherproduct: productStore[] = []
difproduct = allproduct.slice(0, numdif.value)
console.log(difproduct)
//let id=ref()
//let productid: { id: string} = {difproduct.id};
//productid[id]=difproduct.id
otherproduct = allproduct
function otherproductlist() {
  otherproduct = allproduct
  for (const prod of difproduct) {
    const productin = otherproduct.findIndex((productin) => productin.id === prod.id)
    console.log(productin)
    otherproduct = otherproduct.slice(productin + 1)
    //  alert(`Исключаем: ${prod.id} ${productin} ${otherproduct.length}`)
    console.log(otherproduct)
  }
}
otherproductlist()
//otherproductlist(allproduct, difproduct, otherproduct)
/*
function otherproductlist(all: productStore[], dif: productStore[], other: productStore[]) {
  other = all
  for (const prod of dif) {
    const productin = other.findIndex((productin) => productin.id === prod.id)
    console.log(productin)
    other = other.slice(productin + 1)
    //  alert(`Исключаем: ${prod.id} ${productin} ${otherproduct.length}`)
    console.log(other)
  }
}

otherproduct = allproduct
for (const prod of difproduct) {
  // otherproduct.id.indexOf(prod.id)
  const productin = otherproduct.findIndex((productin) => productin.id === prod.id)
  console.log(productin)
  otherproduct = otherproduct.slice(productin + 1)
//  alert(`Исключаем: ${prod.id} ${productin} ${otherproduct.length}`)
  console.log(otherproduct)
}
//otherproduct = otherproduct.slice(0, numdif.value)

function selectshow() {
  const elem = document.getElementById('`${product.id}Img`')
  if (elem) {
    elem.style.display = 'none'
  }
  const elem2 = document.getElementById('`${product.id}Sel`')
  if (elem2) {
    elem2.style.display = 'block'
  }
}
function selecthide() {
  const elem = document.getElementById('`${product.id}Sel`')
  if (elem) {
    elem.style.display = 'none'
  }
  const elem2 = document.getElementById('`${product.id}Img`')
  if (elem2) {
    elem2.style.display = 'block'
  }
}
*/
</script>

<template>
  <h1>Смартфоны</h1>
  <p id="colviews">
    Отобразить товары:
    <span
      @click="((numdif = 2), (difproduct = allproduct.slice(0, numdif)), otherproductlist())"
      :id="numdif == 2 ? `seldif` : ``"
      >2</span
    >&nbsp;
    <span
      v-show="allproduct.length >= 3"
      @click="((numdif = 3), (difproduct = allproduct.slice(0, numdif)), otherproductlist())"
      :id="numdif == 3 ? `seldif` : ``"
      >3</span
    >&nbsp;
    <span
      v-show="allproduct.length >= 4"
      @click="((numdif = 4), (difproduct = allproduct.slice(0, numdif)), otherproductlist())"
      :id="numdif == 4 ? `seldif` : ``"
      >4</span
    >&nbsp;
    <span
      v-show="allproduct.length >= 5"
      @click="((numdif = 5), (difproduct = allproduct.slice(0, numdif)), otherproductlist())"
      :id="numdif == 5 ? `seldif` : ``"
      >5</span
    >&nbsp;
    <span
      v-show="allproduct.length >= 6"
      @click="((numdif = 6), (difproduct = allproduct.slice(0, numdif)), otherproductlist())"
      :id="numdif == 6 ? `seldif` : ``"
      >6</span
    >
  </p>
  <!--<div>
    {{ difproduct }}
    {{ productStore.products[0] }}
    {{ Number(numdif) }}
  </div>
  <div>
    <v-select no-drop taggable multiple :select-on-key-codes="[188, 13]" />
  </div>-->
  <main id="app">
    <table>
      <thead>
        <tr id="firstrow">
          <td>
            <fieldset id="viewDiffers">
              <!--<input type="checkbox" onclick="viewDiffers();" /> Показать различия
                           v-for="n in numdif"
-->
              <input type="checkbox" @change="difnot = !difnot" />
              Показать различия
            </fieldset>
          </td>
          <td class="selected" v-for="product of difproduct" :key="product.id" :product="product">
            <figure>
              <img
                :src="`/img/${product.id}.jpeg`"
                :alt="product.id"
                :width="product.iw"
                :height="product.ih"
              />
              <figcaption>{{ product.name }}</figcaption>
            </figure>
            <!--<SelectSearch> <cool-select v-model="selected" :items="items" /></SelectSearch>-->
            <img
              class="selectImg"
              :id="`${product.id}Img`"
              src="/img/selectProd.svg"
              @click="
                ((viewfieldset[product.id] = !viewfieldset[product.id]),
                logger(product.id + viewfieldset[product.id].toString()),
                console.log(viewfieldset))
              "
              v-show="!viewfieldset[product.id]"
            /><!--{{ viewfieldset[product.id] }}-->
            <fieldset
              class="selectProd"
              :id="`${product.id}Sel`"
              v-show="viewfieldset[product.id]"
              @click="
                ((viewfieldset[product.id] = !viewfieldset[product.id]),
                logger(viewfieldset[product.id].toString()))
                //                ,otherproductlist(allproduct, otherproduct)
              "
            >
              <input className="phone-search" type="text" />
              <select size="3" :id="`${product.id}List`">
                <option
                  v-for="otherproduct of otherproduct"
                  :key="otherproduct.id"
                  :product="otherproduct"
                  value="otherproduct.id"
                >
                  {{ otherproduct.name }}
                </option>
              </select>
            </fieldset>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-if="difnot">
          <th>Производитель</th>
          <td v-for="product of difproduct" :key="product.id" :product="product">
            {{ product.vendor }}
            <!--{{ difnot }} {{ productSet.size }}-->
          </td>
        </tr>
        <!---->
        <tr v-else-if="productSetUniq(product.vendor) > 1">
          <th>Производитель</th>
          <td v-for="product of difproduct" :key="product.id" :product="product">
            {{ product.vendor }} {{ difnot }}
          </td>
        </tr>
        <tr v-if="difnot">
          <th>Год релиза</th>
          <td v-for="product of difproduct" :key="product.id" :product="product">
            {{ product.year }}
            <!--{{ difnot }} {{ productSet.size }}-->
          </td>
        </tr>
        <!--<tr v-else-if="productSetUniq(`${product.year}`) > 1">
          <th>Год релиза</th>
          <td v-for="product of difproduct" :key="product.id" :product="product">
            {{ product.year }} {{ difnot }}
          </td>
        </tr>-->
        <tr>
          <th>Диагональ экрана (дюйм)</th>
          <td v-for="product of difproduct" :key="product.id" :product="product">
            {{ product.diagonal }}
          </td>
        </tr>
        <tr>
          <th>Страна-производитель</th>
          <td v-for="product of difproduct" :key="product.id" :product="product">
            {{ product.country }}
          </td>
        </tr>
        <tr>
          <th>Объём памяти</th>
          <td v-for="product of difproduct" :key="product.id" :product="product">
            {{ product.memory }}
          </td>
        </tr>
        <tr>
          <th>Частота обновления экрана</th>
          <td v-for="product of difproduct" :key="product.id" :product="product">
            {{ product.freq }}
          </td>
        </tr>
        <tr>
          <th>NFC</th>
          <td v-for="product of difproduct" :key="product.id" :product="product">
            {{ product.nfc }}
          </td>
        </tr>
        <tr>
          <th>Поддержка ESIM</th>
          <td v-for="product of difproduct" :key="product.id" :product="product">
            {{ product.esim }}
          </td>
        </tr>
        <tr>
          <th>Поддержка беспроводной зарядки</th>
          <td v-for="product of difproduct" :key="product.id" :product="product">
            {{ product.wcharg }}
          </td>
        </tr>
        <tr>
          <th>Стоимость</th>
          <td v-for="product of difproduct" :key="product.id" :product="product">
            {{ product.price }}
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<style>
table {
  width: 100%;
}

tr {
  height: 60px;
  background-color: var(--color-background-mute);
  border-top: 2px solid var(--color-heading);
}

th {
  text-transform: uppercase;
  text-align: left;
  color: var(--color-heading);
  width: 20%;
  min-width: 10em;
  padding-right: 5px;
}

td {
  color: var(--color-text);
  padding-right: 5px;
}

#firstrow {
  background-color: var(--color-background);
}

#firstrow > td {
  vertical-align: bottom;
}

td.selected {
  text-align: center;
}

#colviews {
  color: #0d5adc;
  display: inline-block;
  font-size: large;
}

fieldset {
  border: none;
  color: #0d5adc;
}

figure {
  margin: 0;
  padding: 5px;
  text-align: center;
  min-width: 160px;
}

figcaption {
  text-align: center;
}

figure > img {
  text-align: center;
}

select {
  width: 150px;
  margin: 10px auto;
  display: block;
}

#seldif {
  text-decoration: underline;
}

.selectProd {
  text-align: right;
  width: 0px;
  height: 0px;
  position: relative;
  z-index: 2;
  left: 200px;
  bottom: 180px;
}
.selectImg {
  position: relative;
  left: 100px;
  bottom: 130px;
}
.hidden {
  visibility: hidden;
  /*
  display: none;
  */
}
.unhidden {
  visibility: visible;
}
</style>
