<template>
<div class="results">
  <h2>Feed Rate</h2>
  <div class="column">
    <form>
      <p>At a speed of <strong>{{ specificRpm }}</strong> RPM, we recommend a
        <strong>Feed Rate</strong> between <strong>{{ feed.low }}</strong> and <strong>{{ feed.high }}</strong>
        in. per min.</p>
      <div class="note">
        <h5 id="header">Note</h5>
        <ul style="list-style: none; text-align: left; margin: 0; padding: 0;">
          <li>Low rate is the starting feed for best finish.</li>
          <li>Use middle of feed range as the starting feed for roughing.</li>
          <li>High rate is the maximum feed for roughing.</li>
        </ul>
      </div>
      <button @click.prevent="navigate('/')" type="button" name="button">Start Over</button>
    </form>
  </div>
</div>
</template>

<script>
import router from '../router'

export default {
  name: 'feedresults',
  store: ['specificRpm', 'feed', 'teeth'],
  methods: {
    navigate: function (string) {
      this.teeth = 1
      router.push(string)
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

h2 {
  font-weight: bold;
  margin-left: 20px;
  margin-bottom: 0;
}

h5 {
  margin-bottom: 0;
}

.note {
  height: 30vh;
  border-radius: 5px;
  text-align: center;
  background-color: #fff;
  margin-bottom: 10vh;
}

#header {
  border-radius: 5px;
  font-size: 20px;
  color: #fff;
  padding: 1vh;
  background-color: #0375FB;
}

li {
  margin: 10px;
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
