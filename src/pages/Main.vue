<template>
  <div>
    <nav class="nav">
      <div class="wrap">
        <img src="../assets/images/logo.png" alt="" class="logo">
        <Button icon="reply" type="warning" style="float: right;margin-top: 15px;" @click="$router.back(-1)">返回</Button>
        <ul class="nav-bar">
          <router-link tag="li" to="/account">账户管理</router-link>
          <router-link tag="li" to="/user">用户管理</router-link>
          <router-link tag="li" to="/announcement">通告管理</router-link>
          <router-link tag="li" to="/commission">佣金管理</router-link>
          <router-link tag="li" to="/information">资讯管理</router-link>
          <router-link tag="li" to="/message">系统通知</router-link>
        </ul>
      </div>
    </nav>
    <div class="wrap">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import apis from '@/apis'
export default {
  beforeCreate () {
    // 权限判断
    this.$http.post(apis.Menu, { huid: sessionStorage.id }).then(v => v.json())
      .then((vs) => {
        if (vs.success) {
          const result = vs.result
          for (let i = 0; i < result.length; i += 1) {
            if (result[i].isAuth === 1 && result[i].url === '/admin') {
              return false
            }
          }
          for (let i = 0; i < result.length; i += 1) {
            if (result[i].isAuth === 1) {
              this.$router.push(result[i].url)
              location.reload()
              break
            }
          }
        }
        return true
      })
  }
}
</script>

<style>
body {
  background: var(--grey-bg);
}
.wrap {
  width: 1200px;
  margin: 0 auto;
}
.nav {
  background: var(--theme);
  height: 60px;
  margin-bottom: 10px;
}
.nav .logo{
  margin-top: 10px;
  float: left;
}
.nav-bar {
  display: flex;
  margin-left: 260px;
  justify-items: center;
  align-content: flex-start;
}
.nav-bar li {
  color: #ffffff;
  font-size: 18px;
  background: var(--theme);
  height: 60px;
  line-height: 60px;
  margin-right: 20px;
  padding: 0 10px;
}
.nav-bar .router-link-active {
  background: #c5020f;
}
.nav-bar__link{
  height: 60px;
  width: 100px;
  float: left;
  line-height: 60px;
  text-align: center;
  font-size: 16px;
  color: #fff;
}
.ivu-input {
  background: #FFFFFF;
}
</style>
