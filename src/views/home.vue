<template>
  <b-container>
    <br>
    <div>
      <b-row>
        <b-col><Publication/></b-col>
        <b-col><Publication/></b-col>
        <b-col><Publication/></b-col>
      </b-row>
      <b-row>
        <b-col><Publication/></b-col>
        <b-col><Publication/></b-col>
        <b-col><Publication/></b-col>
      </b-row>
      <b-row>
        <b-col><Publication/></b-col>
        <b-col><Publication/></b-col>
        <b-col><Publication/></b-col>
      </b-row>
      <br>
    </div>
  </b-container>
</template>
<script>
import Publication from "@/components/dashboard/publication.vue";
export default {
    name: "Home",
    components: {
      Publication
    }
}
</script>
<style lang="scss">
</style>