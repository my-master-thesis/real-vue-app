<template>
  <div class="container-fluid">
    <h1 class="mt-4">O strani</h1>
    <p>Stran prikazuje podrobnosti kontakta skupaj z njegovimi nalogami.</p>
    <h2>Kontakt:</h2>
    <ContactsCard :contact="contact" :full="true"></ContactsCard>
    <br>
<!--    <app-tasks-table [tasks]="tasks" [defaultContact]="contactId"></app-tasks-table>-->
  </div>


</template>

<script>
import ContactsCard from "./ContactsCard";
import {contactsStore} from "./ContactsStore";
export default {
  name: 'ContactsDetail',
  components: {ContactsCard},
  mounted() {
    this.contactId = Number(this.$route.params.id);
    this.contact = contactsStore.getContactById(this.contactId);
  },
  data() {
    return {
      contactId: null,
      contact: null
    }
  },
}
</script>

