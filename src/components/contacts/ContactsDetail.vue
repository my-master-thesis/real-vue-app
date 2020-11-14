<template>
  <div class="container-fluid">
    <h1 class="mt-4">O strani</h1>
    <p>Stran prikazuje podrobnosti kontakta skupaj z njegovimi nalogami.</p>
    <h2>Kontakt:</h2>
    <ContactsCard :contact="contact" :full="true"></ContactsCard>
    <br>
    <TasksTable :tasks="tasks" :default-contact="contactId" @newCreated="refreshTasks"></TasksTable>
  </div>

</template>

<script>
import ContactsCard from "./ContactsCard";
import {contactsStore} from "./ContactsStore";
import TasksTable from "../tasks/TasksTable";
import {tasksStore} from "../tasks/TasksStore";
export default {
  name: 'ContactsDetail',
  components: {TasksTable, ContactsCard},
  mounted() {
    this.contactId = Number(this.$route.params.id);
    this.contact = contactsStore.getContactById(this.contactId);
    this.refreshTasks();
  },
  methods: {
    refreshTasks: function () {
      this.tasks = tasksStore.getContactTasks(this.contactId);
    }
  },
  data() {
    return {
      contactId: Number(this.$route.params.id),
      tasks: tasksStore.getContactTasks(this.contactId),
      contact: null
    }
  },
}
</script>

