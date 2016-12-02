<template>
<nav class="c-navbar__nav">
  <ul class="c-navbar__nav__list">
    <li class="c-navbar__nav__list__item" v-for="(item, index) in routes">
      <nav-link :class="item.theme" :to="{ name: item.name }" :icon="item.meta.icon" :theme="item.meta.theme">{{ item.name }}</nav-link>
    </li>
  </ul>
</nav>
</template>

<script>
import routes from '../routes'
import NavLink from '../components/NavLink.vue'

export default {
  name: 'progress-bar',
  props: [
    'icon'
  ],
  data () {
    return {
      // remove the catch all route and return all routes
      routes: routes.slice(0, (routes.length - 1))
    }
  },
  components: {
    NavLink
  }
}
</script>
