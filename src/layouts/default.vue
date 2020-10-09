<template>
  <div class="default-layout">
    <SiteNavbar />
    <div style="position:relative; height:85%; overflow-y:auto">
      <SiteContent />
    </div>
    <SiteFooter class="site-footer" />
  </div>
</template>

<script>
import SiteContent from "@/components/layout/siteContent.vue";
import SiteNavbar from "@/components/layout/siteNavbar.vue";
import SiteFooter from "@/components/layout/siteFooter.vue";
export default {
    name: "DefaultLayout",
    components: {
      SiteContent,
      SiteNavbar,
      SiteFooter
    }
}
</script>
<style lang="scss" scoped>
.default-layout {
  background-image: url(../assets/pexels123@3x.png);
  background-size: cover;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
</style>