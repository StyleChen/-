<template>
  <div>
    <Collapse v-model="valueCollapse">
      <Panel name="1">
        基本信息
        <div slot="content">
          <ul class="detail-ul">
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">订单号 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.number}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">发布公司 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.dcompay}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">联系人 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.nickName}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">联系电话 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.phone}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">状态 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.stateName}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">通告类别 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.mode}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">通告主题 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.title}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">总金额 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.sumFee}} 元</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">薪水报价 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.fee}} 元/人</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">需要人数 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.peo}} 人</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">工作地址 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.addr}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">发布时间 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.date}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">开始时间 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.btime}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">结束时间 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.etime}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">录取人员 : </p>
                </Col>
                <Col span="21">
                <div>
                  <dl style="float: left;margin-right: 10px;text-align: center;" v-for="item in bids" :key="item.peoid">
                    <dt class="headImg">
                      <img :src="item.logo" class="img-responsive" alt="">
                    </dt>
                    <dd>
                      {{item.nickName}} <br> {{item.phone}}
                    </dd>
                  </dl>
                </div>
                </Col>
              </Row>
            </li>
          </ul>
        </div>
      </Panel>
      <Panel name="2">
        工作描述
        <div slot="content">
          <ul class="detail-ul">
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">具体要求 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.require}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">详细说明 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.content}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">场景照片 : </p>
                </Col>
                <Col span="21">
                <a :href="item" target="_blank" v-for="item in datas.media" :key="item">
                  <img :src="item" alt="场景照片">
                </a>
                </Col>
              </Row>
            </li>
          </ul>
        </div>
      </Panel>
      <Panel name="3" v-if="complaint === '1'">
        评论列表
        <div slot="content">
          <ul class="detail-ul">
            <li v-if="assets.length === 0">暂无数据</li>
            <li v-for="item in assets" :key="item.peoid">
              <Row>
                <Col span="4">
                <div style="text-align: right;padding-right: 10px;overflow: hidden;">
                  <div style="float: left;width: 40px;height: 40px;-webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;overflow: hidden;">
                    <img :src="item.logo" alt="头像">
                  </div>
                  <p>{{item.nickName}}</p>
                </div>
                </Col>
                <Col span="14">
                <p>{{item.content}}</p>
                </Col>
                <Col span="4">
                <p>{{item.date}}</p>
                </Col>
                <Col span="2">
                <Button type="error" size="small" @click="detele(item.number, item.peoid)">删除</Button>
                </Col>
              </Row>
              <Row v-if="item.reply !== ''">
                <Col span="4">
                <p>回复内容 : </p>
                </Col>
                <Col span="20">
                <p>{{item.reply}}</p>
                </Col>
              </Row>
            </li>
          </ul>
        </div>
      </Panel>
      <div style="margin: 15px;float: right;" v-if="complaint === '1'">
        <Button type="primary" v-if="datas.state === 3 || state === 1" @click="TaskFinish">结束任务</Button>
        <div v-else-if="datas.state === 2">
          <Button type="warning" @click="reject=true">驳回</Button>
          <Button type="primary" @click="pass">通过</Button>
        </div>
        <Button type="primary" v-else @click="TaskDelete">删除</Button>
      </div>
    </Collapse>
    <Modal v-model="reject" title="审核驳回" @on-ok="passno" @on-cancel="reject=false">
      <Input v-model="rejectReason" type="textarea" :rows="4" placeholder="请尽可能详细填写驳回理由..." />
    </Modal>
    <div v-if="complaint === '2'">
      <ul class="detail-ul complain" v-for="(item, index) in complainList" :key="item.duid">
        <li>
          <Row>
            <Col span="3">
            <p style="text-align: right;padding-right: 10px;">{{index+1}}.投诉内容 : </p>
            </Col>
            <Col span="21">
             <Row>
               <Col span="3">
               <p>{{item.name}} : </p>
               </Col>
               <Col span="17">
               <p>{{item.content}}</p>
               </Col>
               <Col span="4">
               <p>{{item.date}}</p>
               </Col>
             </Row>
            </Col>
          </Row>
        </li>
        <li>
          <Row>
            <Col span="3">
            <p style="text-align: right;padding-right: 10px;">处理过程 : </p>
            </Col>
            <Col span="21">
            <Input type="textarea" :rows="4" v-model="item.process" placeholder="请输入处理过程..." />
            </Col>
          </Row>
        </li>
        <li>
          <Row>
            <Col span="3">
            <p style="text-align: right;padding-right: 10px;">处理结果 : </p>
            </Col>
            <Col span="21">
            <Input type="textarea" :rows="4" v-model="item.result" placeholder="请输入处理结果..." />
            </Col>
          </Row>
        </li>
        <li style="overflow: hidden;">
          <Button type="primary" style="float: right;" @click="ComplainSolve(item.result,item.process,item.duid)">提交</Button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import apis from '@/apis'
  export default {
    name: 'announcement-detail',
    data () {
      return {
        complaint: this.$route.query.complaint,
        valueCollapse: ['1', '2'],
        reject: false,
        rejectReason: '',
        datas: {}, // 通告信息
        assets: [], // 评论
        bids: [], // 录取人
        complainList: [] // 投诉列表
      }
    },
    mounted () {
      this.$http.post(apis.TaskDetail, { number: this.$route.params.id })
        .then(res => res.json())
        .then((res) => {
          if (res.success) {
            this.datas = res.result.data
            this.assets = res.result.chats
            this.bids = res.result.bids
          }
        })
      if (this.complaint === '2') {
        this.$http.post(apis.ComplainList, { number: this.$route.params.id })
          .then(res => res.json())
          .then((res) => {
            if (res.success) {
              this.complainList = res.result
            }
          })
      }
    },
    methods: {
      pass () {
        this.$http.post(apis.TaskCheck, { number: this.$route.params.id, state: 6 })
          .then(res => res.json())
          .then((res) => {
            if (res.success) {
              this.$Message.success('操作成功')
              this.$router.back(-1)
            }
          })
      },
      passno () {
        if (this.rejectReason === '') {
          this.$Modal.warning({content: '请填写驳回理由'})
        } else {
          this.$http.post(apis.TaskCheck, { number: this.$route.params.id, state: 7, content: this.rejectReason })
            .then(res => res.json())
            .then((res) => {
              if (res.success) {
                this.$Message.success('操作成功')
                this.$router.back(-1)
              }
            })
        }
      },
      detele (n, id) {
        this.$http.post(apis.ChatDelete, { number: n, duid: id })
          .then(res => res.json())
          .then((res) => {
            if (res.success) {
              this.$Message.success('操作成功')
              this.$router.back(-1)
            }
          })
      },
      TaskDelete () {
        this.$http.post(apis.TaskDelete, { number: this.$route.params.id })
          .then(res => res.json())
          .then((res) => {
            if (res.success) {
              this.$Message.success('操作成功')
              this.$router.back(-1)
            }
          })
      },
      TaskFinish () {
        this.$http.post(apis.TaskFinish, { number: this.$route.params.id })
          .then(res => res.json())
          .then((res) => {
            if (res.success) {
              this.$Message.success('操作成功')
              this.$router.back(-1)
            }
          })
      },
      ComplainSolve (result, process, duid) {
        this.$http.post(apis.ComplainSolve,
          { number: this.$route.params.id, duid: duid, process: process, result: result })
          .then(res => res.json())
          .then((res) => {
            if (res.success) {
              this.$Message.success('操作成功')
            }
          })
      }
    }
  }
</script>

<style scoped>
  .detail-ul {
    font-size: 15px;
  }
  .detail-ul li {
    margin: 15px 0;
  }
  .detail-ul li p {
    line-height: 1.5;
  }
  .headImg {
    width: 40px;
    height: 40px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border: 1px solid #eee;
    overflow: hidden;
    margin: 0 auto;
  }
  .complain {
    background: #f8f8f8;
    margin-top: 15px;
    padding: 5px 15px;
  }
</style>
