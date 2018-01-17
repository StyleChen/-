<template>
  <upload :upload-data="uploadData"></upload>
</template>
<script>
  import upload from '@/components/upload'

  export default {
    components: { upload },
    data () {
      return {
        uploadData: {
          type: '首页广告',
          size: '750x260'
        }
      }
    },
    methods: {
      newPath (path) {
        switch (path) {
          case '/information/zbanner':
            this.uploadData = {
              type: '资讯广告',
              size: '750x180'
            }
            break
          case '/information/tbanner':
            this.uploadData = {
              type: '通告广告',
              size: '750x100'
            }
            break
          default:
            this.uploadData = {
              type: '首页广告',
              size: '750x260'
            }
        }
      }
    },
    watch: {
      $route (to, from) {
        this.newPath(to.path)
      }
    },
    mounted () {
      this.newPath(this.$route.path)
    }
  }
</script>
