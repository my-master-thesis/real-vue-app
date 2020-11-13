<template>
  <div class="container rounded pb-2" style="background-color: #d8d9da;">
    <h3>{{ componentTitle}}</h3>
    <p>{{ componentText }}</p>
    <div class="row">
      <div class="col-12 col-md-6 pb-3">
        <div class="form-check">
          <input v-model="showThree" class="form-check-input" type="checkbox" value="Potrjen" id="showThree" name="showThree">
          <label class="form-check-label" for="showThree">
            Prikaži komponento 3
          </label>
        </div>
        <DynamicThree v-if="showThree"></DynamicThree>
      </div>
      <div class="col-12 col-md-6 pb-3">
        <div class="form-check">
          <input v-model="showFour" class="form-check-input" type="checkbox" value="Potrjen" id="showFour" name="showFour">
          <label class="form-check-label" for="showFour">
            Prikaži komponento 4
          </label>
        </div>
        <DynamicFour v-if="showFour"></DynamicFour>
      </div>
    </div>
  </div>

</template>

<script>



import DynamicThree from "./DynamicThree";
import DynamicFour from "./DynamicFour";
export default {
  name: 'DynamicTwo',
  components: {DynamicFour, DynamicThree},
  data() {
    return {
      showThree: true,
      showFour: true,
      componentTitle: 'Komponenta 2',
      componentText: 'Vsebuje samo tole besedilo (ki je podano s pomočjo interpolacije) in 2 podkomponenti.'
    };
  }
}
</script>

