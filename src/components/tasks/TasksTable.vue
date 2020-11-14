<template>
  <div class="container">
    <div class="row">
      <div class="col-10">
        <h2>Naloge</h2>
      </div>
      <div class="col-2">
        <button v-on:click="addNew()" class="btn btn-success float-right">+</button>
      </div>
    </div>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Opravilo</th>
        <th scope="col">Opis</th>
        <th scope="col">Čas izvajanja</th>
        <th v-if="showContacts" scope="col">Nosilec</th>
      </tr>
      </thead>
      <tbody>
      <tr
              v-for="task in tasks"
              :key="task.id"
              is="TasksTableItem"
              :task="task"
              :showContacts="showContacts"
              :contacts="contacts"
      ></tr>
      </tbody>
    </table>
    <Pagination
            :length="tasks.length"
            :pageSize="pageSize"
            :pageSizeOptions="[10, 25, 50, 100]"
            @page="pageChange($event)"
    ></Pagination>
  </div>


</template>

<script>
import Pagination from "../components/Pagination";
import TasksTableItem from "./TasksTableItem";
import {contactsStore} from "../contacts/ContactsStore";
import {tasksStore} from "./TasksStore";
export default {
  name: 'TasksTable',
  components: {Pagination, TasksTableItem},
  props: ['tasks', 'defaultContact'],
  data() {
    return {
      pageIndex: 0,
      pageSize: 25,
      showContacts: null,
      contacts: [],
    }
  },
  methods: {
    pageChange(pageEvent) {
      this.pageIndex = pageEvent.pageIndex;
      this.pageSize = pageEvent.pageSize;
    },
    addNew() {
      const newId = ++tasksStore.state.lastId;
      tasksStore.state.initialData.unshift({
        id: newId,
        title: '',
        description: '',
        contactId: this.defaultContact,
      })
      this.$emit('newCreated', true)
    }
  },
  watch: {

  },
  mounted() {
    this.showContacts = !this.defaultContact;
    if (this.showContacts) {
      this.contacts = [...contactsStore.state.initialData].sort((a, b) => a.isFavorite === b.isFavorite ? 0 : (a.isFavorite ? -1 : 1));
    }
  }
}
</script>

