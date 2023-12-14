<template>
  <div class="line-details">
    <span class="title">Bus Line: {{ busline }}</span>
    <p v-if="error">{{ error }}</p>
    <ul v-else-if="lineDetails">
      <li><b>Bus stops</b></li>
      <li v-for="(stopItem, index) in lineDetails.stops" :key="index" @click="chooseStop(stopItem.order)">
        {{ stopItem.stop }} <b>{{ stopItem.order }}</b>
      </li>
    </ul>
  </div>
</template>

<script>

  import {getLineDetails} from "@/composables/getLineDetails";

  export default {
    name: 'BusLineDetails',
    props: {
      busline: Number
    },
    data () {
      return {
        error: null,
        lineDetails: null,
        currentStop: null
      }
    },
    async created() {
      const {data, error} = getLineDetails(this.busline);
      this.error = error;
      this.lineDetails = data;
    },
    watch: {
      async busline() {
        const {data, error} = getLineDetails(this.busline);
        this.error = error;
        this.lineDetails = data;
      }
    },
    methods: {
      chooseStop(stop) {
        this.currentStop = stop;
        this.$emit('choice', stop);
      },
    }
  }
</script>

<style lang="scss" scoped>
  .line-details {
    background-color: #FFFFFF;
    padding: 20px;

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
          cursor: pointer;
        }

        &:not(:first-child):hover {
          background-color: #F3F4F9;
        }
      }
    }
    .title {
      font-weight: bold;
    }
  }

</style>