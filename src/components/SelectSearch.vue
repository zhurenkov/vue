<script lang="ts">
import { CoolSelect } from 'vue-cool-select'

export default {
  components: { CoolSelect },
  data() {
    return {
      // simple example of items
      items: ['Item 1', 'Item 2', 'Item 3'],
      // there will be a selected item
      selected: null,
    }
  },
}
</script>
