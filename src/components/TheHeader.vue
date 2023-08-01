<template>
  <div id="theHeader">
    <header>
      <div id="pcHeader">
        <h1>
          <img
            src="~@/assets/images/logo.png"
            alt="carbon market report logo image"
          />
        </h1>
        <nav>
          <ul>
            <li><router-link to="/">Carbon market report</router-link></li>
            <li><router-link to="/sesuinnvira">sesu.innvira</router-link></li>
            <li><router-link to="/reddplus">REDD+</router-link></li>
          </ul>
        </nav>
      </div>
      <div id="mHeader">
        <section class="logoWrap">
          <h1>
            <img
              src="~@/assets/images/logo_m.png"
              alt="carbon market report logo image"
            />
          </h1>
          <p>
            <img
              src="~@/assets/images/menu_ic.png"
              alt="menu button"
              @click="onClickMenuButton"
            />
          </p>
        </section>
        <section class="navWrap" :style="openMenuBar">
          <ul>
            <li @click="onclickLinkButton">
              <router-link to="/">CARBONB MARKET REPORT</router-link>
            </li>
            <li @click="onclickLinkButton">
              <router-link to="/sesuinnvira">SESU.INNVIRA</router-link>
            </li>
            <li @click="onclickLinkButton">
              <router-link to="/reddplus">REDD+</router-link>
            </li>
          </ul>
        </section>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      menuBar: false,
    };
  },
  computed: {
    openMenuBar() {
      return this.menuBar ? `display: block` : `display: none`;
    },
  },
  methods: {
    onClickMenuButton() {
      this.menuBar = true;
    },
    onclickLinkButton() {
      this.menuBar = false;
    },
  },
});
</script>

<style scoped lang="scss">
@import '@/scss/theHeader.scss';
</style>
