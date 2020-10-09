<template>
    <b-container>
        <div>
            <br>
            <br>
            <b-row class="justify-content-md-center align-items-center">
            <b-col cols="3">
                <b-card no-body class="text-center">
                    <b-col cols="12">
                        <br>
                        <b-row >
                            <b-col cols="12" >
                                <b-form-input placeholder="VIN number" type="text" style="text-align: center;"></b-form-input>
                            </b-col>
                        </b-row>
                        <br>
                        <b-row >
                            <b-col cols="12">
                                <p class="h3 mb-2">
                                    <b-icon icon="camera"></b-icon>
                                </p>
                            </b-col>
                        </b-row>
                        <br>
                        <b-row >
                            <b-col cols="12" >
                                <b-button pill variant="success">Search</b-button>
                            </b-col>
                        </b-row>
                        <br>
                    </b-col>
                </b-card>
            </b-col>
        </b-row>
        </div>
    </b-container>
</template>
<script>
export default {
    name: "Vin"
}
</script>
<style lang="scss">
.logo{
  width: 200px;
  height: auto;
}
</style>