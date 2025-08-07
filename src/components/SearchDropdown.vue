<template>
  <div class="search-dropdown">
    <input
      type="text"
      v-model="searchQuery"
      @input="onSearch"
      @keydown.down.prevent="onArrowDown"
      @keydown.up.prevent="onArrowUp"
      @keydown.enter.prevent="selectItem"
      @blur="closeDropdown"
      placeholder="Search..."
    />

    <ul v-if="isOpen && filteredItems.length" class="dropdown-list">
      <li
        v-for="(item, index) in filteredItems"
        :key="index"
        :class="{ highlighted: index === highlightedIndex }"
        @mousedown="selectItem(item)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',

      items: [], // This should contain the list of items to search from

      isOpen: false,

      highlightedIndex: -1,
    }
  },

  computed: {
    filteredItems() {
      if (!this.searchQuery) return []

      return this.items.filter((item) =>
        item.toLowerCase().includes(this.searchQuery.toLowerCase()),
      )
    },
  },

  methods: {
    onSearch() {
      this.isOpen = true

      this.highlightedIndex = -1
    },

    onArrowDown() {
      if (this.highlightedIndex < this.filteredItems.length - 1) {
        this.highlightedIndex++
      }
    },

    onArrowUp() {
      if (this.highlightedIndex > 0) {
        this.highlightedIndex--
      }
    },

    selectItem(item) {
      this.searchQuery = item || this.filteredItems[this.highlightedIndex]

      this.isOpen = false
    },

    closeDropdown() {
      this.isOpen = false
    },
  },

  mounted() {
    // Mock data, you can replace this with your actual data

    this.items = ['Apple', 'Banana', 'Grapes', 'Orange', 'Pineapple', 'Mango', 'Watermelon']
  },
}
</script>

<style scoped>
.search-dropdown {
  position: relative;

  width: 300px;
}

.search-dropdown input {
  width: 100%;

  padding: 10px;

  border: 1px solid #ccc;

  border-radius: 4px;
}

.dropdown-list {
  position: absolute;

  top: 100%;

  left: 0;

  width: 100%;

  border: 1px solid #ccc;

  border-top: none;

  border-radius: 0 0 4px 4px;

  background: #fff;

  max-height: 200px;

  overflow-y: auto;

  z-index: 10;

  list-style: none;

  padding: 0;

  margin: 0;
}

.dropdown-list li {
  padding: 10px;

  cursor: pointer;
}

.dropdown-list li.highlighted {
  background-color: #f1f1f1;
}
</style>
