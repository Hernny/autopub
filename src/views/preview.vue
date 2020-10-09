<template>
<b-container>
    <div>  
        <br>
        <b-card no-body class="text-center">
            <b-card no-body bg-variant="success">
                <div><p class="text-white">Basic information (VIN) JN8AF5MRXCT100073</p></div>
            </b-card>
            <b-container>
                <div>
                    <b-row class="">
                        <b-col cols="6">
                            Year 00000
                        </b-col>
                        <b-col cols="6">
                            Doors 00000
                        </b-col>
                        <b-col cols="6">
                            Make 00000
                        </b-col>
                        <b-col cols="6">
                            Package Code 00000
                        </b-col>
                        <b-col cols="6">
                            Model 00000
                        </b-col>
                        <b-col cols="6">
                            Package Summary 00000
                        </b-col>
                        <b-col cols="6">
                            Trim 00000
                        </b-col>
                        <b-col cols="6">
                            Rear Axle 00000
                        </b-col>
                        <b-col cols="6">
                            Vehicle Type 00000
                        </b-col>
                        <b-col cols="6">
                            Drive Type 00000
                        </b-col>
                        <b-col cols="6">
                            Body Type 00000
                        </b-col>
                        <b-col cols="6">
                            Brake System 00000
                        </b-col>
                        <b-col cols="6">
                            Body Subtype 00000
                        </b-col>
                        <b-col cols="6">
                            Restraint Type 00000
                        </b-col>
                        <b-col cols="6">
                            OEM Body Style 00000
                        </b-col>
                    </b-row>
                </div>
            </b-container>
        </b-card>
        <br>
        <b-card no-body class="text-center">
            <b-container>
                <div>
                    <b-row class="">
                        <b-col cols="6">
                            <div>
                                <br>
                                <b-row>
                                    <b-col>
                                        <b-img :src="require('@/assets/audi.png')" fluid alt="Fluid image"></b-img>
                                    </b-col>
                                </b-row>
                                <br>
                                <b-row>
                                    <b-col><b-img :src="require('@/assets/audi.png')" fluid alt="Fluid image"></b-img></b-col>
                                    <b-col><b-img :src="require('@/assets/audi.png')" fluid alt="Fluid image"></b-img></b-col>
                                    <b-col><b-img :src="require('@/assets/audi.png')" fluid alt="Fluid image"></b-img></b-col>
                                </b-row>
                                <br>
                            </div>
                        </b-col>
                        <b-col cols="6">
                            <div>
                                <br>
                                <b-row>
                                    <b-col>
                                        <span>
                                            description
                                        </span>
                                    </b-col>
                                </b-row>
                                <br>
                                <b-card>
                                    <br>
                                    <b-row>
                                        <b-col></b-col>
                                        <b-col></b-col>
                                    </b-row>
                                </b-card>
                                <br>
                                <div class="float-right">
                                    <b-button variant="info">Share</b-button>
                                    <a href="#"><img src="@/assets/facebook-logo-5@3x.png" class="networks" alt="facebook"></a>
                                    <a href="#"><img src="@/assets/1200x630wa@3x.png" class="networks" alt="kijiji"></a>
                                    <a href="#"><img src="@/assets/unnamed@3x.png" class="networks" alt="lespac"></a>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </b-container>
        </b-card>
        <br>
    </div>
</b-container>

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