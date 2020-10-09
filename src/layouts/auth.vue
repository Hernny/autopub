<template>
  <div class="auth-layout">
    <SiteContent />
    <SiteFooter class="site-footer" />
  </div>
</template>

<script>
import SiteContent from "@/components/layout/siteContent.vue";
import SiteFooter from "@/components/layout/siteFooter.vue";
export default {
    name: "AuthLayout",
    components: {
      SiteContent,
      SiteFooter
    }
}
</script>
<style lang="scss" scoped>
.auth-layout {
  background-image: url(../assets/login@3x.png);
  background-size: cover;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
</style>