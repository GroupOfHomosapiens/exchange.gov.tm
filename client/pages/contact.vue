<template>
  <v-container>
    <v-sheet
      rounded="lg"
      class="pa-2"
    >
      
      <v-row class="mb-3">
        <v-col 
          cols="12"
          md="6"
          align="center"
        >
          <span class="grey--text">{{ $t('openingHours') }}</span> <br>
          <span> {{ $t('monday') }} - {{ $t('friday') }} </span> <br>
          <span class="primary--text"> {{ $t('availableHours', { h1: '9-00', h2: '18-00' }) }} </span>
        </v-col>
        <v-col
          cols="12"
          md="6"
          align="center"
        >
          <span class="grey--text"> {{ $t('receptionDays') }} </span> <br>
          <span> {{ $t('monday') }} - {{ $t('thursday') }} </span> <br>
          <span class="primary--text"> {{ $t('availableHours', { h1: '9-00', h2: '17-00' }) }} </span> <br>
          <span> {{ $t('friday') }} </span> <br>
          <span class="primary--text"> {{ $t('availableHours', { h1: '9-00', h2: '13-00' }) }} </span>
        </v-col>
      </v-row>

      <v-expansion-panels
        popout
        focusable
        hover
      >
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('chairman') }}</v-expansion-panel-header>
          <v-expansion-panel-content align="center">
            <span class="grey--text">{{ $t('frontDesk') }}</span>
            <v-row class="d-flex justify-space-around mt-3">
              <div>{{ $t('phone') }}: <br> <a href="tel: +99312446630">+993 (12) 446630</a></div>
              <div>{{ $t('fax') }}: <br> <a href="tel: +99312446616">+993 (12) 446616</a></div>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('viceChairman') }}</v-expansion-panel-header>
          <v-expansion-panel-content align="center">
            <span class="grey--text">{{ $t('frontDesk') }}</span>
            <v-row class="d-flex justify-space-around mt-3">
              <div>{{ $t('phone') }}: <br> <a href="tel: +99312446101">+993 (12) 446101</a></div>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('departmentOfStockTradingOrganization') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row class="d-flex justify-space-around mt-3">
              <div align="center">
                <span class="grey--text">{{ $t('headOfDepartment') }} </span> <br>
                {{ $t('phone') }} <br>
                <a href="tel: +99312446116">+993 (12) 446116</a>
              </div>
              <div align="center">
                <span class="grey--text">{{ $t('broker') }}</span> <br>
                {{ $t('phone') }} <br>
                <a href="tel: +99312446275">+993 (12) 446275</a>
              </div>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('departmentOfAnalysisAndNewTechnologies') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row class="d-flex justify-space-around mt-3">
              <div align="center">
                <span class="grey--text">{{ $t('headOfDepartment') }} </span> <br>
                {{ $t('phone') }} <br>
                <a href="tel: +99312446020">+993 (12) 446020</a>
              </div>
              <div align="center">
                <span class="grey--text">{{ $t('deputyHeadOfDepartment') }}</span> <br>
                {{ $t('phone') }} <br>
                <a href="tel: +99312446015">+993 (12) 446015</a>
              </div>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('departmentOfRegistrationExchangeContracts') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row class="d-flex justify-space-around mt-3">
              <div align="center">
                <span class="grey--text">{{ $t('headOfDepartment') }} </span> <br>
                {{ $t('phone') }} <br>
                <a href="tel: +99312446030">+993 (12) 446030</a>
              </div>
              <div align="center">
                <span class="grey--text">{{ $t('deputyHeadOfDepartment') }}</span> <br>
                {{ $t('phone') }} <br>
                <a href="tel: +99312446260">+993 (12) 446260</a>
              </div>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('marketingDepartment') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row class="d-flex justify-space-around mt-3">
              <div align="center">
                <span class="grey--text">{{ $t('headOfDepartment') }} </span> <br>
                {{ $t('phone') }} <br>
                <a href="tel: +99312446055">+993 (12) 446055</a>
              </div>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('accounting') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row class="d-flex justify-space-around mt-3">
              <div align="center">
                <span class="grey--text">{{ $t('headOfDepartment') }} </span> <br>
                {{ $t('phone') }} <br>
                <a href="tel: +99312446070">+993 (12) 446070</a>
              </div>
              <div align="center">
                <span class="grey--text">{{ $t('deputyHeadOfDepartment') }}</span> <br>
                {{ $t('phone') }} <br>
                <a href="tel: +99312446071">+993 (12) 446071</a>
              </div>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('departmentOfSettlement') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row class="d-flex justify-space-around mt-3">
              <div align="center">
                <span class="grey--text">{{ $t('headOfDepartment') }} </span> <br>
                {{ $t('phone') }} <br>
                <a href="tel: +99312446080">+993 (12) 446080</a>
              </div>
              <div align="center">
                <span class="grey--text">{{ $t('deputyHeadOfDepartment') }}</span> <br>
                {{ $t('phone') }} <br>
                <a href="tel: +99312446037">+993 (12) 446037</a>
              </div>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('departmentOfEconomicAnalysis') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row class="d-flex justify-space-around mt-3">
              <div align="center">
                <span class="grey--text">{{ $t('headOfDepartment') }} </span> <br>
                {{ $t('phone') }} <br>
                <a href="tel: +99312446090">+993 (12) 446090</a>
              </div>
              <div align="center">
                <span class="grey--text">{{ $t('deputyHeadOfDepartment') }}</span> <br>
                {{ $t('phone') }} <br>
                <a href="tel: +99312446091">+993 (12) 446091</a>
              </div>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('departmentOfLaw') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row class="d-flex justify-space-around mt-3">
              <div align="center">
                <span class="grey--text">{{ $t('headOfDepartment') }} </span> <br>
                {{ $t('phone') }} <br>
                <a href="tel: +99312446040">+993 (12) 446040</a>
              </div>
              <div align="center">
                <span class="grey--text">{{ $t('deputyHeadOfDepartment') }}</span> <br>
                {{ $t('phone') }} <br>
                <a href="tel: +99312446047">+993 (12) 446047</a>
              </div>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <contacts class="mt-5 mb-2" />

    </v-sheet>
  </v-container>
</template>

<script>
import Contacts from '@/components/Contacts.vue'

export default {
  head() {
    return {
      title: this.$t('contact')
    }
  },
  components: {
    Contacts,
  }
}
</script>