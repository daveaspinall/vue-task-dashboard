<template>
  <router-link :class="linkClass" v-bind:to="to" active-class="c-navbar__nav__list__item__link--active">
    <span class="c-icon-link__label"><slot></slot></span>
    <div class="c-icon-link__icon" v-html="rawIcon"></div>
  </router-link>
</template>

<script>
  export default {
    props: {
      to: Object,
      icon: String,
      theme: String
    },
    data: function () {
      // disable all other loaders (https://webpack.github.io/docs/loaders.html#loader-order)
      return {
        rawIcon: require(`!!raw!../assets/icons/${this.icon}`),
        linkClass: (this.theme !== undefined) ? `c-navbar__nav__list__item__link u-theme--${this.theme}` : `c-navbar__nav__list__item__link`
      }
    }
  }
</script>
