<template>
  <div class="d-flex" id="wrapper" v-bind:class="{ toggled: !showToolbar }">

    <!-- Sidebar -->
    <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading" title="Magistrski demonstartiven primer">MDP</div>
      <div class="list-group list-group-flush">
        <router-link
                v-for="item in sideMenuItems" :key="item.link"
                class="list-group-item list-group-item-action"
                :to="{path: item.link}"
                >{{ item.text }}</router-link>
      </div>
    </div>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">

      <nav class="navbar navbar-light bg-light border-bottom">
        <button class="navbar-toggler" v-on:click="toggleMenu"><span class="navbar-toggler-icon"></span></button>
      </nav>

      <div class="container-fluid">
        <router-view></router-view>
      </div>
    </div>
    <!-- /#page-content-wrapper -->

  </div>
  <!-- /#wrapper -->
</template>

<script>

import VueRouter from 'vue-router'
import './App.css'
import Home from "./components/Home";
import Content from "./components/content/Content";
import Dynamic from "./components/dynamic/Dynamic";
import BoundaryCases from "./components/boundary-cases/BoundaryCases";
import Contacts from "./components/contacts/Contacts";
import ContactsDetail from "./components/contacts/ContactsDetail";
import Tasks from "./components/tasks/Tasks";
import {contactsStore} from "./components/contacts/ContactsStore";
import {tasksStore} from "./components/tasks/TasksStore";

const routes = [
  { path: '/home', component: Home, name: 'home' },
  { path: '/contacts', component: Contacts },
  { path: '/contacts/:id', component: ContactsDetail },
  { path: '/tasks', component: Tasks },
  { path: '/boundary', component: BoundaryCases },
  { path: '/content', component: Content },
  { path: '/dynamic', component: Dynamic },
  { path: '*', redirect: { name: 'home' }},
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

export default {
  name: 'app',
  components: {
  },
  created() {
    window.addEventListener('beforeunload', this.saveData)
  },
  methods: {
    toggleMenu: function () {
      this.showToolbar = !this.showToolbar;
    },
    saveData: function () {
      contactsStore.saveToStorage();
      tasksStore.saveToStorage();
    }
  },
  data() {
    return {
      currentRoute: window.location.pathname,
      showToolbar: true,
      sideMenuItems: [
        { link: '/home', text: 'Naslovnica' },
        { link: '/contacts', text: 'Kontakti' },
        { link: '/tasks', text: 'Naloge' },
        { link: '/boundary', text: 'Test nastavljanja vrednosti' },
        { link: '/content', text: 'Statična vsebina' },
        { link: '/dynamic', text: 'Dinamična vsebina' },
      ]
    }
  },
  router: router
}
</script>
