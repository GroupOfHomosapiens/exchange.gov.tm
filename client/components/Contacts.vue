<template>
  <v-row>
    <v-col
      cols="12"
      sm="4"
      align="center"
    >
      <v-icon
        size="75"
        color="primary"
      >
        mdi-phone-outline
      </v-icon> <br>

      <span class="grey--text">{{ $t('tel') }}</span> <br>
      <a href="tel: +99312446015">+993 (12) 446015</a>
    </v-col>

    <v-col
      cols="12"
      sm="4"
      align="center"
    >
      <v-icon
        size="75"
        color="primary"
      >
        mdi-email-outline
      </v-icon> <br>

      <span class="grey--text">E-mail:</span> <br>
      <a href="mailto: info@exchange.gov.tm">info@exchange.gov.tm</a> <br>
      <a href="mailto: brokers@exchange.gov.tm">brokers@exchange.gov.tm</a>
    </v-col>

    <v-col
      cols="12"
      sm="4"
      align="center"
    >
      <v-icon
        size="75"
        color="primary"
      >
        mdi-map-marker-outline
      </v-icon> <br>

      <span class="grey--text">{{ $t('address') }}:</span> <br> 
      <a href="tel: +99312446015">+993 (12) 446015</a>
    </v-col>
  </v-row>
</template>