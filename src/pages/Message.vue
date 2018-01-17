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
            name: '系统通知',
            routerList: [
              {
                name: '通知列表',
                url: '/message/messageList'
              }
            ]
          }
        ]
      }
    }
  }
</script>
