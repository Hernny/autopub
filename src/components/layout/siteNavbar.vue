<template>
  <header>
    <b-navbar toggleable="lg" type="dark" variant="success">
      <b-navbar-brand href="#">
        <img src="@/assets/logo_2.png" class="logo" alt="logo">
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav >
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-item href="/dashboard">Dashboard</b-nav-item>
          <b-nav-item href="/contact">Contact us</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" variant="success" type="submit">Search</b-button>
          </b-nav-form>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: "SiteNavbar"
};
</script>
<style lang="scss" scoped>
.logo{
  width: 100px;
  height: auto;
}
</style>