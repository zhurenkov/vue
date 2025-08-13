<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useProductStore } from '@/stores/ProductStore'
//import { useProductStore } from '@/data/products.json'
//import SelectSearch from '@/components/SelectSearch.vue'
const productStore = useProductStore()
//import Popover from 'primevue/popover';

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
  itw: number
  ith: number
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
const difnot = ref(true)
//console.log(difnot.value)
const numdif = ref(3)
const searchproduct = ref('')
//console.log(numdif.value)
//type viewer = [id: string, isVisible: boolean]
/*
interface viewer {
  [key: string]: boolean
}
const viewfieldset: viewer[] //ref(false)
*/
const viewfieldset: { [id: string]: boolean } = reactive({})
function viewFieldReset() {
  //  document.getElementById('`${product.id}Sel`').showModal()
  for (const id in viewfieldset) {
    if (viewfieldset[id] == true) viewfieldset[id] = false
  }
  //  console.log(viewfieldset)
}
//viewfieldset["iP"]=true
//const shown = ref()
/*
function logger(arg: string) {
  console.log(arg)
}
*/
/* Object
let difproduct = new Object()
difproduct = productStore.products
*/
//import { reactive } from 'vue'

//let allproduct: productStore[] = [] //new Array.from({length: numdif})
const allproduct = productStore.products
console.log(allproduct)
let difproduct: productStore[] = []
//let otherproduct: productStore[] = []
let otherproduct: productStore[] = []
difproduct = allproduct.slice(0, numdif.value)
//console.log(difproduct)
function otherproductlist() {
  //otherproduct = allproduct
  otherproduct = allproduct.slice(0)
  //  console.log(otherproduct)
  //  console.log(difproduct)
  for (const prod of difproduct) {
    const productin = otherproduct.findIndex((productin) => productin.id === prod.id)
    //  console.log(productin)
    otherproduct.splice(productin, 1)
    //    alert(`Исключаем: ${prod.id} ${productin} ${otherproduct.length}`)
    //  console.log(otherproduct)
  }
}
otherproductlist()

function changeproductlist(productold: string, productnew: string) {
  //  let newprod: productStore | undefined
  //for (const prod of difproduct) {
  const productin = difproduct.findIndex((productin) => productin.id === productold)
  console.log(productin)
  //ind.value = productin
  //count++
  //  alert(`№: ${count}`)
  //}
  //for (const prod of otherproduct) {
  const newprod = otherproduct.find((newprod) => newprod.id === productnew)
  //}
  if (typeof newprod !== 'undefined') difproduct.splice(productin, 1, newprod)
  //  alert(`Заменяем: ${productold} на ${productin} позиции на ${productnew}`)
  //  alert(`Заменяем: ${newprod}`)
  console.log(newprod)
  //  }
  //}
  otherproduct = allproduct
  console.log(otherproduct)
  console.log(difproduct)
  otherproductlist()
  console.log(otherproduct)
}
/*
const productSet = new Set()
//const productSet = new Set(productStore.products)
//productSet.add(productStore.products)
//console.log(productSet)
: string
  : number
  : number
  : string
  : number
  : number
  : boolean
  : boolean
  : boolean
  */
const vendorUniq = ref(true)
const yearUniq = ref(true)
const diagonalUniq = ref(true)
const countryUniq = ref(true)
const memoryUniq = ref(true)
const freqUniq = ref(true)
const nfcUniq = ref(true)
const esimUniq = ref(true)
const wchargUniq = ref(true)
const priceUniq = ref(true)
function productSetUniq() {
  const vendorSet = new Set()
  vendorSet.clear()
  const yearSet = new Set()
  yearSet.clear()
  const diagonalSet = new Set()
  diagonalSet.clear()
  const countrySet = new Set()
  countrySet.clear()
  const memorySet = new Set()
  memorySet.clear()
  const freqSet = new Set()
  freqSet.clear()
  const nfcSet = new Set()
  nfcSet.clear()
  const esimSet = new Set()
  esimSet.clear()
  const wchargSet = new Set()
  wchargSet.clear()
  const priceSet = new Set()
  priceSet.clear()
  for (const prod of difproduct) {
    vendorSet.add(prod.vendor)
    yearSet.add(prod.year)
    diagonalSet.add(prod.diagonal)
    countrySet.add(prod.country)
    memorySet.add(prod.memory)
    freqSet.add(prod.freq)
    nfcSet.add(prod.nfc)
    esimSet.add(prod.esim)
    wchargSet.add(prod.wcharg)
    priceSet.add(prod.price)
  }
  vendorUniq.value = vendorSet.size == 1 ? false : true
  yearUniq.value = yearSet.size == 1 ? false : true
  diagonalUniq.value = diagonalSet.size == 1 ? false : true
  countryUniq.value = countrySet.size == 1 ? false : true
  memoryUniq.value = memorySet.size == 1 ? false : true
  freqUniq.value = freqSet.size == 1 ? false : true
  nfcUniq.value = nfcSet.size == 1 ? false : true
  esimUniq.value = esimSet.size == 1 ? false : true
  wchargUniq.value = wchargSet.size == 1 ? false : true
  priceUniq.value = priceSet.size == 1 ? false : true
  //console.log(memorySet)
  //console.log(memoryUniq)
  return 0 //memorySet.size
}
productSetUniq()

