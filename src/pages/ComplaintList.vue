<template>
  <div>
    <div>
     <!-- <div style="overflow: hidden;padding-bottom: 1px;">
        <Input size="large" v-model="search" style="width: 300px;float: left;" placeholder="请输入手机号码或名称">
        <Button slot="prepend" icon="search"></Button>
        </Input>
      </div>-->
      <Table border :columns="columns" :data="datas" style="margin: 20px 0;"></Table>
      <Page :total="total" @on-change="changes" show-elevator></Page>
    </div>
  </div>
</template>

<script>
  import apis from '@/apis'
  export default {
    name: 'announcement-list',
    data () {
      return {
        total: 100,
        state: 1,
        columns: [
          {
            title: '订单号',
            key: 'number',
            align: 'center'
          },
          {
            title: '名称',
            key: 'nickName',
            align: 'center'
          },
          {
            title: '标题',
            key: 'title',
            align: 'center'
          },
          {
            title: '状态',
            key: 'stateName',
            width: 90,
            align: 'center'
          },
          {
            title: '金额',
            key: 'fee',
            width: 90,
            align: 'center'
          },
          {
            title: '发布时间',
            key: 'date',
            align: 'center'
          },
          {
            title: '开始时间',
            key: 'btime',
            align: 'center'
          },
          {
            title: '结束时间',
            key: 'etime',
            align: 'center'
          },
          {
            title: '操作',
            key: 'name',
            width: 100,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    margin: '5px 0'
                  },
                  on: {
                    click: () => {
                      this.$router.push({
                        path: `/announcement/${params.row.number}`,
                        query: {
                          complaint: '2'
                        } })
                    }
                  }
                }, '查看详情')
              ])
            }
          }
        ],
        datas: []
      }
    },
    methods: {
      newPath (path) {
        if (path === '/announcement/untreated') {
          this.state = 1
        } else {
          this.state = 2
        }
        this.SysTaskList()
      },
      SysTaskList (pageIndex = 1, pageSize = 10) {
        this.$http.post(apis.SysTaskList, { pageIndex: pageIndex, pageSize: pageSize, state: this.state })
          .then(res => res.json())
          .then((res) => {
            if (res.success) {
              this.total = res.result.total
              this.datas = res.result.data
            }
          })
      },
      changes (val) {
        this.SysTaskList(val)
      }
    },
    watch: {
      '$route' (to, from) {
        const path = to.path
        this.newPath(path)
      }
    },
    mounted () {
      const path = this.$route.path
      this.newPath(path)
    }
  }
</script>

<style scoped>

</style>
