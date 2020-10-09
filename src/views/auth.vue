<template>
  <b-container>
    <b-row class="vh-100 text-center" align-v="center">
      <b-col cols="12">
        <b-row align-h="center">
          <b-col cols="12" lg="3">
            <img src="@/assets/logo2x.png" class="logo" alt="logo">
          </b-col>
        </b-row>
        <br>
        <br>
        <b-row align-h="center">
          <b-col cols="12" lg="3">
            <b-form-input placeholder="Email" type="email" style="text-align: center;"></b-form-input>
          </b-col>
        </b-row>
        <br>
        <b-row align-h="center">
          <b-col cols="12" lg="3">
            <b-form-input placeholder="Passowrd" type="password" style="text-align: center;"></b-form-input>
          </b-col>
        </b-row>
        <br>
        <b-row align-h="center">
          <b-col cols="12" lg="3">
            <b-button pill variant="success">Login</b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
    name: "Auth"
}
</script>
<style lang="scss">
.logo{
  width: 200px;
  height: auto;
}
</style>