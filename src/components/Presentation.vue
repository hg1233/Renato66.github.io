<template>
  <v-container>
    <v-layout>
      <v-flex class="primary--text">
        <h2 class="primary--text display-3 font-weight-thin">
          {{ $t('about.title') }}
        </h2>
      </v-flex>
    </v-layout>
    <v-layout class="grey--text text--darken-2 subheading">
      <v-flex xs12 class="pt-2">
        <p>
          {{ $t('about.paragraph.1')}}
        </p>
        <p>
          {{ $t('about.paragraph.2')}} <a href="#work" class="primary--text">Boxnet</a>
        </p>
        <p>
          {{ $t('about.paragraph.3')}}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm4 class="text-xs-center pa-4" v-for="quote in quotes" :key="quote.id">
        <img :src="quote.img" :alt="quote.id">
        <h4 class="primary--text text--darken-2 display-1">{{ $t(`about.quotes.${quote.id}.title`) }}</h4>
        <h5 class="grey--text text--darken-2 title pt-2 font-weight-light" v-html="$t(`about.quotes.${quote.id}.description`)"></h5>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      quotes: [
        {
          id: 'programming',
          img: '/img/programmer.png',
          author: 'John Johnson'
        },
        {
          id: 'creativity',
          img: '/img/brain.png',
          author: 'Maya Angelou'
        },
        {
          id: 'inovation',
          img: '/img/rocket.png',
          autor: 'S. Brown'
        }
      ]
    }
  }
}
</script>

<style>
</style>
