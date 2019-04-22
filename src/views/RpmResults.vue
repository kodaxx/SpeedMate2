<template>
  <div class="results">
    <h2>RPM Range</h2>
    <form style="width: 90%; padding: 20px; margin: 0 auto;">
      <p>For <em><strong>{{ selected.operations[operation].name.toUpperCase() }}</strong></em> your
      <strong>{{ selected.name.toUpperCase() }}</strong> material with a <strong>{{ tool.toUpperCase() }}</strong>
      tool, we recommend an RPM range of:</p>
      <div class="range">
        <h5 id="header">RPM Range</h5>
        <p><strong>{{ rpm.low }}</strong> RPM - <strong>{{ rpm.high }}</strong> RPM</p>
      </div>
      <p>To calculate <strong>Feed Rate</strong> select a specific RPM from the range below.</p>
      <span class="label">RPM Range:</span>&nbsp;<span id="rpms">{{ specificRpm }}</span>
      <div class="slidecontainer">
        <input type="range" :min="rpm.low" :max="rpm.high" v-model="specificRpm" class="slider" id="silder">
      </div>
      <button type="button" name="button">Calculate</button>
      <button @click.prevent="navigate('/')" class="back" type="button" name="button">Back</button>
    </form>
  </div>
</template>

<script>
import router from '../router'

export default {
  name: 'rpmresults',
  store: ['operation', 'tool', 'selected', 'rpm', 'teeth', 'specificRpm'],
  data () {
    return {
      diameterString: '0'
    }
  },
  methods: {
    navigate: function (string) {
      router.push(string)
    }
  }
}
</script>

<style scoped>
.results {
  text-align: left;
}

h2 {
  font-weight: bold;
  margin-left: 20px;
  margin-bottom: 0;
}

.range {
  height: 20vh;
  border-radius: 5px;
  text-align: center;
  background-color: #fff;
}

#header {
  border-radius: 5px;
  font-size: 20px;
  color: #fff;
  padding: 1vh;
  background-color: #0375FB;
}

.slidecontainer {
  width: 100%;
  margin: 30px 0px 20px;
}

.slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 10px;
  background: #d3d3d3;
  border-radius: 10px;
  outline: none;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #0375FB;
  border-radius: 100%;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #0375FB;
  border-radius: 100%;
}

#rpms {
  background-color: #0375FB;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
}

button {
  margin: 2px;
  width: 100%;
  background-color: #0375FB;
  padding: 5%;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  border-radius: 5px;
  border: none;
  outline: none;
}

.back {
  background-color: #B12D24;
}
</style>
