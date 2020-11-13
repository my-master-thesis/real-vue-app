<template>
  <div class="card" v-if="contact">
    <div class="card-header">
      <div class="row">
        <div class="col-10 contact-card">
          <StarIcon v-bind:class="{ favorite: contact.isFavorite }" v-on:click.native="toggleFavorite()"></StarIcon>
          <div class="contact-card-title">#{{ contact.id }} {{ contact.firstName }} {{ contact.lastName }}</div>
        </div>
        <div v-if="!full" class="col-2">
          <TrashIcon v-on:click.native="deleteContact()"></TrashIcon>
        </div>
      </div>
    </div>
    <div class="card-body">
      <form class="example-form">
        <Input v-model="contact.firstName" name="ime" placeholder="Janez" label="Ime" />
        <Input v-model="contact.lastName" name="priimek" placeholder="Novak" label="Priimek" />
        <Input v-model="contact.email" name="email" placeholder="info@test.com" label="Email" />
        <Input v-model="contact.phone" name="telefon" placeholder="+386 31 123 456" label="Telefon" />
        <OwnSelect v-model="contact.companyId" :items="companies" bindLabel="companyName" bindValue="id" name="companyId" label="Podjetje"></OwnSelect>
        <p v-if="!full"><router-link :to="{path: 'contacts/' + contact.id}">Več</router-link></p>
      </form>
    </div>
  </div>


</template>

<script>

import Input from "../components/Input";
import StarIcon from "../components/StarIcon";
import TrashIcon from "../components/TrashIcon";
import './ContactsCard.css';
import {companyStore} from "./CompanyStore";
import OwnSelect from "../components/OwnSelect";

export default {
  name: 'ContactsCard',
  components: {OwnSelect, TrashIcon, StarIcon, Input},
  props: ['contact', 'full'],
  data() {
    return {
      companies: companyStore.state.initialData
    }
  },
  methods: {
    toggleFavorite: function () {
      this.contact.isFavorite = !this.contact.isFavorite;
      this.$emit('favoriteChange', this.contact.isFavorite);
    },
    deleteContact: function () {
      this.$emit('delete', this.contact.id);
    }
  }
}
</script>

