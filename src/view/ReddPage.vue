<template>
  <div id="reddPlusPage">
    <the-header></the-header>
    <section class="reddBanner"></section>
    <section class="logoWrap">
      <img src="~@/assets/images/logo_gray.png" alt="decorative logo image" />
    </section>
    <section class="reddContainer">
      <h2 class="pageTitle firstTitle">
        A Comprehensive Understanding of REDD+: Safeguarding Our Forests and Our
        Future
      </h2>
      <p class="pageText">
        REDD+ (Reducing Emissions from Deforestation and Forest Degradation) is
        an international initiative that aims to conserve forests, enhance
        carbon stocks, and promote sustainable management of forests. Our
        collective responsibility towards our environment has never been more
        paramount, and in this context, REDD+ provides us with a global solution
        for a global issue.
      </p>
      <p class="imageWrap">
        <img
          src="~@/assets/images/redd/image_01.png"
          alt="decorative image 01"
          class="imagePc"
        />
        <img
          src="~@/assets/images/redd/image_01_m.png"
          alt="decorative image 01"
          class="imageM"
        />
      </p>
      <h2 class="pageTitle">What Is REDD+ and Why It Matters</h2>
      <p class="pageText">
        REDD+ is not just an environmental program; it's a transformative,
        multidimensional approach that fosters a symbiotic relationship between
        nature and society. By incentivizing forest conservation, we can
        contribute to reducing greenhouse gas emissions while supporting
        sustainable development and biodiversity.
      </p>
      <p class="imageWrap">
        <img
          src="~@/assets/images/redd/image_02.png"
          alt="decorative image 02"
          class="imagePc"
        />
        <img
          src="~@/assets/images/redd/image_02_m.png"
          alt="decorative image 02"
          class="imageM"
        />
      </p>
      <h2 class="pageTitle">The Mechanism of REDD+</h2>
      <p class="pageText">
        REDD+ operates through a system of financial incentives for developing
        countries, encouraging them to reduce emissions from deforestation and
        forest degradation. In return, these nations receive payments based on
        the carbon stock's performance in their forests. The initiative also
        supports the enhancement of carbon stocks through sustainable forest
        management practices and the rehabilitation of degraded forest lands.
      </p>
      <div class="firstDiv">
        <h2 class="pageTitle">The Phases of REDD+</h2>
        <p class="pageText">
          The implementation of REDD+ is typically organized into three phases:
        </p>
        <ul>
          <li class="liTitle">Readiness Phase:</li>
          <li class="liText">
            Involves capacity building, policy design, and planning for the
            implementation of REDD+ activities.
          </li>
          <li class="liTitle">Implementation Phase</li>
          <li class="liText">
            It includes policy reform, investments in various programs, and
            measures to address deforestation and forest degradation.
          </li>
          <li class="liTitle">Payment Phase:</li>
          <li class="liText">
            Based on results demonstrated by the reduced emissions from
            deforestation and forest degradation.
          </li>
        </ul>
        <h2 class="pageTitle">Principles of REDD+</h2>
        <p class="pageText">
          The implementation of REDD+ is typically organized intThe principles
          of REDD+ are grounded in inclusivity, transparency, effectiveness,
          efficiency, and sustainability:o three phases:
        </p>
        <ul>
          <li class="liTitle">Inclusivity:</li>
          <li class="liText">
            REDD+ promotes broad stakeholder engagement and acknowledges the
            rights of indigenous peoples and local communities.
          </li>
          <li class="liTitle">Transparency:</li>
          <li class="liText">
            REDD+ promotes broad stakeholder engagement and acknowledges the
            rights of indigenous peoples and local communities.
          </li>
          <li class="liTitle">Transparency:</li>
          <li class="liText">
            All actions are conducted openly, with clear communication and
            public access to information.
          </li>
          <li class="liTitle">Effectiveness:</li>
          <li class="liText">
            REDD+ is result-oriented, seeking to achieve significant emission
            reductions while responding to the local context and needs.
          </li>
          <li class="liTitle">Efficiency:</li>
          <li class="liText">
            Actions are undertaken in a cost-effective manner to maximize
            results and minimize waste.
          </li>
          <li class="liTitle">Sustainability:</li>
          <li class="liText">
            REDD+ aims to ensure long-term benefits, considering ecological
            integrity, social wellbeing, and economic viability.
          </li>
        </ul>
        <h2 class="pageTitle">
          The Role of REDD+ in Climate Change Mitigation
        </h2>
        <p class="pageText">
          REDD+ contributes to climate change mitigation by reducing carbon
          emissions from deforestation and forest degradation. By maintaining
          and enhancing forest carbon stocks, we can actively participate in the
          global fight against climate change. Furthermore, REDD+ goes beyond
          the carbon and positively impacts biodiversity and the livelihoods of
          people reliant on forests.
        </p>
      </div>
      <p class="lastImage imageWrap">
        <img
          src="~@/assets/images/redd/image_03.png"
          alt="decorative image 03"
          class="imagePc"
        />
        <img
          src="~@/assets/images/redd/image_03_m.png"
          alt="decorative image 03"
          class="imageM"
        />
      </p>
      <div>
        <h2 class="pageTitle">The Challenges and Solutions of REDD+</h2>
        <p class="pageText">
          Like any global initiative, REDD+ faces several challenges. However,
          by fostering international cooperation and a multidisciplinary
          approach, these challenges can be tackled effectively.
        </p>
        <ul>
          <li class="liTitle">Measurement and Monitoring:</li>
          <li class="liText">
            REDD+ requires robust systems to measure, report, and verify the
            impacts of REDD+ activities. Collaborating with scientific
            communities and implementing advanced technologies can enhance
            accuracy and reliability.
          </li>
          <li class="liTitle">Land Tenure Issues:</li>
          <li class="liText">
            Securing land rights for indigenous and local communities can
            improve forest governance and facilitate the successful
            implementation of REDD+.
          </li>
          <li class="liTitle">Financing:</li>
          <li class="liText">
            Ensuring long-term and sustainable funding is crucial for REDD+.
            Blended finance strategies can leverage both public and private
            funding sources.
          </li>
        </ul>
      </div>
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
@import '@/scss/reddPage.scss';
</style>
