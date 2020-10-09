<template>
  <b-card
    title="Car Model"
    :img-src="require('@/assets/audi.png')"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      car description
    </b-card-text>
    <div class="float-right">
        <span>price: 0$</span>
    </div>
    <br>
    <br>
    <div class="float-right">
        <a ><img src="@/assets/facebook-logo-5_2@3x.png" class="networks" alt="facebook"></a>
        <a href="#"><img src="@/assets/1200x630wa@3x.png" class="networks" alt="kijiji"></a>
        <a href="#"><img src="@/assets/unnamed@3x.png" class="networks" alt="lespac"></a>
        <b-button variant="info">Buy</b-button>
    </div>
  </b-card>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.networks{
  width: 2rem;
  height: auto;
}
</style>