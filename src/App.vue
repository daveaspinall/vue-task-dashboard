<template>
  <div id="app" class="o-page-wrapper">
    <navbar></navbar>
    <page></page>
    <modal></modal>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Page from './components/Page.vue'
import Modal from './components/Modal.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Page,
    Modal
  }
}
</script>

<style src="./styles/main.css"></style>
