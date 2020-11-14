<template>
    <div class="row">
        <div class="col-9 col-sm-10">
            <nav>
                <ul class="pagination">
                    <li v-if="selectedPage > 0" class="page-item">
                        <button v-on:click="changePage(-1)" class="page-link">Nazaj</button>
                    </li>
                    <li v-if="selectedPage > 0" class="page-item">
                        <button v-on:click="setPage(0)" class="page-link">1</button>
                    </li>
                    <li v-if="selectedPage > 1" class="page-item">
                        <button class="page-link">...</button>
                    </li>
                    <li class="page-item active">
                        <button class="page-link">{{ selectedPage + 1 }}</button>
                    </li>
                    <li v-if="selectedPage < maxPages - 1" class="page-item">
                        <button class="page-link">...</button>
                    </li>
                    <li v-if="selectedPage !== maxPages" class="page-item">
                        <button v-on:click="setPage(maxPages)" class="page-link active">{{ maxPages + 1 }}</button>
                    </li>
                    <li v-if="selectedPage < maxPages" class="page-item">
                        <button v-on:click="changePage(1)" class="page-link">Naprej</button>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="col-3 col-sm-2">
            <select class="form-control" v-model="pageSizeValue" @change="calculateMaxPages(true)">
                <option v-for="option in pageSizeOptions" :key="option" :value="option">{{ option }}</option>
            </select>
        </div>
    </div>

</template>

<script>
  export default {
    name: 'Pagination',
    props: ['length', 'pageSize', 'pageSizeOptions'],
    watch: {
      length: function () {
        this.allRecords = this.length;
        this.calculateMaxPages();
      },
      pageSize: function () {
        this.pageSizeValue = this.pageSize;
        this.calculateMaxPages();
      }
    },
    mounted() {
      this.allRecords = this.length;
      this.pageSizeValue = this.pageSize;
      this.calculateMaxPages();
    },
    data() {
      return {
        allRecords: null,
        pageSizeValue: 6,
        selectedPage: 0,
        maxPages: 0,
      }
    },
    methods: {
      changePage(nr) {
        this.selectedPage += nr;
        this.emitChange();
      },
      calculateMaxPages(forceChange = false) {
        const max = this.allRecords / this.pageSizeValue;
        this.maxPages = Math.floor(max);
        if (max === this.maxPages) {
          this.maxPages--;
        }
        if (typeof this.selectedPage !== 'number' || this.selectedPage > this.maxPages) {
          this.selectedPage = this.maxPages;
          this.emitChange();
        } else if (this.selectedPage < 0 && this.allRecords > 0) {
          this.setPage(0);
        } else if (forceChange) {
          this.emitChange();
        }
      },
      emitChange() {
        this.$emit('page', {
          pageIndex: this.selectedPage,
          pageSize: Number(this.pageSizeValue),
        })
      },

      setPage(page) {
        this.selectedPage = page;
        this.emitChange();
      }
    }
  }
</script>

