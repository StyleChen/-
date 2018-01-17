<template>
  <div>
    <div style="overflow: hidden;padding-bottom: 1px;">
      <Input size="large" v-model="search" style="width: 300px;float: left;" placeholder="标题">
      <Button slot="prepend" icon="search"></Button>
      </Input>
    </div>
    <Table border :columns="columns" :data="datas" style="margin: 20px 0;"></Table>
    <Page :total="total" @on-change="changes" show-elevator></Page>
  </div>
</template>

<script>
  import apis from '@/apis'
  export default {
    name: 'information-list',
    data () {
      return {
        total: 1,
        search: '',
        nowPage: 1,
        columns: [
          {
            title: '标题',
            key: 'title',
            align: 'center'
          },
          {
            title: '描述',
            key: 'describe',
            align: 'center'
          },
          {
            title: '发布人',
            key: 'nickName',
            align: 'center',
            width: 135
          },
          {
            title: '时间',
            key: 'date',
            align: 'center',
            width: 135
          },
          {
            title: '操作',
            align: 'center',
            width: 172,
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.$http.post(apis.DynamicDelete, {hdid: params.row.objid})
                        .then(res => res.json())
                        .then((res) => {
                          if (res.success) {
                            this.$Message.success('删除成功')
                            this.DynamicList(this.search, this.nowPage)
                          }
                        })
                    }
                  }
                }, '删除'),
                h('Button', {
                  props: {
                    type: 'warning',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.$router.push({path: `/information/update/${params.row.objid}`})
                    }
                  }
                }, '修改'),
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.$router.push(`/information/${params.index}`)
                    }
                  }
                }, '查看')
              ])
            }
          }
        ],
        datas: []
      }
    },
    methods: {
      DynamicList (title = this.search, pageIndexs = 1, pageSizes = 10) {
        this.$http.post(apis.DynamicList, {pageIndex: pageIndexs, pageSize: pageSizes, title: title})
          .then(res => res.json())
          .then((res) => {
            if (res.success) {
              this.total = res.result.total
              this.datas = res.result.data
            }
          })
      },
      changes (val) {
        this.DynamicList(this.search, val)
        this.nowPage = val
      }
    },
    watch: {
      search (val) {
        this.DynamicList(val)
      }
    },
    mounted () {
      this.DynamicList()
    }
  }
</script>

<style scoped>

</style>
