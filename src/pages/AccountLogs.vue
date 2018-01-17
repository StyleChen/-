<template>
  <div>
    <div style="overflow: hidden;padding-bottom: 1px;">
      <Input size="large" v-model="search" style="width: 300px;float: left;" placeholder="请输入操作类型">
      <Button slot="prepend" icon="search"></Button>
      </Input>
    </div>
    <Table border :columns="columns" :data="datas" style="margin: 20px 0;"></Table>
    <Page :total="total" show-elevator @on-change="change"></Page>
  </div>
</template>

<script>
  import apis from '@/apis'
  export default {
    name: 'account-logs',
    data () {
      return {
        search: '',
        modal: false,
        total: 100,
        columns: [
          {
            title: '名称',
            key: 'name',
            width: 100,
            align: 'center'
          },
          {
            title: '真实名称',
            key: 'realName',
            width: 100,
            align: 'center'
          },
          {
            title: '时间',
            key: 'date',
            width: 150,
            align: 'center'
          },
          {
            title: '操作',
            key: 'content',
            align: 'center'
          }
        ],
        datas: []
      }
    },
    methods: {
      Log (pageIndexs = 1, types = this.search, pageSizes = 10) {
        this.$http.post(apis.Log, { pageIndex: pageIndexs, type: types, pageSize: pageSizes })
          .then(res => res.json())
          .then((res) => {
            if (res.success) {
              this.total = res.result.total
              this.datas = res.result.data
            }
          })
      },
      change (val) {
        this.Log(val, this.search)
      }
    },
    watch: {
      search (val) {
        this.Log(1, val)
      }
    },
    mounted () {
      this.Log()
    }
  }
</script>

<style scoped>

</style>
