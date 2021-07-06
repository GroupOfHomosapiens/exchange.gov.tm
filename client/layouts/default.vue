<template>
  <v-app>
    
    <v-navigation-drawer
      app
      v-model="drawer"
      temporary   
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group>
          <v-list-item
            v-for="(category, i) in categories"
            :key="i"
          >
            <v-list-item-title>
              {{ $t(category.name) }}
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="white"
      elevate-on-scroll
      height="60"
    >
      <v-container class="d-flex align-center">

        <v-app-bar-nav-icon 
          class="d-md-none" 
          @click.stop="drawer = !drawer"
        />

        <v-spacer class="d-md-none"></v-spacer>
        
        <nuxt-link 
          :to="localePath('/')"
          class="mr-md-15"
        >
          <v-img 
            src="/exchange.svg"
            height="46"
            width="38"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="primary lighten-2"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </nuxt-link>

        <div class="d-none d-md-block">
          <v-btn
            exact-active-class="primary--text"
            :to="category.to"
            plain
            v-for="(category, i) in categories"
            :key="i"
          >
            {{ $t(category.name) }}
          </v-btn>

          <v-menu
            open-on-hover
            bottom
            offset-y
            transition="slide-y-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                plain
                v-bind="attrs"
                v-on="on"
              >
                {{ $t('others') }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(category, i) in otherCategories"
                :key="i"
                :to="localePath(category.to)"
              >
                <v-list-item-title>
                  {{ $t(category.name) }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>

        <v-spacer></v-spacer>

        <v-menu
          offset-y 
          open-on-hover
          open-on-click
          transition="slide-y-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              outlined
              v-bind="attrs"
              v-on="on"
            >
              {{ $i18n.locale }}
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item-group
              color="primary"
            >
              <v-list-item
                v-for="(lang, i) in $i18n.locales" 
                :key="i"
                :to="switchLocalePath(lang)"
              >
                <v-list-item-title>
                  <center>{{ lang.toUpperCase() }}</center>
                </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>

      </v-container>
    </v-app-bar>

    <v-main style="background-color: #eee;">
      <router-view :key="$route.path" />
    </v-main>

    <v-footer
      color="primary darken-2"
      class="white--text footer"
    >
      <v-container>
        <v-row 
          no-gutters
          class="pa-3"
        >
          <v-col 
            cols="12"
            md="4"
            class="d-flex mb-2 justify-center justify-md-end"
          >
            <div>
              <v-img
                src="/exchange.svg"
                height="118"
                width="98"
                class="mt-1"
              >
                <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-2"
                  ></v-progress-circular>
                </v-row>
              </template>
              </v-img>
            </div>
          </v-col>

          <v-col
            cols="12"
            sm="6"
            md="4"
            class="mt-4 mt-md-0"
          >
            <center>
              <h3 class="mb-1">{{ $t('pages') }}</h3>
              <div 
                v-for="(category, i) in categories"
                :key="i"
              >
                <nuxt-link
                  class="hover mt-1"
                  :to="localePath(category.to)"
                >
                  {{ $t(category.name) }}
                </nuxt-link>
              </div>
            </center>
          </v-col>

          <v-col
            cols="12"
            sm="6"
            md="4"
            class="mt-4 mt-md-0"
          >
            <h3 class="mb-1">{{ $t('about') }}</h3>
            <h4>E-mail: </h4>
            <a href="mailto: info@exchange.gov.tm">info@exchange.gov.tm</a> <br> 
            <a href="mailto: brokers@exchange.gov.tm">brokers@exchange.gov.tm</a> <br>
            <h4 class="d-inline">{{ $t('tel') }}</h4>
            <a href="tel: +99312446015">+99312446015</a>
          </v-col>
        </v-row>

        <v-divider 
          dark 
          class="my-2"
        />

        <center>&copy;{{ new Date().getFullYear() }} {{ $t('rightsReserved') }}</center>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      categories: [
        { name: 'news', to: '/news' },
        { name: 'legislation', to: '/legislation' },
        { name: 'multimedia', to: '/multimedia' },
      ],
      otherCategories: [
        { name: 'contractsRegistration', to: '/contract' },
        { name: 'financeMonitoring', to: '/financial-monitoring' },
        { name: 'address', to: '/contact' },
        { name: 'about', to: '/about' },
      ]
    }
  }
}
</script>

<style>
  .footer a {
    color: white;
    text-decoration: none;
  } 
  .footer a:hover {
    animation: 1s foot forwards;
  }
  @keyframes foot {
    to {
      color: aqua;
    }
  }
</style>
