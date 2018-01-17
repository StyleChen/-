<template>
  <Tabs value="0" @on-click="clickTab">
    <TabPane label="个人" name="0">
      <div style="overflow: hidden;padding-bottom: 1px;">
        <Input size="large" v-model="search" style="width: 300px;float: left;" placeholder="请输入手机号码或名称">
        <Button slot="prepend" icon="search"></Button>
        </Input>
      </div>
      <Table border :columns="columns" :data="datas" style="margin: 20px 0;"></Table>
      <Page :total="total" show-elevator></Page>
    </TabPane>
    <TabPane label="公司" name="1">
      <div style="overflow: hidden;padding-bottom: 1px;">
        <Input size="large" v-model="search" style="width: 300px;float: left;" placeholder="请输入手机号码或名称">
        <Button slot="prepend" icon="search"></Button>
        </Input>
      </div>
      <Table border :columns="columns" :data="datas" style="margin: 20px 0;"></Table>
      <Page :total="total" show-elevator></Page>
    </TabPane>
    <TabPane label="团队" name="2">
      <div style="overflow: hidden;padding-bottom: 1px;">
        <Input size="large" v-model="search" style="width: 300px;float: left;" placeholder="请输入手机号码或名称">
        <Button slot="prepend" icon="search"></Button>
        </Input>
      </div>
      <Table border :columns="columns" :data="datas" style="margin: 20px 0;"></Table>
      <Page :total="total" @on-change="changes" show-elevator></Page>
    </TabPane>
  </Tabs>
</template>

<script>
  import apis from '@/apis'
  export default {
    name: 'commission-list',
    data () {
      return {
        total: 1,
        search: '',
        cstate: 0,
        columns: [
          {
            title: '名称',
            key: 'name',
            align: 'center'
          },
          {
            title: '账号',
            key: 'duName',
            align: 'center'
          },
          {
            title: '联系方式',
            key: 'phone',
            align: 'center'
          },
          {
            title: '余额',
            key: 'sumFee',
            align: 'center'
          },
          {
            title: '操作',
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.$router.push(`/commission/${params.row.duid}`)
                    }
                  }
                }, '查看详情记录')
              ])
            }
          }
        ],
        datas: []
      }
    },
    methods: {
      FeeList (cstate = this.cstate, name = this.search, pageIndex = 1, pageSize = 10) {
        this.$http.post(apis.FeeList,
          { pageIndex: pageIndex, pageSize: pageSize, cstate: cstate, name: name })
          .then(res => res.json())
          .then((res) => {
            if (res.success) {
              this.total = res.result.total
              this.datas = res.result.data
            }
          })
      },
      clickTab (name) {
        this.search = ''
        this.cstate = name
        this.FeeList()
      },
      changes (val) {
        this.FeeList(this.cstate, this.search, val)
      }
    },
    watch: {
      search (val) {
        this.FeeList(this.cstate, val)
      }
    },
    mounted () {
      this.FeeList()
    }
  }
</script>

<style scoped>

</style>
