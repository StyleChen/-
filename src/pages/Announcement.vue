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
            name: '通告列表',
            routerList: [
              {
                name: '全部',
                url: '/announcement/all'
              },
              {
                name: '待审核',
                url: '/announcement/examine'
              },
              {
                name: '已发布',
                url: '/announcement/start'
              },
              {
                name: '进行中',
                url: '/announcement/having'
              },
              {
                name: '已结束',
                url: '/announcement/end'
              }
            ]
          },
          {
            name: '投诉列表',
            routerList: [
              {
                name: '未处理',
                url: '/announcement/untreated'
              },
              {
                name: '已处理',
                url: '/announcement/processed'
              }
            ]
          },
          {
            name: '分类列表',
            routerList: [
              {
                name: '通告分类',
                url: '/announcement/classList'
              }
            ]
          }
        ]
      }
    }
  }
</script>
