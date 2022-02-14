<template>
  <div class="bar">
    <div class="nav">
      <router-link to="/">Home</router-link>
      <span>::</span>
      <router-link to="/about">About</router-link>
      <span>::</span>
      <router-link to="/testnet">Keplr Testnet</router-link>
      <span>::</span>
      <router-link to="/report">Report Bug</router-link>
      <span>::</span>
      <a href="https://jackal-wiki.notion.site/jackal-wiki/JACKAL-Wiki-02cf967e0a10475983823645238b8852">Wiki</a>
      <span>::</span>
      <a href="https://discord.gg/5GKym3p6rj">Discord</a>
      <span>::</span>
      <a href="https://twitter.com/JACKAL_DAO">Twitter</a>
      <span>::</span>
      <a href="https://forms.gle/zxKHB4P26GzFRQg16">Alpha Signup</a>
    </div>
<!--    <div class="socials">-->
<!--      <div class="icon discord">-->
<!--        <div class="tooltip">Discord</div>-->
<!--        <span><i class="fa-brands fa-discord"></i></span>-->
<!--      </div>-->
<!--      <div class="icon twitter">-->
<!--        <div class="tooltip">Twitter</div>-->
<!--        <span><i class="fa-brands fa-twitter"></i></span>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.bar {
  font-size: 32px;
  font-weight: bold;
  color: #F3EDD7;
  display: flex;
  justify-content: space-between;
}
.bar * {
  display: flex;
  align-items: center;
  justify-content: center;
}
/*.nav {*/
/*  overflow-x: auto;*/
/*  overflow-y: hidden;*/
/*  white-space: nowrap;*/
/*}*/

/*a:link {*/
/*  color: #F3EDD7;*/
/*}*/
/*a:hover {*/
/*  color: lightgray;*/
/*}*/
/*a:visited {*/
/*  color: #F3EDD7;*/
/*}*/

/*socials*/
/*.socials {*/
/*  display: inline-flex;*/
/*}*/

/*.socials .icon {*/
/*  position: relative;*/
/*  background-color: #ffffff;*/
/*  border-radius: 50%;*/
/*  padding: 15px;*/
/*  margin: 10px;*/
/*  width: 50px;*/
/*  height: 50px;*/
/*  font-size: 18px;*/
/*  display: flex;*/
/*  justify-content: center;*/
/*  align-items: center;*/
/*  flex-direction: column;*/
/*  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);*/
/*  cursor: pointer;*/
/*  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);*/
/*}*/

/*.socials .tooltip {*/
/*  position: absolute;*/
/*  top: 0;*/
/*  font-size: 14px;*/
/*  background-color: #ffffff;*/
/*  color: #ffffff;*/
/*  padding: 5px 8px;*/
/*  border-radius: 5px;*/
/*  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);*/
/*  opacity: 0;*/
/*  pointer-events: none;*/
/*  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);*/
/*}*/

/*.socials .tooltip::before {*/
/*  position: absolute;*/
/*  content: "";*/
/*  height: 8px;*/
/*  width: 8px;*/
/*  background-color: #ffffff;*/
/*  bottom: -3px;*/
/*  left: 50%;*/
/*  transform: translate(-50%) rotate(45deg);*/
/*  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);*/
/*}*/

/*.socials .icon:hover .tooltip {*/
/*  top: -45px;*/
/*  opacity: 1;*/
/*  visibility: visible;*/
/*  pointer-events: auto;*/
/*}*/

/*.socials .icon:hover span,*/
/*.socials .icon:hover .tooltip {*/
/*  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);*/
/*}*/

/*.socials .discord:hover,*/
/*.socials .discord:hover .tooltip,*/
/*.socials .discord:hover .tooltip::before {*/
/*  background-color: #3b5999;*/
/*  color: #ffffff;*/
/*}*/

/*.socials .twitter:hover,*/
/*.socials .twitter:hover .tooltip,*/
/*.socials .twitter:hover .tooltip::before {*/
/*  background-color: #46c1f6;*/
/*  color: #ffffff;*/
/*}*/

</style>