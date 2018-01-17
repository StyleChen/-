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
            name: '佣金管理',
            routerList: [
              {
                name: '佣金管理',
                url: '/commission/commissionList'
              },
              {
                name: '充值记录',
                url: '/commission/recharge'
              },
              {
                name: '提现记录',
                url: '/commission/withdrawals'
              }
            ]
          }
        ]
      }
    }
  }
</script>
