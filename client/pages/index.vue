<template>
  <v-row>
    <v-col 
      cols="12"
      md="9"
    >
      <v-sheet
        rounded="lg"
        class="pa-1"
        height="400"
      >

        <!-- <h3 class="d-flex justify-center">{{ $t('advertisement') }}</h3>

        <v-window
          v-model="onboarding"
          vertical
        >
          <v-window-item
            v-for="(item, i) in 3"
            :key="i"
          >
            <v-card
              color="grey"
              height="200"
            >
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                <h1
                  style="font-size: 5rem;"
                  class="white--text"
                >
                  Slide {{ i + 1 }}
                </h1>
              </v-row>
            </v-card>
          </v-window-item>
        </v-window>

        <v-item-group
          v-model="onboarding"
          class="text-center"
          mandatory
        >
          <v-item
            v-for="n in 3"
            :key="`btn-${n}`"
            v-slot="{ active, toggle }"
          >
            <v-btn
              :input-value="active"
              icon
              @click="toggle"
            >
              <v-icon>mdi-record</v-icon>
            </v-btn>
          </v-item>
        </v-item-group>

      <div class="text-justify">Biržanyň işinde sanly ulgamy ornaşdyrmak maksady bilen, resminama dolanyşygyny elektron görnüşine geçirilýändigi sebäpli, Birža tabşyrylýan şertnamalary deslapdan ylalaşmak üçin resminamalary WORD  görnüşinde aşakdaky görkezilen elektron salgylaryna ibermegiňizi haýyş edýäris:</div>
      <div class="text-justify">Maliýe gözegçiligi bölümi boýunça - maliye_gozegcilik@exchange.gov.tm
Hasaba alyş bölümi boýunça- hasaba_alys@exchange.gov.tm
Baha seljeriş we bazary öwreniş bölümi boýunça -
baha_seljeris@exchange.gov.tm
Şertnamalaryň taslamalary degişli bölümler tarapyndan seredilip, berilen bellikler Siziň elektron poçtaňyza yzyna gaýtarylar.</div> -->
      </v-sheet>
    </v-col>
    <v-col 
      cols="0"
      md="3"
    >
      <v-sheet
        class="pa-2"
        rounded="lg"
      >
        <v-row no-gutters v-for="item in 4" :key="item" class="my-2">
          <a href="/">
            <v-img
              src="/england.jpg"
              height="64"
              width="64"
            ></v-img>
          </a>
          <div class="ml-2">
          <h5 class="primary--text text-truncate">Lorem ipsum is dummy</h5>

          <h6 class="mt-1 grey--text">27.06.2021</h6>
          </div>
        </v-row>
        <v-btn block elevation="0" small color="primary" outlined>
          Read More <v-icon small right> mdi-chevron-right </v-icon>
        </v-btn>
        
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      onboarding: 0
    }
  }
}
</script>
