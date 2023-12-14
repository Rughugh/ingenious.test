<template>
  <p v-if="error">{{ error }}</p>
  <div v-else class="bus-lines">
    <div>Select bus line</div>
    <button v-for="line in lines" type="button" class="btn btn-primary" :key="line" @click="chooseLine(line)">{{ line }}</button>
  </div>
  <div class="row">
    <div class="col">
      <div v-if="!currentLine" class="bus-placeholder">
        <span>Please select the bus line first</span>
      </div>
      <BusLineDetails v-else :busline="currentLine" @choice="busChoosen" />
    </div>

    <div class="col">
      <div v-if="!currentLine || !currentStopOrder" class="bus-placeholder">
        <span v-if="!currentLine">Please select the bus line first</span>
        <span v-else-if="!currentStopOrder" >Please select a stop first</span>
      </div>
      <BusTimeTable v-else :line="currentLine" :order="currentStopOrder" :key="`${currentLine}-${currentStopOrder}`" />
    </div>
  </div>
</template>

<script>
import BusLineDetails from "@/components/BusLineDetails";
import BusTimeTable from "@/components/BusTimeTable";
import {getLines} from "@/composables/getLines";

export default {
  components: {BusLineDetails, BusTimeTable},
  data () {
    return {
      lines: [],
      error: null,
      currentLine: null,
      currentStopOrder: null
    }
  },
  async created() {
    const {data, error} = getLines();
    this.error = error;
    this.lines = data;
  },
  methods: {
    busChoosen(bus) {
      this.currentStopOrder = bus;
    },
    chooseLine(line) {
      this.currentStopOrder = null;
      this.currentLine = line;
    },
  }

};
</script>

<style lang="scss" scoped>
.btn {
  margin-right: 5px;
}
.bus-lines {
  padding: 20px;
  margin-bottom: 10px;
  background-color: #FFFFFF;

  button {
    border-color: #1952E1;
    background-color: #1952E1;
  }

  > div {
    margin-bottom: 20px;
    font-weight: bold;
  }
}
.bus-placeholder {
  border: 2px dashed #DDDDDD;
  background-color: #FFFFFF;
  width: 100%;
  min-height: 400px;
  position: relative;

  span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #33373C;
  }
}
</style>