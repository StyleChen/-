<template>
  <div>
    <div style="overflow: hidden;padding-bottom: 1px;">
      <Button size="large" type="warning" icon="plus-round" style="float: right;" @click="show=true">发布消息</Button>
    </div>
    <Table border :columns="columns" :data="datas" style="margin: 20px 0;"></Table>
    <Page :total="total" @on-change="changes" show-elevator></Page>
    <Modal title="发布系统消息" v-model="show" @on-ok="MessageAdd">
      <Form :model="formItem" :label-width="40">
        <FormItem label="标题">
          <Input v-model="formItem.title" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="内容">
          <Input v-model="formItem.content" type="textarea" :rows="4" placeholder="Enter something..."></Input>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
  import apis from '@/apis'
  export default {
    name: 'message-list',
    data () {
      return {
        total: 1,
        nowPage: 1,
        show: false,
        search: '',
        formItem: {
          title: '',
          content: ''
        },
        columns: [
          {
            title: '标题',
            key: 'title',
            align: 'center'
          },
          {
            title: '内容',
            key: 'content',
            align: 'center'
          },
          {
            title: '发布人',
            key: 'realName',
            width: 130,
            align: 'center'
          },
          {
            title: '时间',
            key: 'date',
            width: 135,
            align: 'center'
          },
          {
            title: '操作',
            width: 80,
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
                      this.$http.post(apis.MessageDel, { hmid: params.row.hmid })
                        .then(res => res.json())
                        .then((res) => {
                          if (res.success) {
                            this.$Message.success('删除成功')
                            this.MessageList(this.nowPage)
                          }
                        })
                    }
                  }
                }, '删除')
              ])
            }
          }
        ],
        datas: []
      }
    },
    methods: {
      MessageList (pageIndexs = 1, pageSizes = 10) {
        this.$http.post(apis.MessageList, {pageIndex: pageIndexs, pageSize: pageSizes})
          .then(res => res.json())
          .then((res) => {
            if (res.success) {
              this.total = res.result.total
              this.datas = res.result.data
            }
          })
      },
      changes (val) {
        this.MessageList(val)
        this.nowPage = val
      },
      MessageAdd () {
        this.$http.post(apis.MessageAddx, this.formItem)
          .then(res => res.json())
          .then((res) => {
            if (res.success) {
              this.$Message.success('发布成功')
              this.MessageList()
            }
          })
      }
    },
    mounted () {
      this.MessageList()
    }
  }
</script>

<style scoped>

</style>
