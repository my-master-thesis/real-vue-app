<template>
    <div class="container-fluid">
        <h1 class="mt-4">O strani</h1>
        <p>Ta stran vsebuje seznam kontaktov, od koder je s klikom na povezavo Več moč priti na podrobnosti oseb. Osebe
            je prav tako mogoče v živo posodabljati.</p>
        <p>Stran prikazuje primer resne strani, kjer se prikazujejo kontakti, te pa lahko dodajamo, urejamo, brišemo ter
            dodajamo med priljubljene. Na dnu je tudi paginacija, ki služi nadzoru nad tem koliko podatkov želimo
            prikazovati na enkrat.</p>
        <transition name="fade">
            <div v-if="this.favorites.length" id="favorite-contacts" class="container">
                <h2>Priljubljeni kontakti</h2>
                <ContactsGrid
                        :contacts="favorites"
                        :search="false"
                        @favoriteChange="getFavorites()"
                        @delete="remove($event)"
                ></ContactsGrid>
            </div>
        </transition>
        <div class="container" id="all-contacts">
            <div class="row">
                <div class="col-10">
                    <h2>Vsi kontakti</h2>
                </div>
                <div class="col-2">
                    <button v-on:click="addNew()" class="btn btn-success float-right">+</button>
                </div>
            </div>
            <ContactsGrid
                    :contacts="contacts"
                    :search="true"
                    @favoriteChange="getFavorites()"
                    @delete="remove($event)"
            ></ContactsGrid>
        </div>
    </div>


</template>

<script>
  import ContactsGrid from "./ContactsGrid";
  import {contactsStore} from "./ContactsStore"

  export default {
    name: 'Contacts',
    components: {ContactsGrid},
    data() {
      return {
        contacts: contactsStore.state.initialData,
        favorites: []
      }
    },
    watch: {
      contacts: function () {
        this.getFavorites();
      },
    },
    mounted() {
      this.getFavorites();
    },
    methods: {
      addNew: function () {
        const maxId = this.contacts.reduce(
          (max, contact) => (contact.id > max ? contact.id : max),
          0
        );
        this.contacts.unshift({
          id: maxId + 1,
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
        });
      },
      getFavorites: function () {
        this.favorites = this.contacts.filter(contact => contact.isFavorite);
      },
      remove: function (id) {
        contactsStore.state.initialData = contactsStore.state.initialData.filter(contact => contact.id !== id);
        this.contacts = contactsStore.state.initialData;
      }
    }
  }
</script>

