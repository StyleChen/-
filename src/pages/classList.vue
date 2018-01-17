<template>
  <div>
    <div style="overflow: hidden;padding-bottom: 1px;">
      <Button style="float: right;" type="warning" icon="android-add" @click="annountcementClass=true">新增通告分类</Button>
    </div>
    <Table border :columns="columns" :data="datas" style="margin: 20px 0;"></Table>
    <Modal title="新增通告类型" v-model="annountcementClass"
           @on-ok="modeAdd" @on-cancel="annountcementClass=false">
      <Input v-model="annountcementName" placeholder="请输入通告类型" />
    </Modal>
  </div>
</template>

<script>
  import apis from '@/apis'
  export default {
    name: 'class-list',
    data () {
      return {
        annountcementClass: false,
        annountcementName: '',
        columns: [
          {
            title: '通告类型',
            key: 'name',
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
                      this.$http.post(apis.modeDelete, { 'name': params.row.name })
                        .then(res => res.json())
                        .then((res) => {
                          if (res.success) {
                            this.$Message.success('操作成功')
                            this.modeList()
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
      modeList () {
        this.$http.post(apis.modeList)
          .then(res => res.json())
          .then((res) => {
            if (res.success) {
              this.datas = []
              res.result.map((item) => {
                this.datas.push({
                  name: item
                })
              })
            }
          })
      },
      modeAdd () {
        this.$http.post(apis.modeAdd, { 'name': this.annountcementName })
          .then(res => res.json())
          .then((res) => {
            if (res.success) {
              this.$Message.success('操作成功')
              this.modeList()
            }
          })
      }
    },
    mounted () {
      this.modeList()
    }
  }
</script>

<style scoped>

</style>
