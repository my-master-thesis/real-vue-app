<template>
    <div>
        <div class="row mr-md-n3 mr-0">
            <div v-for="contact in $options.filters.filter(contacts, pageIndex, pageSize)" :key="contact.id" class="col-lg-4 col-md-6 mb-3">
                <ContactsCard
                        :contact="contact"
                        @favoriteChange="$emit('favoriteChange', $event)"
                        @delete="$emit('delete', $event)"
                ></ContactsCard>
            </div>
        </div>
        <Pagination
                v-if="search"
                :length="contacts.length"
                :page-size="pageSize"
                :page-size-options="[6, 30, 60, 100]"
                @page="pageChange"
        ></Pagination>
    </div>

</template>

<script>
  import Pagination from "../components/Pagination";
  import ContactsCard from "./ContactsCard";

  export default {
    name: 'ContactsGrid',
    components: {ContactsCard, Pagination},
    props: ['contacts', 'search'],
    data() {
      return {
        pageIndex: 0,
        pageSize: 6,
      }
    },
    methods: {
      pageChange(pageEvent) {
        this.pageIndex = pageEvent.pageIndex;
        this.pageSize = pageEvent.pageSize;
      }
    }
  }
</script>

