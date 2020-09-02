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
        <li v-for="itme in category" class="category-item" @click="getProducts(itme.product_category)">
          <mt-button style="width:90%;  font-size: 13px;" type="primary">{{itme.product_category}}</mt-button></li>
      </ul>
    </div>

    <div class="pro-wrap">
      <ul
        class="pro-ul"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <li class="pro-item" v-for="item in products" @click="goDetailPage(item.product_rebate_url)">
          <div class="pro-msg">
            <h2 class="pro-name">{{item.product_name}}</h2>
            <dl>
              <dd>京东价：￥<span style="text-decoration:line-through;color:#666;">{{item.product_jd_price}}</span></dd>
              <dd>内购价：￥<span style="color:red;">{{item.product_token_price}}</span></dd>
            </dl>
          </div>
          <img class="lazy-img"  v-lazy.container="item.product_img_url">
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
        count: 0,
        nowPage: 1,
        loading: false,
        category: [],
        selectCategory: "",
        products:[],
        msg: 'Welcome to Your Vue.js App',
        searchValue: ''
      }
    },
    created: function () {
      this.getCategorys();
    },
    mounted: function () {
    },
    methods: {
      getCategorys(){
        const _this = this;
        this.axios.get(`${this.baseUrl}/api/category`)
          .then(function (response) {
            _this.category = response.data.data
            _this.selectCategory = response.data.data[0].product_category
            _this.getProducts(response.data.data[0].product_category,_this.nowPage);
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            // always executed
          });
      },
      getProducts(category,page = 1,type=1){
        const _this = this;
        this.axios.get(`${this.baseUrl}/api/getCategoryPro/${category}/${page}`)
          .then(function (response) {
            if(type===1){
              _this.products = response.data.data
              _this.count = response.data.count
            }
            if(type===2){
              _this.products = _this.products.concat(response.data.data)
            }
            _this.loading = false;
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            // always executed
          });
      },
      goDetailPage(href){
        location.href = href;
      },
      loadMore() {
        this.loading = true;
        this.nowPage++;
        if((this.nowPage-1)*10<this.count){
          this.getProducts(this.selectCategory,this.nowPage,2)
        }
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
