<template>
<div id="app">
  <div id="nav">
    <Slide width="250">
      <h2 id="menu">Tools</h2>
      <a @click="navigate('/')"><span>Speeds&nbsp;&amp;&nbsp;Feeds</span></a>
      <a @click="navigate('/angle')"><span>Angle&nbsp;Finder</span></a>
      <a @click="navigate('/tap')"><span>Tap/Drill&nbsp;Chart</span></a>
      <a @click="navigate('/materials')"><span>Conversions</span></a>
      <a @click="navigate('/materials')"><span>Materials</span></a>
    </Slide>
    <span id="title">SpeedMate</span>
  </div>
  <router-view />
</div>
</template>

<script>
import router from './router'
import { Slide } from 'vue-burger-menu'

export default {
  components: {
    Slide // Register your component
  },
  methods: {
    navigate: function (page) {
      router.push(page)
    }
  }
}
</script>

<style>
* {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

body {
  margin: 0;
  padding: 0;
  width: 99%;
  background-color: #EFEEF4;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}

#menu {
  position: absolute;
  top: 0px;
  left: 0px;
  margin: 0;
}

#nav {
  margin: 0;
  width: 93%;
  padding: 15px;
  background-color: #fafafa;
}

#title {
  font-weight: bold;
}

.bm-burger-button {
  position: fixed;
  width: 18px;
  height: 15px;
  left: 18px;
  top: 18px;
  cursor: pointer;
}

.bm-burger-bars {
  background-color: #0375FB;
}

.line-style {
  position: absolute;
  height: 15%;
  left: 0;
  right: 0;
}

.cross-style {
  position: absolute;
  top: 15px;
  right: 10px;
  cursor: pointer;
}

.bm-cross {
  background: #bdc3c7;
}

.bm-cross-button {
  height: 30px;
  width: 30px;
}

.bm-menu {
  height: 100%;
  /* 100% Full-height */
  width: 0;
  /* 0 width - change this with JavaScript */
  position: fixed;
  /* Stay in place */
  z-index: 1000;
  /* Stay on top */
  top: 0;
  left: 0;
  background-color: #FAFAFA;
  /* Black*/
  overflow-x: hidden;
  /* Disable horizontal scroll */
  padding-top: 60px;
  /* Place content 60px from the top */
  transition: 0.5s;
  /*0.5 second transition effect to slide in the sidenav*/
}

.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}

.bm-item-list {
  color: #b8b7ad;
  margin-left: 0%;
  font-size: 18px;
  /* background-color: #efefef */
}

.bm-item-list>* {
  display: flex;
  text-decoration: none;
  padding: 0.7em;
}

.bm-item-list>*>span {
  margin-left: 10px;
  font-weight: 700;
  color: #0375fb;
}
</style>
