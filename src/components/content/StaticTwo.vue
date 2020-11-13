<template>
  <div class="container rounded pb-2" style="background-color: #d8d9da;">
    <h3>Komponenta 2</h3>
    <p>Vsebuje samo tole besedilo in 2 podkomponenti.</p>
    <div class="row">
      <div class="col-12 col-md-6 pb-3">
        <StaticThree></StaticThree>
      </div>
      <div class="col-12 col-md-6 pb-3">
        <StaticFour></StaticFour>
      </div>
    </div>
  </div>

</template>

<script>
import StaticThree from "./StaticThree";
import StaticFour from "./StaticFour";
export default {
  name: 'StaticTwo',
  components: {StaticFour, StaticThree},
}
</script>

