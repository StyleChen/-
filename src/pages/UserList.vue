<template>
  <div>
    <div style="overflow: hidden;padding-bottom: 1px;">
      <Input size="large" v-model="search" style="width: 300px;float: left;" placeholder="请输入账号或名称">
      <Button slot="prepend" icon="search"></Button>
      </Input>
    </div>
    <Table border :columns="columns" :data="datas" style="margin: 20px 0;"></Table>
    <Page :total="total" show-elevator @change="changes"></Page>
    <Modal title="发送消息" v-model="send" @on-ok="sendMsg" @on-cancel="send=false">
      <Form :model="formItem" :label-width="80">
        <formItem label="标题">
          <Input v-model="formItem.title" />
        </formItem>
        <formItem label="内容">
          <Input v-model="formItem.content" />
        </formItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
  import apis from '@/apis'
  export default {
    name: 'personal-list',
    data () {
      return {
        search: '',
        send: false,
        formItem: {
          duid: '',
          title: '',
          content: ''
        },
        total: 1,
        state: 0,
        columns: [
          {
            title: '名称',
            key: 'Dmh_name',
            align: 'center'
          },
          {
            title: '账号',
            key: 'name',
            align: 'center'
          },
          {
            title: '联系方式',
            key: 'phone',
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
                    type: 'warning',
                    size: 'small'
                  },
                  style: {
                    margin: '5px'
                  },
                  on: {
                    click: () => {
                      this.send = true
                      this.formItem.duid = params.row.duid
                    }
                  }
                }, '发送消息'),
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      if (this.state === 0) {
                        this.$router.push({path: `/user/personal/${params.row.duid}`})
                      } else {
                        this.$router.push({path: `/user/company/${params.row.duid}`})
                      }
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
        switch (path) {
          case '/user/companyList':
            // 公司
            this.state = 1
            this.search = ''
            this.UserinfoList()
            break
          case '/user/personalList':
            // 个人
            this.state = 0
            this.search = ''
            this.UserinfoList()
            break
          default:
            // 团队
            this.state = 2
            this.search = ''
            this.UserinfoList()
        }
      },
      UserinfoList (name = this.search, pageIndexs = 1, pageSizes = 10, state = this.state) {
        this.$http.post(apis.UserinfoList, { cstate: state, pageIndex: pageIndexs, pageSize: pageSizes, name: name })
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
      sendMsg () {
        this.$http.post(apis.MessageAdd, this.formItem)
          .then(res => res.json())
          .then((res) => {
            if (res.success) {
              this.$Message.success('发送成功')
            } else {
              this.$Message.error(res.msg)
            }
          })
          .catch(e => this.$Message.error(e.msg))
      }
    },
    watch: {
      $route (to, from) {
        const path = to.path
        this.newPath(path)
      },
      search (val) {
        this.UserinfoList(val)
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
