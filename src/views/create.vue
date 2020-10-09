<template>
    <b-container>
        <br>
        <div>
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
                        <b-row class="justify-content-md-center">
                            <b-col cols="3">
                                <b-input-group class="mt-3">
                                    
                                    <b-form-input placeholder="KMS"></b-form-input>
                                </b-input-group>
                            </b-col>
                            <b-col cols="3">
                                <b-input-group class="mt-3">
                                    
                                    <b-form-input placeholder="Colors"></b-form-input>
                                </b-input-group>
                            </b-col>
                        </b-row>
                        <br>
                        <b-row class="justify-content-md-center">
                            <b-col cols="3">
                                <b-input-group class="mt-3">
                                    <template v-slot:append>
                                        <b-input-group-text><b-form-checkbox size="md"></b-form-checkbox></b-input-group-text>
                                    </template>
                                    <b-form-input placeholder="Summer tires"></b-form-input>
                                </b-input-group>
                            </b-col>
                            <b-col cols="3">
                                <b-input-group class="mt-3">
                                    <template v-slot:append>
                                        <b-input-group-text><b-form-checkbox size="md"></b-form-checkbox></b-input-group-text>
                                    </template>
                                    <b-form-input placeholder="Winter tires"></b-form-input>
                                </b-input-group>
                            </b-col>
                        </b-row>
                        <br>
                        <b-row class="justify-content-md-center">
                            <b-col cols="3">
                                <b-input-group class="mt-3">
                                    <template v-slot:append>
                                        <b-input-group-text><b-form-checkbox size="md"></b-form-checkbox></b-input-group-text>
                                    </template>
                                    <b-form-input placeholder="Mags"></b-form-input>
                                </b-input-group>
                            </b-col>
                            <b-col cols="3">
                                <b-input-group class="mt-3">
                                    <template v-slot:append>
                                        <b-input-group-text><b-form-checkbox size="md"></b-form-checkbox></b-input-group-text>
                                    </template>
                                    <b-form-input placeholder="Mags"></b-form-input>
                                </b-input-group>
                            </b-col>
                        </b-row>
                        <br>
                        <b-row class="justify-content-md-center">
                            <b-col cols="3"><b-button>Automatic</b-button></b-col>
                            <b-col cols="3"><b-button variant="success">Manual</b-button></b-col>
                        </b-row>
                    </div>
                    <div>
                        <br>
                        <b-row class="justify-content-md-center">
                            <b-col cols="6">
                                <b-card no-body class="text-center">
                                    <b-container>
                                        <div>
                                            <br>
                                            <b-row>
                                                <b-col><b-form-checkbox size="sm">Air conditioning</b-form-checkbox></b-col>
                                                <b-col><b-form-checkbox size="sm">Memory seats</b-form-checkbox></b-col>
                                            </b-row>
                                            <br>
                                            <b-row>
                                                <b-col><b-form-checkbox size="sm">alarm</b-form-checkbox></b-col>
                                                <b-col><b-form-checkbox size="sm">Navigation system</b-form-checkbox></b-col>
                                            </b-row>
                                            <br>
                                            <b-row>
                                                <b-col><b-form-checkbox size="sm">Alloy wheels</b-form-checkbox></b-col>
                                                <b-col><b-form-checkbox size="sm">Power locks</b-form-checkbox></b-col>
                                            </b-row><br>
                                            <b-row>
                                                <b-col><b-form-checkbox size="sm">Bluetooth</b-form-checkbox></b-col>
                                                <b-col><b-form-checkbox size="sm">Power mirrors</b-form-checkbox></b-col>
                                            </b-row>
                                            <br>
                                            <b-row>
                                                <b-col><b-form-checkbox size="sm">Dual climate control</b-form-checkbox></b-col>
                                                <b-col><b-form-checkbox size="sm">Power seats</b-form-checkbox></b-col>
                                            </b-row>
                                            <br>
                                            <b-row>
                                                <b-col><b-form-checkbox size="sm">Entertainment package</b-form-checkbox></b-col>
                                                <b-col><b-form-checkbox size="sm">Power windows</b-form-checkbox></b-col>
                                            </b-row>
                                            <br>
                                            <b-row>
                                                <b-col><b-form-checkbox size="sm">Fog lights</b-form-checkbox></b-col>
                                                <b-col><b-form-checkbox size="sm">Estability control</b-form-checkbox></b-col>
                                            </b-row>
                                            <br>
                                            <b-row>
                                                <b-col><b-form-checkbox size="sm">Heated mirrors</b-form-checkbox></b-col>
                                                <b-col><b-form-checkbox size="sm">Sunroof</b-form-checkbox></b-col>
                                            </b-row>
                                            <br>
                                            <b-row>
                                                <b-col><b-form-checkbox size="sm">Heated seats</b-form-checkbox></b-col>
                                                <b-col><b-form-checkbox size="sm">Tow Packages</b-form-checkbox></b-col>
                                            </b-row><br>
                                            <b-row>
                                                <b-col><b-form-checkbox size="sm">Keyles entry</b-form-checkbox></b-col>
                                                <b-col><b-form-checkbox size="sm">Xenon headlights</b-form-checkbox></b-col>
                                            </b-row>
                                            <br>
                                            <b-row>
                                                <b-col cols="6"><b-form-checkbox size="sm">Leather seats</b-form-checkbox></b-col>
                                            </b-row>
                                            <br>
                                        </div>
                                    </b-container>
                                </b-card>
                            </b-col>
                        </b-row>
                        <br>
                    </div>
                    <div>
                        <br>
                        <b-row class="justify-content-md-center">
                            <b-col cols="6">
                                <b-row>
                                    <b-col>
                                        <b-button>
                                            <br>
                                            <p class="h3 mb-2">
                                                <b-icon icon="plus-circle"></b-icon>
                                            </p>
                                            <p>
                                                Car photo
                                            </p>
                                        </b-button>
                                    </b-col>
                                    <b-col>
                                        <b-button>
                                            <br>
                                            <p class="h3 mb-2">
                                                <b-icon icon="plus-circle"></b-icon>
                                            </p>
                                            <p>
                                                Car photo
                                            </p>
                                        </b-button>
                                    </b-col>
                                    <b-col>
                                        <b-button>
                                            <br>
                                            <p class="h3 mb-2">
                                                <b-icon icon="plus-circle"></b-icon>
                                            </p>
                                            <p>
                                                Car photo
                                            </p>
                                        </b-button>
                                    </b-col>
                                    <b-col>
                                        <b-button>
                                            <br>
                                            <p class="h3 mb-2">
                                                <b-icon icon="plus-circle"></b-icon>
                                            </p>
                                            <p>
                                                Car photo
                                            </p>
                                        </b-button>
                                    </b-col>   
                                </b-row>
                            </b-col>
                        </b-row>
                        <br>
                    </div>
                    <div>
                        <br>
                        <b-row class="justify-content-md-center">
                            <b-col cols="6">
                                <b-button to="preview" variant="success">
                                    Create
                                </b-button>
                            </b-col>
                        </b-row>
                        <br>
                    </div>
                </b-container>
            </b-card>
        </div>
        <br>
    </b-container>
</template>
<script>
export default {
    name: "Create"
}
</script>
<style lang="scss">
.logo{
  width: 200px;
  height: auto;
}
.root{
    position:relative;
    height:85%;
    overflow-y:auto;
}
</style>