<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500;700&display=swap');
html,
body,
div,
span,
h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
img,
strong,
b,
u,
i,
center,
ol,
ul,
li,
footer,
header,
menu,
nav,
section {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 14px;
  font-family: 'Noto Sans KR', sans-serif;
  vertical-align: baseline;
  box-sizing: border-box;
  line-height: 100%;
}

ol,
ul {
  list-style: none;
}

button {
  border: none;
  cursor: pointer;
  outline: none;
}

a {
  color: #000000;
  text-decoration: none;
  outline: none;
}

body {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #000000;
  box-sizing: border-box;
}

.blind {
  position: absolute;
  top: -9999px;
}
</style>
