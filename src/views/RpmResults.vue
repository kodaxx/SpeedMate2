<template>
<div class="results">
  <h2>RPM Range</h2>
  <div class="column">
    <p v-if="message !== ''">{{ message }}</p>
    <form v-if="message === ''">
      <p id="message">For <em><strong>{{ selected.operations[operation].name.toUpperCase() }}</strong></em> your
        <strong>{{ selected.name.toUpperCase() }}</strong> material with a <strong>{{ tool.toUpperCase() }}</strong>
        tool, we recommend an RPM range of:</p>
      <div class="range">
        <h5 id="header">RPM Range</h5>
        <p><strong>{{ rpm.low }}</strong> RPM - <strong>{{ rpm.high }}</strong> RPM</p>
        <p v-if="operation === 'drill'"><em>Tip Angle:</em>&nbsp;<strong>{{ angle.low }}</strong><sup>o</sup> - <strong>{{ angle.high }}</strong><sup>o</sup></p>
      </div>
      <p>To calculate <strong>Feed Rate</strong> select a specific RPM from the range below.</p>
      <span class="label">RPM Range:</span>&nbsp;<span id="rpms">{{ specificRpm }}</span>
      <div class="slidecontainer">
        <input type="range" :min="rpm.low" :max="rpm.high" v-model="specificRpm" class="slider" id="silder">
      </div>
      <button @click.prevent="calculate(operation, diameter)" type="button" name="button">Calculate</button>
    </form>
    <button @click.prevent="navigate('/')" class="back" type="button" name="button">Back</button>
  </div>
</div>
</template>

<script>
import router from '../router'

export default {
  name: 'rpmresults',
  store: ['operation', 'tool', 'selected', 'rpm', 'teeth', 'specificRpm', 'angle', 'message', 'feed', 'diameter'],
  data () {
    return {
      diameterString: '0'
    }
  },
  methods: {
    navigate: function (string) {
      router.push(string)
    },

    calculate: function (operation, diameter) {
      let ipt = {
        low: 0,
        high: 0
      }

      let teeth = parseInt(this.teeth)

      if (operation === 'end') {
        if (diameter >= 2) {
          ipt.low = this.selected.operations[operation].ipt[this.tool][4][0]
          ipt.high = this.selected.operations[operation].ipt[this.tool][4][1]
        } else if (diameter < 2 && diameter >= 1) {
          ipt.low = this.selected.operations[operation].ipt[this.tool][3][0]
          ipt.high = this.selected.operations[operation].ipt[this.tool][3][1]
        } else if (diameter < 1 && diameter >= 0.75) {
          ipt.low = this.selected.operations[operation].ipt[this.tool][2][0]
          ipt.high = this.selected.operations[operation].ipt[this.tool][2][1]
        } else if (diameter < 0.75 && diameter >= 0.5) {
          ipt.low = this.selected.operations[operation].ipt[this.tool][1][0]
          ipt.high = this.selected.operations[operation].ipt[this.tool][1][1]
        } else if (diameter < 0.5) {
          ipt.low = this.selected.operations[operation].ipt[this.tool][0][0]
          ipt.high = this.selected.operations[operation].ipt[this.tool][0][1]
        }
      } else {
        ipt.low = this.selected.operations[operation].ipt[this.tool][0][0]
        ipt.high = this.selected.operations[operation].ipt[this.tool][0][1]
      }

      this.feed.low = ((ipt.low * this.specificRpm) * teeth).toFixed(3)
      this.feed.high = ((ipt.high * this.specificRpm) * teeth).toFixed(3)
      router.push('/feed')
    }

  }
}
</script>

<style scoped>
.results {
  text-align: left;
}

.column {
  width: 90%;
  padding: 20px;
  margin: 0 auto;
}

h5 {
  margin: 10px 0;
}

h2 {
  font-weight: bold;
  margin-left: 20px;
  margin-bottom: 0;
}

#message {
  margin-top: 0;
}

.range {
  height: 17.5vh;
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
  margin: 20px 0px;
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
