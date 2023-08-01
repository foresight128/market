<template>
  <div id="mainPage">
    <the-header></the-header>
    <section class="mainBanner"></section>
    <section class="logoWrap">
      <img src="~@/assets/images/logo_gray.png" alt="decorative logo image" />
    </section>
    <section class="container">
      <p class="firstImage imageWrap">
        <img
          src="~@/assets/images/main/image_01.png"
          alt="decorative image 01"
          class="imagePc"
        />
        <img
          src="~@/assets/images/main/image_01_m.png"
          alt="decorative image 01"
          class="imageM"
        />
      </p>
      <h2 class="pageTitle">
        A Beacon of Climate Action in Accordance with the Paris Agreement
      </h2>
      <p class="pageText">
        Amidst a rapidly intensifying climate crisis, SESU.Innvira is proud to
        unveil the Carbon Market. This platform is fervently dedicated to
        bolstering the objectives of the Paris Agreement, aiming to play a
        pivotal role in the global climate action movement.
      </p>
      <p class="imageWrap">
        <img
          src="~@/assets/images/main/image_02.png"
          alt="decorative image 02"
          class="imagePc"
        />
        <img
          src="~@/assets/images/main/image_02_m.png"
          alt="decorative image 02"
          class="imageM"
        />
      </p>
      <h2 class="pageTitle">Our Commitment</h2>
      <p class="pageText">
        While countless platforms offer overarching information about carbon
        markets, Carbon Market distinctively underscores the crucial part these
        markets serve in tackling the climate challenge. Our primary pursuit is
        to equip businesses, organizations, and passionate individuals with the
        means to foster meaningful change towards a resilient, sustainable
        future.
      </p>
      <div>
        <h2 class="pageTitle">The Paris Agreement & Our Pledge</h2>
        <p class="pageText">
          The Paris Agreement is a testament to global solidarity against
          climate change, advocating for escalated actions and investments
          towards a sustainable, carbon-minimal future. At Carbon Market, every
          initiative, carbon credit transaction, project, and collaboration is
          meticulously tailored to echo the sentiments of this monumental pact.
        </p>
        <h2 class="pageTitle">Our Offerings</h2>
        <ul>
          <li class="liTitle">In-depth Insights:</li>
          <li class="liText">
            Dive deep into the world of carbon markets. Our extensive resources,
            illustrative case studies, and thorough analyses shed light on the
            carbon market's trajectory and its synergy with the Paris Agreement.
          </li>
          <li class="liTitle">Carbon Credit Avenues:</li>
          <li class="liText">
            Navigate our handpicked selection of certified carbon credits and
            pioneering projects, all curated with a balanced focus on
            environmental impact and economic feasibility.
          </li>
          <li class="liTitle">Alliances and Collaborative Ventures:</li>
          <li class="liText">
            Collaborate with SESU.Innvira and transform the carbon market into a
            formidable weapon against the climate crisis. Immerse yourself in
            our expansive network of visionary collaborators, all unified by a
            shared vision.
          </li>
        </ul>
      </div>
      <p class="imageWrap">
        <img
          src="~@/assets/images/main/image_03.png"
          alt="decorative image 03"
          class="imagePc"
        />
        <img
          src="~@/assets/images/main/image_03_m.png"
          alt="decorative image 03"
          class="imageM"
        />
      </p>
      <h2 class="pageTitle">Be Part of the Revolution</h2>
      <p class="pageText">
        The world is witnessing a paradigm shift. Engage with the Carbon Market
        and be a catalyst in forging a sustainable path, seamlessly aligned with
        the Paris Agreement, sculpting a brighter, greener tomorrow.
      </p>
      <p class="imageWrap">
        <img
          src="~@/assets/images/main/image_04.png"
          alt="decorative image 04"
          class="imagePc"
        />
        <img
          src="~@/assets/images/main/image_04_m.png"
          alt="decorative image 04"
          class="imageM"
        />
      </p>
      <h2 class="pageTitle">Reach Out</h2>
      <p class="pageText lastText">
        For any inquiries, potential collaborations, or simply to delve deeper
        into our initiatives, we invite you to get in touch.
      </p>
      <p class="pageText">pr@sesu.ai</p>
    </section>
    <the-footer></the-footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default Vue.extend({
  components: { TheHeader, TheFooter },
});
</script>

<style scoped lang="scss">
@import '@/scss/mainPage.scss';
</style>
