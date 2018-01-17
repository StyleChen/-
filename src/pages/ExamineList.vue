<template>
  <div>
    <div style="overflow: hidden;padding-bottom: 1px;">
      <Input size="large" v-model="search" style="width: 300px;float: left;" placeholder="请输入账号或名称">
      <Button slot="prepend" icon="search"></Button>
      </Input>
    </div>
    <Table border :columns="columns" :data="datas" style="margin: 20px 0;"></Table>
    <Page :total="total" show-elevator @on-change="changes"></Page>
    <Modal v-model="pass" title="审核通过" @on-ok="okPass"
           @on-cancel="cancel">
      <p>经过仔细审核，确认通过</p>
    </Modal>
    <Modal v-model="reject" title="审核驳回" @on-ok="okReject"
           @on-cancel="cancel">
      <Input v-model="rejectReason" type="textarea" :rows="4" placeholder="请尽可能详细填写驳回理由..." />
    </Modal>
  </div>
</template>

<script>
  import apis from '@/apis'
  export default {
    name: 'examine-list',
    data () {
      return {
        search: '',
        pass: false,
        reject: false,
        rejectReason: '',
        total: 1,
        params: null,
        state: 0,
        columns: [
          {
            title: '名称',
            key: 'compay',
            align: 'center'
          },
          {
            title: '账号',
            key: 'name',
            align: 'center'
          },
          {
            title: '联系人',
            key: 'lxrname',
            align: 'center'
          },
          {
            title: '联系方式',
            key: 'phone',
            align: 'center'
          },
          {
            title: '公司性质',
            key: 'trade',
            align: 'center'
          },
          {
            title: '操作',
            key: 'name',
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.reject = true
                      this.params = params
                    }
                  }
                }, '驳回'),
                h('Button', {
                  props: {
                    type: 'warning',
                    size: 'small'
                  },
                  style: {
                    margin: '5px'
                  },
                  on: {
                    click: () => {
                      this.pass = true
                      this.params = params
                    }
                  }
                }, '通过'),
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    margin: '5px'
                  },
                  on: {
                    click: () => {
                      this.$router.push({path: `/user/examine/${params.row.duid}`})
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
      UserinfoList (name = this.search, pageIndexs = 1, pageSizes = 10, state = 1) {
        this.$http.post(apis.Compaylist, { state: state, pageIndex: pageIndexs, pageSize: pageSizes, name: name })
          .then(res => res.json())
          .then((res) => {
            if (res.success) {
              this.total = res.result.total
              this.datas = res.result.data
            }
          })
      },
      changes (val) {
        this.UserinfoList(this.search, val)
      },
      okPass () {
        this.$http.post(apis.UserCheck, { duid: this.params.row.duid, state: 6 })
          .then(res => res.json())
          .then((res) => {
            if (res.success) {
              this.$Message.success('操作成功')
              this.UserinfoList()
            }
          })
      },
      okReject () {
        if (this.rejectReason === '') {
          this.$Message.error('操作失败，理由不能为空')
        } else {
          this.$http.post(apis.UserCheck, { duid: this.params.row.duid, state: 3, content: this.rejectReason })
            .then(res => res.json())
            .then((res) => {
              if (res.success) {
                this.$Message.success('操作成功')
                this.UserinfoList()
              }
            })
        }
      },
      cancel () {
        return false
      }
    },
    watch: {
      search (val) {
        this.UserinfoList(val)
      }
    },
    mounted () {
      this.UserinfoList()
    }
  }
</script>

<style scoped>

</style>
