<template>
  <aside-main :titleData="titleData"></aside-main>
</template>

<script>
  import AsideMain from '@/components/AsideMain'

  export default {
    components: { AsideMain },
    data () {
      return {
        titleData: [
          {
            name: '账户管理',
            routerList: [
              {
                name: '管理员列表',
                url: '/account/accountList'
              },
              {
                name: '操作日志',
                url: '/account/accountLogs'
              },
              {
                name: '修改密码',
                url: '/account/updatepassword'
              }
            ]
          }
        ]
      }
    }
  }
</script>
