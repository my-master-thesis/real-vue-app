<template>
  <div class="container rounded pb-2" style="background-color: #d8d9da;">
    <h3>{{ componentTitle }}</h3>
    <p>{{ componentText }}</p>
    <div class="row">
      <div class="col-12 col-md-4 pb-3">
        <div class="form-check">
          <input v-model="showSix" class="form-check-input" type="checkbox" value="Potrjen" id="showSix" name="showSix">
          <label class="form-check-label" for="showSix">
            Prikaži komponento 6
          </label>
        </div>
        <DynamicSix v-if="showSix"></DynamicSix>
      </div>
      <div class="col-12 col-md-4 pb-3">
        <div class="form-check">
          <input v-model="showSeven" class="form-check-input" type="checkbox" value="Potrjen" id="showSeven" name="showSeven">
          <label class="form-check-label" for="showSeven">
            Prikaži komponento 7
          </label>
        </div>
        <DynamicSix v-if="showSeven"></DynamicSix>
      </div>
      <div class="col-12 col-md-4 pb-3">
        <div class="form-check">
          <input v-model="showEight" class="form-check-input" type="checkbox" value="Potrjen" id="showEight" name="showEight">
          <label class="form-check-label" for="showEight">
            Prikaži komponento 8
          </label>
        </div>
        <DynamicEight v-if="showEight"></DynamicEight>
      </div>
    </div>
  </div>


</template>

<script>



import DynamicSix from "./DynamicSix";
import DynamicEight from "./DynamicEight";
export default {
  name: 'DynamicFive',
  components: {DynamicEight, DynamicSix},
  data() {
    return {
      showSix: true,
      showSeven: true,
      showEight: true,
      componentTitle: 'Komponenta 5',
      componentText: 'Vsebuje samo tole besedilo (ki je podano s pomočjo interpolacije) in 3 podkomponente.'
    }
  }
}
</script>

