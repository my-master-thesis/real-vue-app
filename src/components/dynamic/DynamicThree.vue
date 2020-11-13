<template>
  <div class="container rounded pb-2" style="background-color: #e8e9ea;">
    <h4>Komponenta 3</h4>
    <p>Seznam poglavij dela vključen z zankami:</p>
    <ul>
      <li v-for="content in contentArray" :key="content.title">{{ content.title}}
        <ul v-if="content.children">
          <li v-for="child in content.children" :key="child">{{ child }}</li>
        </ul>
      </li>
    </ul>
  </div>


</template>

<script>



export default {
  name: 'DynamicThree',
  data() {
    return {
      contentArray: [
        {title: 'Povzetek'},
        {title: 'Abstract' },
        {
          title: 'Uvod',
          children: ['Motivacija']
        },
        {
          title: 'Pregled področja',
          children: [
            'Spletni programski jeziki',
            'Komponentni razvoj programske opreme',
            'Komponentni razvoj spletnih aplikacij',
            'Popularna spletna ogrodja'
          ]
        },
        {
          title: 'Primerjava komunikacije med komponentami',
          children: ['Angular', 'React', 'Vue']
        },
        {title: 'Nadgradnja komunikacije' },
        {title: 'Rezultati in testiranje' },
        {title: 'Sklepne ugotovitve' }
      ]
    }
  }
}
</script>

