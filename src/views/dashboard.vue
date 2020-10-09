<template>
  <b-container>
    <br>
    <div>
      <b-row>
          <b-col>    
            <b-button variant="success"><span><b-icon icon="clipboard-plus"></b-icon> add a new publishing</span></b-button>
          </b-col>
      </b-row>
      <br>
      <b-row>
          <b-col>
              <h5>Your publications <b-icon icon="caret-down"></b-icon></h5>
          </b-col>
      </b-row>
      <br>
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
    name: "Dashboard",
    components: {
      Publication
    }
}
</script>
<style lang="scss">
</style>