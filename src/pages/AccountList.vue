<template>
  <div>
    <div style="overflow: hidden;padding-bottom: 1px;">
      <Input size="large" v-model="search" style="width: 300px;float: left;" placeholder="请输入管理员账号或姓名">
      <Button slot="prepend" icon="search"></Button>
      </Input>
      <Button style="float: right;" type="error" size="large" @click="modal=true">新增管理员</Button>
    </div>
    <Table border :columns="columns" :data="datas" style="margin-top: 20px;"></Table>
    <Modal
      v-model="modal"
      title="新增管理员"
      @on-ok="addAccount"
      @on-cancel="modal=false">
      <Form ref="formItem" :model="formItem" :label-width="80" :rules="ruleInline">
        <FormItem label="账号" prop="name">
          <Input v-model="formItem.name" placeholder="请输入..."></Input>
        </FormItem>
        <FormItem label="密码" prop="pwd">
          <Input v-model="formItem.pwd" placeholder="请输入..."></Input>
        </FormItem>
        <FormItem label="真实姓名" prop="realname">
          <Input v-model="formItem.realname" placeholder="请输入..."></Input>
        </FormItem>
        <FormItem label="手机" prop="phone">
          <Input v-model="formItem.phone" placeholder="请输入..."></Input>
        </FormItem>
      </Form>
    </Modal>
    <Page :total="total" show-elevator style="margin-top: 15px;" @on-change="changes"></Page>
  </div>
</template>

<script>
  import apis from '@/apis'
  export default {
    name: 'account-list',
    data () {
      const validatePassCheck = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入手机号码'))
        } else if (!/^1[3456789]\d{9}$/.test(value)) {
          callback(new Error('请输入正确手机号码'))
        } else {
          callback()
        }
      }
      return {
        search: '',
        total: 1,
        modal: false,
        formItem: {
          name: '',
          realname: '',
          phone: '',
          pwd: ''
        },
        ruleInline: {
          name: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { type: 'string', min: 6, message: '账号长度至少6位', trigger: 'blur' }
          ],
          realname: [
            { required: true, message: '请输入真实姓名', trigger: 'blur' }
          ],
          phone: [
            { validator: validatePassCheck, trigger: 'blur' }
          ],
          pwd: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码长度至少6位', trigger: 'blur' }
          ]
        },
        columns: [
          {
            title: '账号',
            key: 'name'
          },
          {
            title: '真实姓名',
            key: 'realName'
          },
          {
            title: '手机',
            key: 'phone'
          },
          {
            title: '操作',
            align: 'center',
            width: 150,
            render: (h, params) => {
              return h('div', [
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
                      this.ResetPwd(params.row.huid)
                    }
                  }
                }, '重置密码'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.UserCancel(params.row.huid)
                    }
                  }
                }, '注销')
              ])
            }
          }
        ],
        datas: []
      }
    },
    methods: {
      addAccount () {
        this.$refs['formItem'].validate((valid) => {
          if (valid) {
            this.$http.post(apis.UserAdd, this.formItem)
              .then(res => res.json())
              .then((res) => {
                if (res.success) {
                  this.$Message.success('添加成功')
                }
              })
          } else {
            this.$Message.error('Fail!')
          }
        })
      },
      UserList (pageIndexs = 1, names = '') {
        this.$http.post(apis.UserList, { pageIndex: pageIndexs, pageSize: 10, name: names })
          .then(res => res.json())
          .then((res) => {
            if (res.success) {
              this.total = res.result.total
              this.datas = res.result.data
            }
          })
      },
      ResetPwd (huids) {
        this.$http.post(apis.ResetPwd, { huid: huids })
          .then(res => res.json())
          .then((res) => {
            if (res.success) {
              this.$Message.success('重置成功')
            } else {
              this.$Message.error('Fail!')
            }
          })
          .catch(res => this.$Message.error(res.msg))
      },
      UserCancel (huids) {
        this.$http.post(apis.UserCancel, { huid: huids })
          .then(res => res.json())
          .then((res) => {
            if (res.success) {
              this.$Message.success('删除成功')
              this.UserList()
            } else {
              this.$Message.error('Fail!')
            }
          })
          .catch(res => this.$Message.error(res.msg))
      },
      changes (val) {
        this.UserList(val)
      }
    },
    mounted () {
      this.UserList()
    },
    watch: {
      search (val) {
        this.UserList(1, val)
      }
    }
  }
</script>

<style scoped>

</style>
