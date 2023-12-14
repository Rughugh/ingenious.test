<template>
  <p v-if="error">{{ error }}</p>
  <div v-else class="stop-details">
    <span class="title">Bus Stop: {{ stopData.stop }}</span>
    <ul>
      <li><b>Time</b></li>
      <li v-for="(time, index) in stopData.times" :key="index">
        {{ time }}
      </li>
    </ul>
  </div>
</template>

<script>
import {getTimes} from "@/composables/getTimes";

export default {
  name: 'BusTimeTable',
  props: {
    line: Number,
    order: Number,
  },
  data () {
    return {
      error: null,
      stopData: {
        stop: '',
        times: [],
      },
      times: []
    }
  },
  async created() {
    const {data, error} = getTimes(this.line, this.order);
    this.error = error;
    this.stopData = data;
  },
}
</script>

<style lang="scss" scoped>
.stop-details {
  padding: 20px;
  background-color: #FFFFFF;

  .title {
    font-weight: bold;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-top: 10px;

    li {
      padding: 20px 10px;
      border-radius: 5px;

      //styleName: Body/Regular/12px;
      font-family: Inter,serif;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: left;

      &:not(:first-child) {
        border-top: 1px solid #F3F4F9;
      }
    }
  }
}

</style>