<template>
  <div id="app">
    <page-header></page-header>
    <router-view class="body"></router-view>
    <page-footer></page-footer>
    <scroll-top></scroll-top>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollTop from '@/components/ScrollTop'

export default {
  name: 'app',
  components: {
    pageHeader: Header,
    pageFooter: Footer,
    ScrollTop
  },
  beforeMount() {
    const { body } = document
    const WIDTH = 740
    const RATIO = 3
    const handler = () => {
      if (!document.hidden) {
        let rect = body.getBoundingClientRect()
        let isMobile = rect.width - RATIO < WIDTH
        this.toggleDevice({
          isMobile,
          height: window.innerHeight,
          width: window.innerWidth
        })
        this.toggleMenu(!isMobile)
      }
    }
    document.addEventListener('visibilitychange', handler)
    window.addEventListener('DOMContentLoaded', handler)
    window.addEventListener('resize', handler)
  },
  computed: {
    ...mapGetters({
      device: 'device',
      menu: 'menu'
    })
  },
  methods: {
    ...mapActions([
      'toggleDevice',
      'toggleMenu'
    ])
  }
}
</script>

<style lang="sass">
@import 'sass/_base';
@import 'sass/_styles';
@import 'sass/base/_helpers';
</style>
