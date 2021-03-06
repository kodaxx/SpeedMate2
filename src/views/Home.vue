<template>
<div class="home">
  <h2>Material & Tool Info</h2>
  <form style="width: 90%; padding: 20px; margin: 0 auto;">
    <span class="label">Select a Material</span>
    <select v-model="selected" class="round">
      <option v-for="material in materials" :key= "material.id" :value="material">{{ material.name }}</option>
    </select>
    <span class="label">Tool Type</span>
    <div class="switch">
      <input v-model="tool" type="radio" id="radio-one" name="switch-one" value="hss" checked />
      <label for="radio-one">H.S.S.</label>
      <input v-model="tool" type="radio" id="radio-two" name="switch-one" value="carbide" />
      <label for="radio-two">Carbide</label>
    </div>
    <span class="label">Select an Operation</span>
    <select v-model="operation" class="round">
      <option value="face">Face Milling</option>
      <option value="slab">Slab/Side Milling</option>
      <option value="end">End Milling</option>
      <option value="turn">Turning</option>
      <option value="bore">Boring</option>
      <option value="drill">Drilling</option>
      <option value="ream">Reaming</option>
      <option value="counter">Counter-Boring</option>
    </select>
    <span class="label">Number of Teeth</span>
    <div class="slidecontainer">
      <span id="teeth">{{ teeth }}</span><input type="range" min="1" max="10" value="1" v-model="teeth" class="slider" id="silder">
    </div>
    <span class="label">Diameter of Workpiece/Cutter</span>
    <input :class="{ error: !diameterValid }" type="text" pattern="(\d+[\/\d. ]*|\d)" v-model="diameterString">
    <button @click.prevent="log" type="button" name="button" :disabled="diameterNotZero">Calculate</button>
  </form>
</div>
</template>

<script>
import router from '../router'

export default {
  name: 'home',
  store: ['operation', 'tool', 'selected', 'materials', 'rpm', 'teeth', 'specificRpm', 'angle', 'message', 'diameter'],
  data () {
    return {
      diameterString: '0'
    }
  },
  methods: {
    convertFraction: function (string) {
      if (!isNaN(string * 1)) {
        return parseFloat(string)
      } else {
        let parts = string.split('/')
        if (parts.length === 2) {
          let first = parseInt(parts[0], 10)
          let second = parseInt(parts[1], 10)
          if (!isNaN(first) && !isNaN(second)) {
            return first / second
          }
        } else if (parts.length === 1) {
          return parseInt(parts[0])
        }
        return NaN
      }
    },
    RPM: function (sfpm, diameter) {
      if (this.operation === 'drill' && this.tool === 'carbide') {
        this.message = 'Unfortunately we do not have data for carbide drill bits at this time'
        return
      }
      if (this.operation === 'drill') {
        this.angle.low = this.selected.operations.drill.sfpm.angle[0]
        this.angle.high = this.selected.operations.drill.sfpm.angle[1]
      }
      this.rpm.low = Math.round((sfpm[0] * 12) / (Math.PI * diameter))
      this.rpm.high = Math.round((sfpm[1] * 12) / (Math.PI * diameter))
      this.specificRpm = this.rpm.low
      this.message = ''
    },
    log: function () {
      this.RPM(this.selected.operations[this.operation].sfpm[this.tool], this.diameterDecimal)
      router.push('/rpm')
    }
  },
  computed: {
    diameterDecimal: function () {
      this.diameter = this.convertFraction(this.diameterString)
      return this.convertFraction(this.diameterString)
    },
    diameterValid: function () {
      if (isNaN(this.diameterDecimal)) {
        return false
      } else {
        return true
      }
    },
    diameterNotZero: function () {
      return ((this.diameterDecimal === 0) || (!this.diameterValid))
    }
  }
}
</script>

<style scoped>
.home {
  text-align: left;
}

h2 {
  font-weight: bold;
  margin-left: 20px;
  margin-bottom: 0;
}

.label {
  margin-left: 5px;
}

input[type="text"],
select {
  margin: 10px 0px 20px;
  padding: 15px;
  font-size: 15px;
  font-weight: bold;
  background-color: #EFEEF4;
  border: thin solid #F6F6F6;
  box-shadow: 1px 1px 10px 0px hsla(0, 0%, 0%, 0.1);
  border-radius: 5px;
  width: 100%;
  /* styling */
  display: inline-block;
  line-height: 1.5em;
  padding: 0.5em 3.5em 0.5em 1em;

  /* reset */
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
}

*:focus {
  outline: none;
}

select:active {
  background-color: #0375FB;
  color: #fff;
}

select.round {
  background-image:
    linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    radial-gradient(#ddd 70%, transparent 72%);
  background-position:
    calc(100% - 19px) calc(1em + 2px),
    calc(100% - 14px) calc(1em + 2px),
    calc(100% - .6em) .5em;
  background-size:
    5px 5px,
    5px 5px,
    1.5em 1.5em;
  background-repeat: no-repeat;
}

.switch {
  display: flex;
  margin: 10px 0px 20px;
  overflow: hidden;
}

.switch input {
  position: absolute !important;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  width: 1px;
  border: 0;
  overflow: hidden;
}

.switch label {
  background-color: #e4e4e4;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.6);
  font-size: 15px;
  line-height: 1;
  text-align: center;
  padding: 18px 18px;
  margin-right: -1px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: all 0.1s ease-in-out;
}

.switch input:checked+label {
  background-color: #0375FB;
  color: #fff;
  box-shadow: none;
}

.switch label:first-of-type {
  border-radius: 4px 0 0 4px;
}

.switch label:last-of-type {
  border-radius: 0 4px 4px 0;
}

#teeth {
  background-color: #0375FB;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
}

.slidecontainer {
  width: 100%;
  margin: 10px 0px 20px;
}

.slider {
  -webkit-appearance: none;
  appearance: none;
  margin-left: 10px;
  width: 84%;
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

input[type="text"] {
  background-color: #fff;
}

.error {
  border: thin solid hsla(360, 100%, 45%, 0.7) !important;
}

button {
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

button:disabled {
  background-color: #e4e4e4;
  color: rgba(0, 0, 0, 0.6);
}
</style>
