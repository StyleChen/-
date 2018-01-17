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
            name: '资讯管理',
            routerList: [
              {
                name: '首页banner',
                url: '/information/hbanner'
              },
              {
                name: '资讯banner',
                url: '/information/zbanner'
              },
              {
                name: '通告banner',
                url: '/information/tbanner'
              },
              {
                name: '资讯发布',
                url: '/information/release'
              },
              {
                name: '资讯列表',
                url: '/information/informationList'
              }
            ]
          }
        ]
      }
    }
  }
</script>
