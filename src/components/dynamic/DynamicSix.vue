<template>
  <div class="container rounded pb-2" style="background-color: #e8e9ea;">
    <h4>Komponenta 6/7</h4>
    <p>Ta podvojena komponenta vsebuje HTML kodo, ki ni prikazana, saj vsebuje <code>style="display: none"</code>. Še
      vedno pa je ta prisotna v DOM strukturi in se v ozadju tudi posodablja.</p>
    <div class="form-check">
      <input v-model="showContent" class="form-check-input" type="checkbox" value="Potrjen" name="showContent">
      <label v-on:click="showContent = !showContent" class="form-check-label">
        Prikaži vsebino (spreminja zgolj display)
      </label>
    </div>
    <main v-show="showContent" role="main">
      <p>Ura s posodabljanjem na 1000ms: {{ currentDate.getHours() }} : {{ currentDate.getMinutes() }} : {{ currentDate.getSeconds() }}</p>
      <p>
        <button v-on:click="stopTimer(1)" class="btn btn-secondary">Ustavi</button>
      </p>
      <p>
        <button v-on:click="resetTimer(1)" class="btn btn-secondary">Nadaljuj</button>
      </p>
      <p>Ura s posodabljanjem na 200ms: {{ currentDate2.getHours() }} : {{ currentDate2.getMinutes() }} : {{ currentDate2.getSeconds() }}</p>
      <p>
        <button v-on:click="stopTimer(2)" class="btn btn-secondary">Ustavi</button>
      </p>
      <p>
        <button v-on:click="resetTimer(2)" class="btn btn-secondary">Nadaljuj</button>
      </p>
    </main>
  </div>

</template>

<script>

import {interval} from 'rxjs';

export default {
  name: 'DynamicSix',
  mounted() {
    this.resetTimer(1);
    this.resetTimer(2);
  },
  beforeDestroy() {
    this.stopTimer(1);
    this.stopTimer(2);
  },
  methods: {
    resetTimer: function (nr) {
      this.stopTimer(nr);
      if (nr === 1) {
        this.timerSubscription = interval(1000).subscribe(() => this.currentDate = new Date());
      } else {
        this.timer2Subscription = interval(200).subscribe(() => this.currentDate2 = new Date());
      }
    },
    stopTimer: function (nr) {
      if (nr === 1 && this.timerSubscription) {
        this.timerSubscription.unsubscribe();
      }
      if (nr === 2 && this.timer2Subscription) {
        this.timer2Subscription.unsubscribe();
      }
    }
  },
  data() {
    return {
      showContent: false,
      currentDate: new Date(),
      currentDate2: new Date(),
    }
  },
}
</script>

