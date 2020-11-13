<template>
  <div class="container rounded pb-2" style="background-color: #e8e9ea;">
    <h4>Komponenta 4</h4>
    <p>Seznam testov v aplikaciji vključen prek sprehoda čez seznam iz spremenljivke:</p>
    <ul>
      <li v-for="item of listItems" :key="item">{{ item }}</li>
    </ul>
  </div>


</template>

<script>



export default {
  name: 'DynamicFour',
  data() {
    return {
      listItems: [
        '#1A gre za 10.000.000x povečevanje prikazanega števca pri čemer v vsakem koraku kličemo funkcijo za zaznavanje sprememb',
        '#1B gre za 10.000.000x povečevanje treh prikazanih števcev pri čemer v vsakem koraku kličemo funkcijo za zaznavanje sprememb',
        '#1C gre za 10.000.000x nastavljanje novega objekta v prikazano spremenljivko',
        '#2 gre za 10.000.000x povečevanje prikazanega števca pri čemer se ta začasno prepiše in povečuje v lokalni spremenljivki; funkcijo' +
        ' za zaznavanje sprememb kličemo samo na koncu',
        '#3 gre za 10.000.000x povečevanje skritega števca (ki se ne prikazuje na uporabniškem vmesniku) pri čemer v vsakem koraku kličemo' +
        ' funkcijo za zaznavanje sprememb',
        '#4 gre za 1.000x povečevanje prikazanega števca znotraj asinhrone funkcije setTimeout pri čemer v vsakem koraku kličemo' +
        ' funkcijo za zaznavanje sprememb',
        '#5 gre za 1.000x rekurzivno povečevanje prikazanega števca znotraj asinhrone funkcije setTimeout pri čemer v vsakem' +
        ' koraku kličemo funkcijo za zaznavanje sprememb',

      ]
    }
  }
}
</script>

