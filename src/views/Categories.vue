<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>

      <Loader v-if="loading" />

      <div v-else class="row">

        <CategoryCreate @created="addNewCategory" />

        <CategoryEdit 
        v-if="categories.length"
        :categories="categories"
        @updated="updateCategories"
        :key="categories.length + updateCount"
        />
        
         <h4 v-else class="center"><p> Категорий пока нет</p></h4>

      </div>
    </section>
  </div>
</template>

<script>
import CategoryCreate from '../components/CategoryCreate'
import CategoryEdit from '../components/CategoryEdit'

export default {
  metaInfo() {
    return {
      title: this.$title('Menu_Categories')
    }
  }, 
  name: 'categories',
  data: () => ({
    categories: [],
    loading: true,
    updateCount: 0, 
  }),
    async mounted() {
      this.categories = await this.$store.dispatch('fetchCategories')
      this.loading = false
    },
  components: {
    CategoryCreate, CategoryEdit
  },
  methods: {
    addNewCategory(category) {
      this.categories.push(category)
    },
    updateCategories({id,title,limit}) {
      const index = this.categories.findIndex(c => c.id === id)
      this.categories[index].title = title
      this.categories[index].limit = limit
      this.updateCount++
    }
  }
}
</script>
