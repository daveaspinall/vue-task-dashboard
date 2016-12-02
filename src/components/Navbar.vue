<template>
  <header class="c-navbar">
    <div class="c-navbar__actions">
      <a href="#" class="c-navbar__actions__menu c-icon-link">
        <span class="c-icon-link__label">Menu</span>
        <div class="c-icon-link__icon" v-html="icons.menu"></div>
      </a>
      <a href="#" class="c-navbar__actions__search c-icon-link">
        <span class="c-icon-link__label">Search</span>
        <div class="c-icon-link__icon" v-html="icons.search"></div>
      </a>
    </div>

    <nav-links></nav-links>

    <div class="c-navbar__utils">
      <a href="#" class="c-navbar__utils__alerts c-icon-link">
        <span class="c-icon-link__label">Alerts (3)</span>
        <div class="c-icon-link__icon" v-html="icons.alert"></div>
      </a>
      <a href="#" class="c-navbar__utils__profile c-icon-link">
        <span class="c-icon-link__label">Profile</span>
        <div class="c-icon-link__icon" v-html="icons.profile"></div>
      </a>
    </div>
  </header>
</template>

<script>
  import NavLinks from '../components/NavLinks.vue'

  export default {
    name: 'navbar',
    components: {
      NavLinks
    },
    data () {
      return {
        icons: {
          menu: require('!!raw!../assets/icons/ic_menu.svg'),
          search: require('!!raw!../assets/icons/ic_search.svg'),
          alert: require('!!raw!../assets/icons/ic_notifications_none.svg'),
          profile: require('!!raw!../assets/icons/ic_account_circle.svg')
        }
      }
    }
  }
</script>
