<template>
  <v-container>
    <v-sheet 
       rounded="lg"
       class="pa-2"
     >
     
      <introductory-blog
        :title=" $t('tradingTitle') "
        :text=" $t('tradingText') "
        image="/tradingRule1.png"
      />  

        <div class="mx-n2 mt-n10">
          <v-img src="/wave1.svg"></v-img>
          <div style="background-image: linear-gradient(to bottom, #D4D2FF, #fff)">
            <h2 class="primary--text py-3 pa-2">
              <center> {{ $t('tradingPrinciples') }} </center>
            </h2>
              <v-row class="py-7">
                <v-col 
                  cols="12"
                  sm="6"
                  class="primary--text"
                >
                  <h3>
                    <center class="primary--text">1</center>
                  </h3>
                  <div class="px-5 py-5">
                    <center> {{ $t('tradingPrinciples1') }} </center>
                  </div>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"        
                  class="primary--text"
                >
                  <h3>
                    <center class="primary--text">2</center>
                  </h3>
                  <div class="px-5 py-5">
                    <center> {{ $t('tradingPrinciples2') }} </center>
                  </div>
                </v-col>  
                <v-col
                  cols="12"
                  sm="6"          
                  class="primary--text"
                >
                  <h3>
                    <center class="primary--text">3</center>
                  </h3>
                  <div class="px-5 py-5">
                    <center> {{ $t('tradingPrinciples3') }} </center>
                  </div>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  class="primary--text"
                >
                <h3>
                  <center class="primary--text">4</center>
                </h3>
                <div class="px-5 py-5">
                  <center> {{ $t('tradingPrinciples4') }} </center>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>

      <introductory-blog
        :title=" $t('tradingParticipateTitle') "
        :text=" $t('tradingParticipateText') "
        image="/tradingRule2.png"
      />
      
      <div>
        <v-expansion-panels
          v-model="panel"
          multiple
          max-width="500"
          class="mt-5"
        >
          <v-expansion-panel >
            <v-expansion-panel-header class="pl-15">
              <h3>
                <center 
                class="text--primary" 
                >
                      {{ $t('documentsforScann') }}
                </center>
              </h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
              <div class="px-5 py-2">
                <center>
                      {{ $t('tradingTitle') }}
                </center>
                  <center>
                  <v-btn
                    color="primary"
                    outlined
                    class="mt-5"
                    width="200"
                    >
                    <v-icon left>mdi-file-download-outline</v-icon>
                        {{ $t('downloadFile') }}
                  </v-btn> 
                  </center>
              </div>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                <div class="px-5 py-2">
                  <center>
                      {{ $t('tradingBrok') }}
                  </center>
                <center>
                  <v-btn
                    color="primary"
                    outlined
                    class="mt-5"
                    width="200"
                  >
                    <v-icon left>mdi-file-download-outline</v-icon>
                      {{ $t('downloadFile') }}
                  </v-btn> 
                  </center>
                </div>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                  >
                <div class="px-5 py-2">
                  <center>
                      {{ $t('documentForm')}}
                    </center>
                  <center>
                  <v-btn
                      color="primary"
                      outlined
                      class="mt-5"
                      width="200"
                    >
                    <v-icon left>mdi-file-download-outline</v-icon>
                    {{ $t('downloadFile') }}
                  </v-btn> 
                  </center>
                </div>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                <div class="px-5 py-2">
                  <center>
                        {{  $t('documentBank') }}
                  </center>
                <center>
                  <v-btn
                    color="primary"
                    outlined
                    class="mt-5"
                    width="200"
                  >
                  <v-icon left>mdi-file-download-outline</v-icon>
                      {{ $t('downloadFile') }}
                  </v-btn> 
                  </center>
                </div>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                <div class="px-5 py-2">
                  <center>
                        {{ $t('documentChairman') }}
                  </center>
                <center>
                  <v-btn
                    color="primary"
                    outlined
                    class="mt-5"
                    width="200"
                  >
                    <v-icon left>mdi-file-download-outline</v-icon>
                      {{ $t('downloadFile') }}
                  </v-btn> 
                  </center>
                </div>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                <div class="px-5 py-2">
                    <center>
                        {{ $t('tradingBrokReg') }}     
                    </center>
                <center>
                  <v-btn
                    color="primary"
                    outlined
                    class="mt-5"
                    width="200"
                  >
                  <v-icon left>mdi-file-download-outline</v-icon>
                    {{ $t('downloadFile') }}
                  </v-btn> 
                  </center>
                </div>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>

      </v-expansion-panels>
      <v-expansion-panels
        v-model="panel"
        multiple
        max-width="500"
        class="mt-5"
      >
        <v-expansion-panel >
          <v-expansion-panel-header class="pl-15">
            <h3>
              <center>
                {{ $t('technicalCharacterGoods') }}
              </center>
            </h3>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
              <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >                   
              <div class="px-5 py-2">
                <center>
                      {{ $t('technicalCharacter') }}
                </center>
                  <center>
                <v-btn
                    color="primary"
                    outlined
                    class="mt-5"
                    width="200"
                  >
                <v-icon left>mdi-file-download-outline</v-icon>
                  {{ $t('downloadFile') }}
                </v-btn> 
                </center>
              </div>
              </v-col>                                              
            </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>

    </v-sheet>
  </v-container>
</template>

<script>
import IntroductoryBlog from '@/components/IntroductoryBlog.vue'
export default {
    components: {
    IntroductoryBlog
  },
  data: () => ({
      panel: [0, 1],
      readonly: false,
    }),
  }
 
</script>

<style scoped>

</style>