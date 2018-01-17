<template>
  <Row>
    <Col span="5">
    <ul class="aside-box">
      <li class="li-box" v-for="(title, index) in titleData" :key="index">
        <div class="bg-box" @click="rotate(index)">
          <span>{{title.name}}</span>
          <Icon type="chevron-up" :class="['icon-arrow-down', {'active':rotateBool[index]}]"></Icon>
        </div>
        <ul :class="['children-ul',{'active':rotateBool[index]}]" ref="children-ul">
          <router-link :to="item.url" v-for="item in title.routerList" tag="li" :key="item.url">{{item.name}}</router-link>
        </ul>
      </li>
    </ul>
    </Col>

    <Col span="19">
    <div class="layout-content-main">
      <router-view class=""></router-view>
    </div>
    </Col>
  </Row>
</template>
<script>
  export default {
    props: ['titleData'],
    data () {
      return {
        rotateBool: []
      }
    },
    methods: {
      rotate (index) {
        const rotateBool = []
        this.rotateBool.map((val, key) => {
          if (key === index) {
            rotateBool.push(!val)
          } else {
            rotateBool.push(val)
          }
          return rotateBool
        })
        this.rotateBool = rotateBool
      }
    },
    mounted () {
      this.titleData.map(() => this.rotateBool.push(false))
    }
  }
</script>

<style>
  .ivu-page {
    float: right;
  }
  .layout-content-main {
    background: #fff;
    margin-left: 10px;
    padding:20px 20px 70px;
    min-height: calc(100vh - 100px);
  }
  .aside-box {
    min-height: calc(100vh - 100px);
    background: #fff;
  }
  .bg-box {
    height: 45px;
    text-align: left;
    background-color: #f2f2f2;
    font-size: 14px;
    color: #333;
    border-left: 4px solid var(--theme);
    line-height: 45px;
    padding-left: 12px;
    position: relative;
  }
  .icon-arrow-down {
    float: right;
    position: relative;
    z-index: 11;
    text-align: center;
    line-height: 45px;
    width: 50px;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    -ms-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;
  }
  .icon-arrow-down.active {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  .children-ul {
    /*position: absolute;*/
    /*z-index:2;*/
    /*top: 45px;*/
    /*left: 0;*/
    width:100%;
    text-align: left;
    overflow: hidden;
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    -ms-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;
  }
  .children-ul.active {
    height: 0;
  }
  .children-ul li {
    padding-left: 30px;
    color: #666;
    height: 45px;
    line-height: 45px;
  }
  .children-ul li.router-link-active {
    color: var(--theme);
  }
</style>
