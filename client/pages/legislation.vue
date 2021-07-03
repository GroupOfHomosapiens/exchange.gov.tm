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

    <!-- <legislation-blue 
      :title="$t('arbitrationTeam')"
      :texts="translate(text)"
    /> -->

    <!-- <div style="background-color: rgb(7,33,91)">
      <h2 class="primary--text py-10 pa-2">
        <center>{{ $t('arbitrationTeam') }}</center>
      </h2>

      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="(text, i) in texts"
          :key="text"
          class="white--text"
        >
          <h3 >
            <center class="primary--text"> {{ i + 1 }} </center>
          </h3>
          <div class="px-5 py-5">
            <center class="text-justify"> {{ text }} </center>
          </div>
        </v-col>
      </v-row>
    </div> -->
    <div style="background-color: cyan">
      <h2 class="primary--text my-10">
          <center>{{ $t('workOrder') }}</center>
      </h2>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          v-for="(work, i) in works"
          :key="work"
        >
          <div class="px-5 py-2">
            <v-banner>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus nec sem id malesuada.
    Curabitur lacinia sem et turpis euismod, eget elementum ex pretium.
            <img style="float:right; margin: " src="/outline_download_black_24dp.png" alt="">
    <template v-slot:actions>
                  <v-btn
              color="primary"
              block
              outlined
              class="mt-5"
            >
            <v-icon left>mdi-file-download-outline</v-icon>
              {{ $t('downloadFile') }}
            </v-btn>
    </template>
  </v-banner>
           <!--  <v-btn
              color="primary"
              block
              outlined
              class="mt-5"
            >
            <v-icon left>mdi-file-download-outline</v-icon>
              {{ $t('downloadFile') }}
            </v-btn> -->
          </div>
        </v-col>
      </v-row>
    <!--   <v-divider style="background-color: rgb(7,33,91)" class="my-8"></v-divider> -->
    </div>
    <div>
      <h2 class="primary--text my-10">
          <center>{{ $t('commands') }}</center>
      </h2>
      <v-row no-gutters>
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="(command, i) in commands"
          :key="command"
        >
          <div class="px-5 py-2">
            <center class="text-justify"> {{ command }} </center>
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
      </v-row>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          v-for="(command1, i) in commands1"
          :key="command1"
        >
          <div class="px-5 py-5">
            <center class="text-justify"> {{ command1 }} </center>
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
      </v-row>
      <v-divider style="background-color: rgb(7,33,91)" class="my-8"></v-divider>
    </div>
    <div>
      <h2 class="primary--text my-10">
          <center>{{ $t('principles') }}</center>
      </h2>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          v-for="(principle, i) in principles"
          :key="principle"
        >
          <div class="px-5 py-2">
            <center class="text-justify"> {{ principle }} </center>
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
      </v-row>
    </div>

    <introductory-blue
      :title="$t('internalSupervisionNormalize')"
      :text="$t('legislation2')"
    />

    <introductory-blue
      :title="$t('consularTitle')"
      :text="$t('legislation2')"
      backgroundSkew="transform: skewY(5deg);"
      fontSkew="transform: skewY(-5deg);"
      
    />
    
  </v-sheet>
</template>

<script>
import IntroductoryBlog from '@/components/IntroductoryBlog.vue'
import IntroductoryBlue from '@/components/IntroductoryBlue.vue'
import LegislationBlue from '@/components/LegislationBlue.vue'

export default {
  componets: {
    IntroductoryBlog, IntroductoryBlue, LegislationBlue
  },
  data() {
    return {
      // texts: [
      //   { text_tk: 'Birža söwdalarynda baglaşylan geleşikleriň hereketini ýatyrmak', text_ru: 'Аннулирование действия сделок, заключенных на биржевых торгах', text_eng: 'Cancellation of validity of bargains concluded at exchange auctions' },
      //   { text_tk: 'Biržada hasaba alnyp, zerurlygy bolmadyk şertnamalary ýatyrmak', text_ru: 'Аннулирование зарегистрированных и невостребованных на Бирже договоров', text_eng: 'Cancellation of contracts registered and not claimed at the Exchange' },
      //   { text_tk: 'Birža geleşikleri we birža söwdasynyň meseleleri boýunça jedelleri seretmek',text_ru: 'Рассмотрение споров, по биржевым сделкам и вопросам биржевой торговли', text_eng: 'Consideration of disputes on exchange bargains and exchange trade issues' },
      //   { text_tk: 'Şertnamalar baglaşylanda, olara üýtgetmeler girizilende we olar bozulanda ýüze çykýan meselelere seretmek',text_ru: 'Рассмотрение споров по договорам, при их заключении, внесении изменений и расторжении', text_eng: 'Consideration of disputes on contracts upon their conclusion, modification and cancellation' },
      //   { text_tk: 'Topar kabul edilen karary üýtgetmäge, ýatyrmaga we dikeltmäge haklydyr',text_ru: 'Комиссия вправе изменить, отменить и восстановить принятое решение', text_eng: 'Commission has the right to change, cancel and restore the decision made' },
      //   { text_tk: 'Birža söwdasynyň gatnaşyjylary tarapyndan ýol berlen bozulmalara seretmek',text_ru: 'Рассмотрение нарушений допущенных участниками биржевой торговли', text_eng: 'Consideration of violations committed by participants of exchange trade' },
      // ],
      works: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel, provident magnam harum laboriosam fugiat quisquam ducimus soluta iusto odio officiis nisi iste illo laborum temporibus neque eum recusandae! At?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel, provident magnam harum laboriosam fugiat quisquam ducimus soluta iusto odio officiis nisi iste illo laborum temporibus neque eum recusandae! At?'
      ],
      commands: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel, provident magnam harum laboriosam fugiat quisquam ducimus soluta iusto odio officiis nisi iste illo laborum temporibus neque eum recusandae! At?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel, provident magnam harum laboriosam fugiat quisquam ducimus soluta iusto odio officiis nisi iste illo laborum temporibus neque eum recusandae! At?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel, provident magnam harum laboriosam fugiat quisquam ducimus soluta iusto odio officiis nisi iste illo laborum temporibus neque eum recusandae! At?'
      ],
      commands1: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel, provident magnam harum laboriosam fugiat quisquam ducimus soluta iusto odio officiis nisi iste illo laborum temporibus neque eum recusandae! At?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel, provident magnam harum laboriosam fugiat quisquam ducimus soluta iusto odio officiis nisi iste illo laborum temporibus neque eum recusandae! At?',
      ],
      principles: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel, provident magnam harum laboriosam fugiat quisquam ducimus soluta iusto odio officiis nisi iste illo laborum temporibus neque eum recusandae! At?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel, provident magnam harum laboriosam fugiat quisquam ducimus soluta iusto odio officiis nisi iste illo laborum temporibus neque eum recusandae! At?'
      ],
    }
  },
  head() {
    return {
      title: this.$t('legislation')
    }
  },
  // methods: {
  //   translate(obj) {
  //     let lang = this.$i18n.locale;
  //     if ( lang === 'en' ) {
  //       return obj.text_en;
  //     } else if ( lang === 'ru' ) {
  //       return obj.text_ru;
  //     } else {
  //       return obj.text_tk;
  //     }
  //   }
  // },
}
</script>
