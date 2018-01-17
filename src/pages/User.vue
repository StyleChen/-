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
            name: '用户管理',
            routerList: [
              {
                name: '个人列表',
                url: '/user/personalList'
              },
              {
                name: '公司列表',
                url: '/user/companyList'
              },
              {
                name: '团队列表',
                url: '/user/teamList'
              },
              {
                name: '认证审核',
                url: '/user/examineList'
              }
            ]
          }
        ]
      }
    }
  }
</script>