/*
function inList(element: string, str: string) {
  const start = 0
  while (start <= element.length) {
    if (element.includes(str)) {
      return true
    }
  }
  return false
}

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
  <h1 @click="viewFieldReset()">Смартфоны</h1>
  <p id="colviews" @click="viewFieldReset()">
    Отобразить товары:
    <span
      @click="
        ((numdif = 2),
        (difproduct = allproduct.slice(0, numdif)),
        otherproductlist(),
        productSetUniq())
      "
      :id="numdif == 2 ? `seldif` : ``"
      >2</span
    >&nbsp;
    <span
      v-show="allproduct.length >= 3"
      @click="
        ((numdif = 3),
        (difproduct = allproduct.slice(0, numdif)),
        otherproductlist(),
        productSetUniq())
      "
      :id="numdif == 3 ? `seldif` : ``"
      >3</span
    >&nbsp;
    <span
      v-show="allproduct.length >= 4"
      @click="
        ((numdif = 4),
        (difproduct = allproduct.slice(0, numdif)),
        otherproductlist(),
        productSetUniq())
      "
      :id="numdif == 4 ? `seldif` : ``"
      >4</span
    >&nbsp;
    <span
      v-show="allproduct.length >= 5"
      @click="
        ((numdif = 5),
        (difproduct = allproduct.slice(0, numdif)),
        otherproductlist(),
        productSetUniq())
      "
      :id="numdif == 5 ? `seldif` : ``"
      >5</span
    >&nbsp;
    <span
      v-show="allproduct.length >= 6"
      @click="
        ((numdif = 6),
        (difproduct = allproduct.slice(0, numdif)),
        otherproductlist(),
        productSetUniq())
      "
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
  <main @click="viewFieldReset()">
    <table>
      <thead>
        <tr id="firstrow">
          <td>
            <fieldset id="viewDiffers">
              <input type="checkbox" @change="difnot = !difnot" />
              Показать различия
            </fieldset>
          </td>
          <td class="selected" v-for="product of difproduct" :key="product.id" :product="product">
            <!-- @click.self="console.log(viewfieldset[product.id])"-->
            <figure>
              <img
                :src="`/img/${product.id}.jpg`"
                :alt="product.id"
                :width="product.iw"
                :height="product.ih"
              />
              <figcaption>{{ product.name }}</figcaption>
            </figure>
            <!--<SelectSearch> <cool-select v-model="selected" :items="items" /></SelectSearch>-->
            <img
              @click.stop
              class="selectImg"
              :id="`${product.id}Img`"
              src="/img/selectProd.svg"
              @click="
                (viewFieldReset(),
                (viewfieldset[product.id] = !viewfieldset[product.id]),
                //                logger(product.id + viewfieldset[product.id].toString()),
                otherproductlist())
                //  console.log(viewfieldset),
                //              console.log(otherproduct)
              "
              v-show="!viewfieldset[product.id] && otherproduct.length > 0"
            /><!--{{ viewfieldset[product.id] }}-->
            <div
              class="selectProd"
              :id="`${product.id}Sel`"
              v-show="viewfieldset[product.id]"
              @mouseenter="searchproduct = ''"
              @clickaway="viewfieldset[product.id] = !viewfieldset[product.id]"
            >
              <!--
              v-click-outside="viewFieldReset()"
            @mouseleave="viewfieldset[product.id] = !viewfieldset[product.id]"
            -->
              <div class="selectFrame">
                <input
                  className="phone-search"
                  type="search"
                  tabindex="1"
                  placeholder="Поиск"
                  v-model="searchproduct"
                  @focus="searchproduct = ''"
                  @click.stop
                />
                <!--
                  @input="console.log(searchproduct)"
                  <div class="options">-->
                <p
                  v-show="otherproduct.name.toLowerCase().includes(searchproduct.toLowerCase())"
                  v-for="otherproduct of otherproduct"
                  :key="otherproduct.id"
                  :product="otherproduct"
                  value="otherproduct.id"
                  @click="viewfieldset[product.id] = !viewfieldset[product.id]"
                >
                  <img
                    class="selector"
                    src="/img/select.svg"
                    @click="(changeproductlist(product.id, otherproduct.id), productSetUniq())"
                  />
                  <img
                    :src="`/img/th/${otherproduct.id}.png`"
                    :alt="otherproduct.id"
                    :width="otherproduct.itw"
                    :height="otherproduct.ith"
                  />
                  {{ otherproduct.name }}
                </p>
                <!--</div>-->
              </div>
            </div>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-if="difnot || vendorUniq">
          <th>Производитель</th>
          <td v-for="product of difproduct" :key="product.id" :product="product">
            {{ product.vendor }}
            <!--{{ difnot }} {{ productSet.size }}-->
          </td>
        </tr>
        <!--
        <tr v-else-if="productSetUniq(product.vendor) > 1">
          <th>Производитель</th>
          <td v-for="product of difproduct" :key="product.id" :product="product">
            {{ product.vendor }} {{ difnot }}
          </td>
        </tr>-->
        <tr v-if="difnot || yearUniq">
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
        <tr v-if="difnot || diagonalUniq">
          <th>Диагональ экрана (дюйм)</th>
          <td v-for="product of difproduct" :key="product.id" :product="product">
            {{ product.diagonal }}
          </td>
        </tr>
        <tr v-if="difnot || countryUniq">
          <th>Страна-производитель</th>
          <td v-for="product of difproduct" :key="product.id" :product="product">
            {{ product.country }}
          </td>
        </tr>
        <tr v-if="difnot || memoryUniq">
          <th>Объём памяти</th>
          <td v-for="product of difproduct" :key="product.id" :product="product">
            {{ product.memory }}
          </td>
        </tr>
        <tr v-if="difnot || freqUniq">
          <th>Частота обновления экрана</th>
          <td v-for="product of difproduct" :key="product.id" :product="product">
            {{ product.freq }}
          </td>
        </tr>
        <tr v-if="difnot || nfcUniq">
          <th>NFC</th>
          <td v-for="product of difproduct" :key="product.id" :product="product">
            <img v-show="product.nfc" class="selector" src="/img/yes.svg" />
            <img v-show="!product.nfc" class="selector" src="/img/no.svg" />
          </td>
        </tr>
        <tr v-if="difnot || esimUniq">
          <th>Поддержка ESIM</th>
          <td v-for="product of difproduct" :key="product.id" :product="product">
            <img v-show="product.esim" class="selector" src="/img/yes.svg" />
            <img v-show="!product.esim" class="selector" src="/img/no.svg" />
          </td>
        </tr>
        <tr v-if="difnot || wchargUniq">
          <th>Поддержка беспроводной зарядки</th>
          <td v-for="product of difproduct" :key="product.id" :product="product">
            <img v-show="product.wcharg" class="selector" src="/img/yes.svg" />
            <img v-show="!product.wcharg" class="selector" src="/img/no.svg" />
          </td>
        </tr>
        <tr v-if="difnot || priceUniq">
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
  /*
  position: absolute;
  left: 165px;
  top: 260px;
  background-color: var(--color-background-mute);
  */
  width: calc-size(100%-75px);
  padding: 0px 0px 60px 90px;
  margin-top: 15rem;
  margin-left: 165px;
  border-collapse: collapse;
  position: relative;
  z-index: 1;
}

