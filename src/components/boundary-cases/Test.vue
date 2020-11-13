<template>
    <div>
        <span>Števc A: <b>{{ counterA }}</b></span>&nbsp;
        <span>Števc B: <b>{{ counterB }}</b></span>&nbsp;
        <span>Števc C: <b>{{ counterC }}</b></span>
        <br>
        <span>Testni objekt: <b>{{ JSON.stringify(initialObject) }}</b></span>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Test</th>
                <th scope="col">Porabljen čas v ms</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1A</th>
                <td>
                    <button class="btn btn-dark" v-on:click="click">Test this</button>
                </td>
                <td>{{ resultsClick }}</td>
            </tr>
            <tr>
                <th scope="row">1B</th>
                <td>
                    <button class="btn btn-dark" v-on:click="clickMultiple">Test set multiple</button>
                </td>
                <td>{{ resultsMultiple }}</td>
            </tr>
            <tr>
                <th scope="row">1C</th>
                <td>
                    <button class="btn btn-dark" v-on:click="clickSetObject">Test set object</button>
                </td>
                <td>{{ resultsSetObject }}</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>
                    <button class="btn btn-dark" v-on:click="clickVar">Test var</button>
                </td>
                <td>{{ resultsClickVar }}</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>
                    <button class="btn btn-dark" v-on:click="clickHidden">Test hidden</button>
                </td>
                <td>{{ resultsClickHidden }}</td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>
                    <button class="btn btn-dark" v-on:click="clickTimeout">Test timeout</button>
                </td>
                <td>{{ resultsClickTimeout }}</td>
            </tr>
            <tr>
                <th scope="row">5</th>
                <td>
                    <button class="btn btn-dark" v-on:click="clickRecursiveTimeout(1000)">Test recursive timeout
                    </button>
                </td>
                <td>{{ resultsClickRecursiveTimeout }}</td>
            </tr>
            </tbody>
        </table>
    </div>

</template>

<script>


  export default {
    name: 'Test',
    methods: {
      click: function () {
        // eslint-disable-next-line no-console
        console.time('Function this increase');
        const tmp = Date.now();
        for (let i = 0; i < 10000000; i++) {
          this.counterA++;
        }
        this.resultsClick = Date.now() - tmp;
        // eslint-disable-next-line no-console
        console.timeEnd('Function this increase');
      },
      clickVar: function () {
        // eslint-disable-next-line no-console
        console.time('Function var increase');
        const tmp = Date.now();
        let counter = this.counter;
        for (let i = 0; i < 10000000; i++) {
          counter++;
        }
        this.counterB = counter;
        this.resultsClickVar = Date.now() - tmp;
        // eslint-disable-next-line no-console
        console.timeEnd('Function var increase');
      },
      clickHidden: function () {
        // eslint-disable-next-line no-console
        console.time('Function hidden increase');
        const tmp = Date.now();
        for (let i = 0; i < 10000000; i++) {
          this.hidden++;
        }
        this.resultsClickHidden = Date.now() - tmp;
        // eslint-disable-next-line no-console
        console.timeEnd('Function hidden increase');
      },
      clickTimeout: function () {
        // eslint-disable-next-line no-console
        console.time('Function timeout increase');
        const tmp = Date.now();
        for (let i = 0; i < 1000; i++) {
          setTimeout(() => {
            this.counter++;
          }, 1);
        }
        this.resultsClickTimeout = Date.now() - tmp;
        // eslint-disable-next-line no-console
        console.timeEnd('Function timeout increase');
      },
      clickRecursiveTimeout: function (nr) {
        if (nr === 1000) {
          // eslint-disable-next-line no-console
          console.time('Function recursive timeout increase');
          this.recursiveTimer = Date.now();
        }
        if (nr > 0) {
          setTimeout(() => {
            this.counter++;
            this.clickRecursiveTimeout(nr - 1);
          }, 1);
        } else {
          this.resultsClickRecursiveTimeout = Date.now() - this.recursiveTimer;
          // eslint-disable-next-line no-console
          console.timeEnd('Function recursive timeout increase');
        }
      },
      clickMultiple: function () {
        // eslint-disable-next-line no-console
        console.time('Function multiple increase');
        const tmp = Date.now();
        for (let i = 0; i < 10000000; i++) {
          this.counterA++;
          this.counterB++;
          this.counterC++;
        }
        this.resultsMultiple = Date.now() - tmp;
        // eslint-disable-next-line no-console
        console.timeEnd('Function multiple increase');
      },
      clickSetObject: function () {
        // eslint-disable-next-line no-console
        console.time('Function set object');
        const tmp = Date.now();
        for (let i = 0; i < 10000000; i++) {
          this.initialObject = {
            title: 'Some changed obj',
            value: i,
            deeper: {title: 'Deeper object', someBool: true},
            emptyOby: {}
          };
        }
        this.resultsSetObject = Date.now() - tmp;
        // eslint-disable-next-line no-console
        console.timeEnd('Function set object');
      },
    },
    data() {
      return {
        counterA: 1,
        counterB: 1,
        counterC: 1,
        initialObject: {
          title: 'Some random obj',
          value: 0,
          deeper: {title: 'Deeper object', someBool: true},
          emptyOby: {}
        },

        resultsClick: null,
        resultsClickVar: null,
        resultsClickHidden: null,
        resultsClickTimeout: null,
        resultsClickRecursiveTimeout: null,
        resultsMultiple: null,
        resultsSetObject: null,

        hidden: 1,

        recursiveTimer: null,
      };
    }
  }
</script>

