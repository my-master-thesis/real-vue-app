<template>
  <div class="container rounded pb-2" style="background-color: #d8d9da;">
    <h3>Komponenta 5</h3>
    <p>Vsebuje samo tole besedilo in 3 podkomponente.</p>
    <div class="row">
      <div class="col-12 col-md-4 pb-3">
        <StaticSix></StaticSix>
      </div>
      <div class="col-12 col-md-4 pb-3">
        <StaticSix></StaticSix>
      </div>
      <div class="col-12 col-md-4 pb-3">
        <StaticEight></StaticEight>
      </div>
    </div>
  </div>

</template>

<script>
import StaticSix from "./StaticSix";
import StaticEight from "./StaticEight";
export default {
  name: 'StaticFive',
  components: {StaticEight, StaticSix},
}
</script>

