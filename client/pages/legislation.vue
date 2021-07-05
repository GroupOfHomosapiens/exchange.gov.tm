<template>
  <v-sheet 
    rounded="lg"
    class="pa-2"
  >
    <introductory-blog 
      :title="$t('regulatoryBase')"
      :text="$t('legislation1')"
      image="/legislation1.png"
    />

  <div class="mx-n2 mt-n10">
    <v-img src="/wave1.svg"></v-img>
    <div style="background-image: linear-gradient(to bottom, #D4D2FF, #fff)">
      <h2 class="primary--text py-5 pa-2">
        <center>{{ $t('arbitrationCommission') }}</center>
      </h2>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          class="primary--text"
        >
          <h3 >
            <center class="primary--text"> 1 </center>
          </h3>
          <div class="px-5 py-5">
            <center> {{ $t('legislationText') }} </center>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
          class="primary--text"
        >
          <h3 >
            <center class="primary--text"> 2 </center>
          </h3>
          <div class="px-5 py-5">
            <center> {{ $t('legislationText1') }} </center>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
          class="primary--text"
        >
          <h3 >
            <center class="primary--text"> 3 </center>
          </h3>
          <div class="px-5 py-5">
            <center> {{ $t('legislationText2') }} </center>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
          class="primary--text"
        >
          <h3 >
            <center class="primary--text"> 4 </center>
          </h3>
          <div class="px-5 py-5">
            <center> {{ $t('legislationText3') }} </center>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
          class="primary--text"
        >
          <h3 >
            <center class="primary--text"> 5 </center>
          </h3>
          <div class="px-5 py-5">
            <center> {{ $t('legislationText4') }} </center>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
          class="primary--text"
        >
          <h3 >
            <center class="primary--text"> 6 </center>
          </h3>
          <div class="px-5 py-5">
            <center> {{ $t('legislationText5') }} </center>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
  <div>
    <h2 class="primary--text my-10">
      <center>{{ $t('procedures') }}</center>
    </h2>
    <v-row>
      <v-col
        cols="12"
        sm="6"
      >
        <div class="px-5 py-2">
          <center> {{ $t('proceduresText') }} </center>
          <v-btn
            color="primary"
            block
            outlined
            class="mt-11"
          >
          <v-icon left>mdi-file-download-outline</v-icon>
            {{ $t('downloadFile') }}
          </v-btn>
        </div>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <div class="px-5 py-2">
          <center> {{ $t('proceduresText1') }} </center>
          <v-btn
            color="primary"
            block
            outlined
            class="mt-11"
          >
          <v-icon left>mdi-file-download-outline</v-icon>
            {{ $t('downloadFile') }}
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
  <div>
    <h2 class="primary--text my-10">
      <center>{{ $t('orders') }}</center>
    </h2>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <div class="px-5 py-2">
          <center> {{ $t('ordersText') }} </center>
          <v-btn
            color="primary"
            block
            outlined
            class="mt-11"
          >
          <v-icon left>mdi-file-download-outline</v-icon>
            {{ $t('downloadFile') }}
          </v-btn>
        </div>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <div class="px-5 py-2">
          <center> {{ $t('ordersText1') }} </center>
          <v-btn
            color="primary"
            block
            outlined
            class="mt-11"
          >
          <v-icon left>mdi-file-download-outline</v-icon>
            {{ $t('downloadFile') }}
          </v-btn>
        </div>
      </v-col>
       <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <div class="px-5 py-2">
          <center> {{ $t('ordersText2') }} </center>
          <v-btn
            color="primary"
            block
            outlined
            class="mt-16"
          >
          <v-icon left>mdi-file-download-outline</v-icon>
            {{ $t('downloadFile') }}
          </v-btn>
        </div>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <div class="px-5 py-7">
          <center> {{ $t('ordersText3') }} </center>
          <v-btn
            color="primary"
            block
            outlined
            class="mt-11"
          >
          <v-icon left>mdi-file-download-outline</v-icon>
            {{ $t('downloadFile') }}
          </v-btn>
        </div>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <div class="px-5 py-7">
          <center> {{ $t('ordersText4') }} </center>
          <v-btn
            color="primary"
            block
            outlined
            class="mt-11"
          >
          <v-icon left>mdi-file-download-outline</v-icon>
            {{ $t('downloadFile') }}
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
  <div>
    <h2 class="primary--text my-10">
      <center>{{ $t('laws') }}</center>
    </h2>
    <v-row>
      <v-col
        cols="12"
        sm="6"
      >
        <div class="px-5 py-2">
          <center> {{ $t('lawsText') }} </center>
          <v-btn
            color="primary"
            block
            outlined
            class="mt-11"
          >
          <v-icon left>mdi-file-download-outline</v-icon>
            {{ $t('downloadFile') }}
          </v-btn>
        </div>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <div class="px-5 py-2">
          <center> {{ $t('lawsText1') }} </center>
          <v-btn
            color="primary"
            block
            outlined
            class="mt-11"
          >
          <v-icon left>mdi-file-download-outline</v-icon>
            {{ $t('downloadFile') }}
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>

    <introductory-blue
      :title="$t('internalSupervisionNormalize')"
      :text="$t('legislation2')"
    />

    <div>
      <h2 class="primary--text my-15 py-3">
        <center> {{ $t('documentsForDownloading') }} </center>
      </h2>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <div class="px-5 py-2">
          <center> {{ $t('downLoadingText') }} </center>
          <v-btn
            color="primary"
            block
            outlined
            class="mt-11"
          >
          <v-icon left>mdi-file-download-outline</v-icon>
            {{ $t('downloadFile') }}
          </v-btn>
        </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <div class="px-5 py-2">
          <center> {{ $t('downLoadingText1') }} </center>
          <v-btn
            color="primary"
            block
            outlined
            class="mt-11"
          >
          <v-icon left>mdi-file-download-outline</v-icon>
            {{ $t('downloadFile') }}
          </v-btn>
        </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <div class="px-5 py-2">
          <center> {{ $t('downLoadingText2') }} </center>
          <v-btn
            color="primary"
            block
            outlined
            class="mt-11"
          >
          <v-icon left>mdi-file-download-outline</v-icon>
            {{ $t('downloadFile') }}
          </v-btn>
        </div>
        </v-col>
         <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <div class="px-5 py-2">
          <center> {{ $t('downLoadingText3') }} </center>
          <v-btn
            color="primary"
            block
            outlined
            class="mt-5"
          >
          <v-icon left>mdi-file-download-outline</v-icon>
            {{ $t('downloadFile') }}
          </v-btn>
        </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <div class="px-5 py-2">
          <center> {{ $t('downLoadingText4') }} </center>
          <v-btn
            color="primary"
            block
            outlined
            class="mt-11"
          >
          <v-icon left>mdi-file-download-outline</v-icon>
            {{ $t('downloadFile') }}
          </v-btn>
        </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <div class="px-5 py-2">
          <center> {{ $t('downLoadingText5') }} </center>
          <v-btn
            color="primary"
            block
            outlined
            class="mt-11"
          >
          <v-icon left>mdi-file-download-outline</v-icon>
            {{ $t('downloadFile') }}
          </v-btn>
        </div>
        </v-col>
      </v-row>
    </div>

    <introductory-blue
      :title="$t('consularTitle')"
      :text="$t('legislation3')"
      backgroundSkew="transform: skewY(3deg);"
      fontSkew1="transform: skewY(-3deg);"
      skewClass="mx-auto pa-2 text-justify mt-md-5"
    />
    
    <div>
      <div class="mx-n2" style="background-image: linear-gradient(to bottom, #D4D2FF, #fff); border-radius: 25px">
        <div>
          <h2 class="primary--text my-5 py-10">
            <center> {{ $t('consularLegalization') }} </center>
          </h2>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <div class="px-5 pb-6">
                <center>
                  <v-icon color="primary">mdi-circle</v-icon>
                </center>
                <center class="pt-4"> 
                  {{ $t('consularLegalizationText') }} 
                </center>
              </div>
            </v-col>
             <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <div class="px-5 pb-6">
                <center>
                  <v-icon color="primary">mdi-circle</v-icon>
                </center>
                <center class="pt-4"> 
                  {{ $t('consularLegalizationText1') }} 
                </center>
              </div>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <div class="px-5 pb-6">
                <center>
                  <v-icon color="primary">mdi-circle</v-icon>
                </center>
                <center class="pt-4"> 
                  {{ $t('consularLegalizationText2') }} 
                </center>
              </div>
            </v-col>
          </v-row>
          <template>
            <v-timeline
              dense
            >
              <v-timeline-item>
                <v-card max-width="1015" shaped>
                  <v-card-text class="white text--primary" style="background-image: linear-gradient(to bottom, #D4D2FF, #fff);">
                    <h2><center class="primary--text pb-5 pt-2">{{ $t('consularLegalizationText3') }}</center></h2>
                    {{ $t('consularLegalizationText4') }}
                  </v-card-text>
                 </v-card>
              </v-timeline-item>
              <v-timeline-item>
                <v-card max-width="1015" shaped>
                  <v-card-text class="white text--primary" style="background-image: linear-gradient(to bottom, #D4D2FF, #fff);">
                    <h2><center class="primary--text pb-5 pt-2">{{ $t('consularLegalizationText3') }}</center></h2>
                    {{ $t('consularLegalizationText6') }}
                  </v-card-text>
                 </v-card>
              </v-timeline-item>
            </v-timeline>
          </template>
        </div>
      </div>
    </div>
    <div class="primary my-5 darken-2 mx-n2">
      <div>
        <h1>
          <center class="white--text darken-5 py-5"> {{ $t('ratesAndfess') }} </center>
        </h1>
        <h4>
          <center class="grey--text lighten-2 py-2"> {{ $t('tariffsForservices') }} </center>
        </h4>
      </div>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <div class="white--text ml-15 my-10 ">
            <center> {{ $t('ratesAndfessText') }} </center>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <div class="white--text my-16">
            <h2><center> {{ $t('ratesAndfessText1') }} </center></h2>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <div class="white--text my-16">
            <center> {{ $t('ratesAndfessText2') }} </center>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <div class="ml-15">
            <h3><center id="color"> {{ $t('brokerageServices') }} </center></h3>
          </div>

          <div class="ml-15 my-5">
            <h3><center class="white--text"> {{ $t('totalContractAmount') }} </center></h3>
          </div>
          <v-sheet
            class="ml-15 my-5"
            rounded="lg"
            color="white"
            elevation="5"
            height="57"
            width="315"
          >
            <div class="pt-4">
              <span class="black--text pa-4"> {{ $t('number') }} </span>
              <span class="black--text pa-4 pl-7 pb-4"> {{ $t('number1') }} </span>
            </div>
          </v-sheet>
           <v-sheet
            class="ml-15 my-5"
            rounded="lg"
            color="white"
            elevation="5"
            height="57"
            width="315"
          >
            <div class="pt-4">
              <span class="black--text pa-4"> {{ $t('forNonResidents') }} </span>
              <span class="black--text pa-4 pl-16 pb-4"> {{ $t('number2') }} </span>
            </div>
          </v-sheet>
           <v-sheet
            class="ml-15 my-5"
            rounded="lg"
            color="white"
            elevation="5"
            height="57"
            width="315"
          >
            <div class="pt-4">
              <span class="black--text pa-4"> {{ $t('over') }} </span>
              <span class="black--text pa-4 pl-6 pb-4"> {{ $t('number3') }} </span>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </div>
  </v-sheet>
</template>

<script>
import IntroductoryBlog from '@/components/IntroductoryBlog.vue'
import IntroductoryBlue from '@/components/IntroductoryBlue.vue'

export default {
  componets: {
    IntroductoryBlog,
    IntroductoryBlue,
  },
  data() {
    return {

    }
  },
  head() {
    return {
      title: this.$t('legislation')
    }
  },
}
</script>


<style scoped>
  #color{
    color: #23eaa4;
  }
</style>