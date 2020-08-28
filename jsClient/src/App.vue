<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {

  }

  body, h1, h2, h3, h4, h5, h6, hr, p, blockquote,
  dl, dt, dd, ul, ol, li,
  pre,
  fieldset, lengend, button, input, textarea,
  th, td,
  div, span {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  fieldset, lengend, button, input, textarea, a {
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }



  ul {
    list-style: none;
  }


</style>