tbody {
  width: 100%;
  padding: 0px 0px 60px 90px;
  margin-top: 15rem;
  background-color: var(--color-background-mute);
}

tr {
  height: 60px;
  background-color: var(--color-background-mute);
  border-top: 1px solid var(--color-heading);
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
  border-top: none;
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
  /* Отобразить товары: 2 3 4 5 6
    width: 263px;
  height: 43px;
 */
  position: absolute;
  left: 73%;
  top: 160px;

  font-weight: 400;
  font-size: 18px;
  line-height: 60px;
  /* or 333% */
  letter-spacing: 0.02em;
}
#colviews span {
  cursor: pointer;
}

fieldset {
  border: none;
  color: #0d5adc;
}

#viewDiffers {
  padding-bottom: 40px;
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
  width: 30px;
  height: 34px;
  position: relative;
  z-index: 2;
  left: 0px;
  bottom: 90px;
}

.selectFrame {
  width: 421px;
  height: 336px;
  box-sizing: border-box;
  border: 1px solid var(--color-background-soft);
  border-radius: 4px;
  color: var(--color-text);
  background-color: var(--color-background);
  box-shadow: 0px 16px 32px var(--shadow-border);
  /* #596382 | #a69c7d */
  text-align: left;
  display: inline-block;
  max-height: 336px;
  overflow-y: auto;
  overflow-x: hidden;
  font-size: 18px;
  line-height: 40px;
  /* or 222% */
  font-feature-settings:
    'pnum' on,
    'lnum' on;

  vertical-align: middle;
}

.selectImg {
  position: relative;
  left: 60px;
  bottom: 80px;
}
input.phone-search {
  width: 364px;
  height: 47px;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: var(--color-grey);
  background-color: var(--color-background);
  margin: 30px 50px 10px 20px;
  border: 1px solid var(--color-grey);
  border-radius: 4px;
  /*
  transform: matrix(-1, 0, 0, 1, 0, 0);
  */
}
/*
.options {
  display: inline-block;
  max-height: 20ex;
  overflow-y: auto;
  overflow-x: hidden;
  text-align: left;
  color: var(--color-text);
  background-color: var(--color-background);
  width: 220px;
}
  */
.selectFrame p img {
  display: inline-block;
  vertical-align: middle;
  margin: 15px 20px 15px 0px;
}
.selector {
  cursor: pointer;
  padding: 15px 0px 15px 20px;
}
.options p {
  text-indent: 0;
  margin-top: 2px;
}
</style>
