<template>
  <div>
    <Form :model="formItem" :label-width="80">
      <FormItem label="标题">
        <Input v-model="formItem.title" placeholder="输入标题..." style="width: 300px;"></Input>
      </FormItem>
      <FormItem label="描述">
        <Input v-model="formItem.description" type="textarea" :rows="4" placeholder="输入描述..." style="width: 500px;"></Input>
      </FormItem>
    </Form>
    <div id="editor" type="text/plain" style="width:100%;height:500px;"></div>
    <Button @click="submits" style="margin-top: 15px;" type="primary">发布</Button>
  </div>
</template>

<script>
  import apis from '@/apis'
  // document.domain = 'http://192.168.2.178:8066'
  /* eslint-disabled */
  export default {
    name: 'release',
    data () {
      return {
        formItem: {
          title: '',
          description: ''
        },
        ue: '',
        uedata: [],
        xierudata: []
      }
    },
    mounted () {
      const that = this
      this.ue = UE.getEditor('editor', {
        BaseUrl: '',
        UEDITOR_HOME_URL: 'static/utf8-net/'
        // toolbars: []
      })
      if (this.$route.path.indexOf('update') !== -1) {
        this.$http.post(apis.DynamicDetail, {hdid: this.$route.params.id})
          .then(res => res.json())
          .then((res) => {
            if (res.success) {
              this.formItem.title = res.result.title
              this.formItem.description = res.result.describe
              this.ue.addListener('ready', function () {
                that.ue.setContent(res.result.content)// 确保UE加载完成后，放入内容。
              })
            }
          })
          .catch(t => console.log(t))
      }
    },
    methods: {
      submits () {
        if (this.$route.path.indexOf('update') !== -1) {
          this.$http.post(apis.DynamicEdit,
            {
              hdid: this.$route.params.id,
              title: this.formItem.title,
              describe: this.formItem.description,
              content: this.ue.getContent()
            })
            .then(res => res.json())
            .then((res) => {
              if (res.success) {
                this.$Message.success('修改成功')
              }
            })
            .catch(t => this.$Message.error(t))
        } else {
          this.$http.post(apis.DynamicAdd,
            {
              title: this.formItem.title,
              describe: this.formItem.description,
              content: this.ue.getContent()
            })
            .then(res => res.json())
            .then((res) => {
              if (res.success) {
                this.$Message.success('发布成功')
              }
            })
            .catch(t => this.$Message.error(t))
        }
      }
    }
  }
</script>

<style scoped>

</style>
