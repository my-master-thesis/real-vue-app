<template>
    <tr>
        <td scope="row">{{ task.id }}</td>
        <td><Input v-model="task.title"/></td>
        <td><Input v-model="task.description"/></td>
        <td>
            {{ printDuration(task.duration) }}
            <button v-if="task.startDate" v-on:click="stopTimer()" class="btn btn-danger">Stop</button>
            <button v-if="!task.startDate" v-on:click="startTimer()" class="btn btn-success">Start</button>
        </td>
        <td v-if="showContacts">
            <OwnSelect
                    v-model="task.contactId" :items="contacts"
                    bindLabel="firstName"
                    bindLabelSecond="lastName"
                    bindValue="id"
            ></OwnSelect>
        </td>
    </tr>

</template>

<script>
  import Input from "../components/Input";
  import OwnSelect from "../components/OwnSelect";
  import {interval} from 'rxjs';

  export default {
    name: 'TasksTableItem',
    components: {OwnSelect, Input},
    props: ['task', 'showContacts', 'contacts'],
    data() {
      return {
        timerSubscription: null,
      }
    },
    mounted() {
      if (this.task.startDate) {
        this.startInterval();
      }
    },
    methods: {
      startTimer: function () {
        this.$set(this.task, 'startDate', new Date(Date.now() - (this.task.duration ? this.task.duration : 0)))
        this.startInterval();
      },
      stopTimer: function (skipStop = false) {
        if (this.timerSubscription && !this.timerSubscription.closed) {
          this.timerSubscription.unsubscribe();
          if (!skipStop) {
            this.task.startDate = null;
          }
        }
      },
      startInterval: function () {
        this.stopTimer();
        if (!this.task.duration) {
          this.$set(this.task, 'duration', 0)
        }
        this.timerSubscription = interval(1000)
          .subscribe(() => {
            this.task.duration = Date.now() - this.task.startDate.getTime();
          });
      },
      printDuration: function (ms) {
        if (!ms) {
          return '';
        }
        const hours = Math.floor(ms / (60 * 60 * 1000));
        const minutes = Math.floor(ms / (60 * 1000)) % 60;
        const seconds = Math.floor(ms / (1000)) % 60;
        return hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
      }
    },
    destroyed() {
      this.stopTimer(true);
    },
  }
</script>

