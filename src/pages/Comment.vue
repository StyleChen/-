<template>
  <div style="position: relative;">
    <div style="height: calc(100vh - 160px);overflow-y: scroll;">
      <div style="padding-bottom: 120px;">
        <h1 style="text-align: center;">资讯标题 此模块应是富文本内容</h1>
        <h3>资讯描述资讯描述资讯描述资讯描述资讯描述资讯描述资讯描述资讯描述资讯描述资讯描述资讯描述</h3>
        <div>
          资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯
          内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容
        </div>
        <h6 class="comment">评论区 : </h6>
        <div class="comment">
          <div class="commentName">
            <div class="headler"><img class="img-responsive" src="../assets/images/fruit.png" alt=""></div>
            <p style="margin: 0 5px;float: left;line-height: 24px;">用户名称  发表于 2017-12-12 12:12</p>
            <Button type="text" size="small">删除</Button>
            <Button type="text" size="small">回复</Button>
          </div>
          <p class="content">评论内容评论内容评论内容评论内容评论内容评论内容评论内容评
            论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评
            论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评
            论内容评论内容评论内容评论内容评论
            内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容</p>
        </div>
        <div class="comment">
          <div class="commentName">
            <div class="headler"><img class="img-responsive" src="../assets/images/fruit.png" alt=""></div>
            <p style="margin: 0 5px;float: left;line-height: 24px;">用户名称  发表于 2017-12-12 12:12</p>
            <Button type="text" size="small">删除</Button>
            <Button type="text" size="small">回复</Button>
          </div>
          <p class="content">评论内容评论内容评论内容评论内容评论内容评论内容评论内容评
            论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评
            论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评
            论内容评论内容评论内容评论内容评论
            内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容</p>
        </div>
        <div class="comment">
          <div class="commentName">
            <div class="headler"><img class="img-responsive" src="../assets/images/fruit.png" alt=""></div>
            <p style="margin: 0 5px;float: left;line-height: 24px;">用户名称  发表于 2017-12-12 12:12</p>
            <Button type="text" size="small">删除</Button>
            <Button type="text" size="small">回复</Button>
          </div>
          <p class="content">评论内容评论内容评论内容评论内容评论内容评论内容评论内容评
            论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评
            论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评
            论内容评论内容评论内容评论内容评论
            内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容</p>
        </div><div class="comment">
        <div class="commentName">
          <div class="headler"><img class="img-responsive" src="../assets/images/fruit.png" alt=""></div>
          <p style="margin: 0 5px;float: left;line-height: 24px;">用户名称  发表于 2017-12-12 12:12</p>
          <Button type="text" size="small">删除</Button>
          <Button type="text" size="small">回复</Button>
        </div>
        <p class="content">评论内容评论内容评论内容评论内容评论内容评论内容评论内容评
          论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评
          论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评
          论内容评论内容评论内容评论内容评论
          内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容</p>
      </div>
        <div class="comment">
          <div class="commentName">
            <div class="headler"><img class="img-responsive" src="../assets/images/fruit.png" alt=""></div>
            <p style="margin: 0 5px;float: left;line-height: 24px;">用户名称  发表于 2017-12-12 12:12</p>
            <Button type="text" size="small">删除</Button>
            <Button type="text" size="small">回复</Button>
          </div>
          <p class="content">评论内容评论内容评论内容评论内容评论内容评论内容评论内容评
            论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评
            论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评
            论内容评论内容评论内容评论内容评论
            内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容</p>
        </div>
      </div>
    </div>
    <div class="huifu">
      <Input type="textarea" :rows="4" style="" placeholder="回复内容..." />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'comment'
  }
</script>

<style scoped>
.comment {
  background: #eee;
  padding: 10px;
  margin-top: 10px;
}
  .headler {
    height: 20px;
    width: 20px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    overflow: hidden;
    float: left;
  }
  .commentName {
    overflow: hidden;
    padding: 10px;
    margin-bottom: 10px;
    border-bottom: 1px dotted #333;
  }
  .content {
    line-height: 1.5;
    text-indent: 24px;
  }
  .huifu {
    position: absolute;
    left: 0;
    bottom: 0;
    width: calc(100% - 16px);
  }
</style>
