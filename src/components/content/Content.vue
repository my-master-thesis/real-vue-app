<template>
  <div class="container-fluid">
    <h1 class="mt-4">O strani</h1>
    <p>Ta stran vsebuje 8 statičnih komponent z drevesno strukturo prikazano na spodnji sliki. Ta vsebina se nahaja na komponenti 1. Stran je namenjena testiranju zahtevnosti uporabe več komponent s statično vsebino direktno v HTML kodi.</p>
    <img src="../../assets/aplikacija_drevesna_struktura.jpg" alt="Drevesna struktura">
    <div class="row">
      <div class="col-md-12 col-lg-5 pb-3">
        <StaticTwo></StaticTwo>
      </div>
      <div class="col-md-12 col-lg-7">
        <StaticFive></StaticFive>
      </div>
    </div>
  </div>

</template>

<script>
import StaticTwo from "./StaticTwo";
import StaticFive from "./StaticFive";
export default {
  name: 'Content',
  components: {StaticFive, StaticTwo},
}
</script>

