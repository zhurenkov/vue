<script setup lang="ts">
import { ref } from 'vue'
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
  id: number
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
}
/*
import { useDifproductStore } from '@/stores/DifproductStore'
const difproductStore = useDifproductStore()
interface difproductStore {
  id: number
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
}
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
const viewfieldset = ref(false)

/* Object
let difproduct = new Object()
difproduct = productStore.products
*/
//import { reactive } from 'vue'
let allproduct = [] //new Array.from({length: numdif})
allproduct = productStore.products
let difproduct = []
//difproduct = allproduct
//difproduct = allproduct.concat(allproduct[1])
//difproduct = allproduct.slice(1)
difproduct = allproduct.slice(0, numdif.value)
console.log(difproduct)
function selectshow() {
  const elem = document.getElementById('selectImg')
  if (elem) {
    elem.style.display = 'none'
  }
  const elem2 = document.getElementById('popgroups0')
  if (elem2) {
    elem2.style.display = 'block'
  }
}
function selecthide() {
  const elem = document.getElementById('selectImg')
  if (elem) {
    elem.style.display = 'none'
  }
  const elem2 = document.getElementById('popgroups1')
  if (elem2) {
    elem2.style.display = 'block'
  }
}
</script>

<template>
  <h1>Смартфоны</h1>
  <p id="colviews">
    Отобразить товары:
    <span
      @click="((numdif = 2), (difproduct = allproduct.slice(0, numdif)))"
      :id="numdif == 2 ? `seldif` : ``"
      >2</span
    >&nbsp;
    <span
      @click="((numdif = 3), (difproduct = allproduct.slice(0, numdif)))"
      :id="numdif == 3 ? `seldif` : ``"
      >3</span
    >&nbsp;
    <span
      @click="((numdif = 4), (difproduct = allproduct.slice(0, numdif)))"
      :id="numdif == 4 ? `seldif` : ``"
      >4</span
    >&nbsp;
    <span
      @click="((numdif = 5), (difproduct = allproduct.slice(0, numdif)))"
      :id="numdif == 5 ? `seldif` : ``"
      >5</span
    >&nbsp;
    <span
      @click="((numdif = 6), (difproduct = allproduct.slice(0, numdif)))"
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
              id="selectImg"
              src="/img/selectProd.svg"
              @click="(selectshow(), (viewfieldset = !viewfieldset))"
              v-show="!viewfieldset"
            />
            <fieldset
              id="selectProd"
              v-show="viewfieldset"
              @click="(selecthide(), (viewfieldset = !viewfieldset))"
            >
              <input className="phone-search" type="text" />
              <select size="3" id="phoneList">
                <option value="iPhone12">Apple iPhone 12</option>
                <option value="iPhoneXr">Apple iPhone Xr</option>
                <option value="XiaomiMi11Lite Гена">Xiaomi Mi 11 Lite</option>
                <option value="Realme8Pro">Realme 8 Pro</option>
                <option value="SamsungGalaxyA72">Samsung Galaxy A72</option>
                <option value="SamsungGalaxyS21">Samsung Galaxy S21</option>
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

#selectProd {
  text-align: right;
  width: 0px;
  height: 0px;
  position: relative;
  z-index: 2;
  left: 200px;
  bottom: 180px;
}
#selectImg {
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
