<template>
  <div id="app">
    <FormComponent />
  </div>
</template>

<script>
import FormComponent from './components/FormComponent.vue'

export default {
  name: 'App',
  components: {
    FormComponent
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  list-style: none;
  color: inherit;
  text-decoration: none;
}
#app {
  background: #ddd;
  min-height: 100vh;
  display: grid;
  place-items: center;
}
</style>
