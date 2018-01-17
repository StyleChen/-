<template>
  <div>
    <Form :model="formItem" :label-width="100" style="width: 500px;">
      <FormItem label="密码">
        <Input v-model="formItem.pwd" placeholder="请输入密码..."></Input>
      </FormItem>
      <FormItem label="新密码">
        <Input v-model="formItem.newpwd" type="password" placeholder="请输入新密码..."></Input>
      </FormItem>
      <FormItem label="确认密码">
        <Input v-model="newpwds" type="password"  placeholder="请再次输入新密码..."></Input>
      </FormItem>
    </Form>
    <Button type="primary" @click="update" :disabled="(formItem.newpwd.length === 0) || (formItem.newpwd !== newpwds)" style="margin-left: 100px;">修改</Button>
  </div>
</template>

<script>
  import apis from '@/apis'
  export default {
    name: 'updatepassword',
    data () {
      return {
        formItem: {
          pwd: '',
          newpwd: ''
        },
        newpwds: ''
      }
    },
    methods: {
      update () {
        this.$http.post(apis.ChangePwd, this.formItem)
          .then(res => res.json())
          .then((res) => {
            if (res.success) {
              this.$Message.success(res.result)
            } else {
              this.$Message.error(res.msg)
            }
          })
          .catch(res => console.log(res))
      }
    }
  }
</script>

<style scoped>

</style>
