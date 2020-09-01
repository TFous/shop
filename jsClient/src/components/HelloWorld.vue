<template>
  <div class="page-wrap">
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


    <div>
      <ul class="category-ul">
        <li v-for="itme in category" class="category-item"><mt-button style="width:90%;  font-size: 13px;
" type="primary">{{itme}}</mt-button></li>
      </ul>
    </div>

    <div class="pro-wrap">
      <ul
        class="pro-ul"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <li class="pro-item" v-for="item in list2">
          <div class="pro-msg">
            <h2 class="pro-name">华帝（VATTI）i11149+52B+13030 油烟机 侧吸式抽油烟机燃气灶具消毒柜厨房三件套 19瞬吸大吸力(天然气)</h2>
            <dl>
              <dd>京东价：￥<span style="text-decoration:line-through;color:#666;">1111</span></dd>
              <dd>内购价：￥<span style="color:red;">8888</span></dd>
            </dl>
          </div>
          <img class="lazy-img"  v-lazy.container="item">
        </li>
      </ul>
    </div>


    <div class="footer">
      注意事项：
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        category: ["燃气灶", "燃气灶", "燃气灶", "燃气灶", "燃气灶","燃气灶","燃气灶","燃气灶",9,0],
        list: ["燃气灶", "燃气灶", "燃气灶", "燃气灶", "燃气灶","燃气灶","燃气灶","燃气灶",9,0],
        list2: ["http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg",
          "http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg",
          "http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg",
          "http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg",
          "http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg",
        ],
        msg: 'Welcome to Your Vue.js App',
        searchValue: ''
      }
    },
    create: function () {
    },
    mounted: function () {
    },
    methods: {
      loadMore() {
        this.loading = true;
        setTimeout(() => {
          let last = this.list2[this.list2.length - 1];
          for (let i = 1; i <= 10; i++) {
            this.list2.push(last);
          }
          this.loading = false;
        }, 2500);
      }
    }


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page-wrap{
    background: #e9e9e9;
  }
  .mint-searchbar1 {
    height: 44px;
  }
  .category-ul{
    width: 100%;
    overflow: hidden;
  }

.category-item{
  width:20%;
  float: left;
  text-align: center;
  margin:6px 0px;
}

.pro-wrap{
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.pro-ul{
  width: 100%;
  overflow: hidden;
}
.pro-msg{
  padding:6px 2px;
  width:176px;
  float: right;
}
.pro-item{
  background: #fff;
  margin:6px 0px;
  height: 170px;
}
.lazy-img{
  width: 170px;
}
.pro-name{
  line-height: 18px;
  overflow: hidden;
  font-size: 14px;
  height: 90px;
  font-weight: normal;
}
  .pro-item dl{
    margin-top: 6px;
  }
.pro-item dl dd{
  font-size: 14px;
  font-weight: 700;
}

  .wrap {
    height: 200px;
  }

  .mint-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 6px;
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
