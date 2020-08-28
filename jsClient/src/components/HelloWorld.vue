<template>
  <div class="hello">
    <div class="mint-searchbar1">
      <mt-search
        cancel-text="取消"
        placeholder="搜索"
        :value.sync="searchValue">
      </mt-search>
    </div>
    <div class="page-swipe">
      <mt-swipe :auto="0">
        <mt-swipe-item class="slide1">1</mt-swipe-item>
        <mt-swipe-item class="slide2">2</mt-swipe-item>
        <mt-swipe-item class="slide3">3</mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      searchValue: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mint-searchbar1{
  height: 44px;
}
.wrap{
  height: 200px;
}
.mint-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
  overflow: hidden;
}
.mint-swipe-item {
  line-height: 200px;
}
.slide1 {
  background-color: #0089dc;
  color: #fff;
}
.slide2 {
  background-color: #ffd705;
  color: #000;
}
.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
</style>
