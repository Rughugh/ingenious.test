<template>
  <div class="line-details">
    <input type="text" class="form-control" v-model="searchText" placeholder="Search..">

    <p v-if="error">{{ error }}</p>
    <ul v-else>
      <li><b>Bus stops</b></li>
      <li v-for="(line, index) in allLines" :key="index">
        {{ line.stop }} <b>{{ line.line }}</b>
      </li>
    </ul>
  </div>
</template>

<script>

import {getSearch} from "@/composables/getSearch";

export default {
  data () {
    return {
      timer: null,
      error: null,
      allLines: [],
      searchText: '',
    }
  },
  beforeRouteEnter: function (to, from, next) {
    next();
  },
  async created() {
    this.debounceSearch(0);
  },
  watch: {
    async searchText() {
      this.debounceSearch();
    }
  },
  methods: {
    debounceSearch(timeout = 1000){
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        const {data, error} = getSearch(this.searchText);
        this.error = error;
        this.allLines = data;
      }, timeout);
    }
  }
};
</script>

<style lang="scss" scoped>
.line-details {
  background-color: #FFF;
  padding: 20px;

  input {
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-top: 10px;

    li {
      padding: 20px 10px;
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