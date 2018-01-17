<template>
  <div>
    <!--个人用户-->
    <Collapse v-model="valueCollapse" v-if="$route.path.match('personal')">
      <Panel name="1">
        基本信息
        <div slot="content">
          <ul class="detail-ul">
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">姓名 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.name}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">账号 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.Dmh_name}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">佣金 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.balance}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">头像 : </p>
                </Col>
                <Col span="21">
                <p><img :src="datas.logo" alt=""></p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">身份 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.identity}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">艺名 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.ailas}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">年龄 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.age}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">性别 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.sex}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">国籍 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.nationality}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">语言 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.language}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">所在地 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.addr}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">是否签约 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.sign === 1 ? '已签约' : '未签约'}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">综合评价 : </p>
                </Col>
                <Col span="21">
                <Rate disabled show-text v-model="datas.score"></Rate>
                </Col>
              </Row>
            </li>
          </ul>
        </div>
      </Panel>
      <Panel name="2">
        联系方式
        <div slot="content">
          <ul class="detail-ul">
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">电话 : </p>
                </Col>
                <Col span="21">
                <p>datas.phone</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">QQ : </p>
                </Col>
                <Col span="21">
                <p>{{datas.qq}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">微信 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.weixin}}</p>
                </Col>
              </Row>
            </li>
          </ul>
        </div>
      </Panel>
      <Panel name="3">
        详细信息
        <div slot="content">
          <ul class="detail-ul">
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">身高 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.hight}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">三围 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.bwh}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">职业 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.works}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">兴趣 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.interest}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">特长 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.speciality}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">相关视频 : </p>
                </Col>
                <Col span="21">
                <a :href="datas.Video" target="_blank">{{datas.Video}}</a>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                  <p style="text-align: right;padding-right: 10px;">身份证 : </p>
                </Col>
                <Col span="21">
                <a :href="item" target="_blank" v-for="item in JSON.parse(datas.idimages)" :key="item">
                  <img :src="item" alt="身份证">
                </a>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                  <p style="text-align: right;padding-right: 10px;">个人摩卡 : </p>
                </Col>
                <Col span="21">
                <a :href="item" target="_blank" v-for="item in JSON.parse(datas.images)" :key="item">
                  <img :src="item" alt="身份证">
                </a>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                  <p style="text-align: right;padding-right: 10px;">相关作品 : </p>
                </Col>
                <Col span="21">
                <a :href="item" target="_blank" v-for="item in JSON.parse(datas.worksimages)" :key="item">
                  <img :src="item" alt="相关作品">
                </a>
                </Col>
              </Row>
            </li>
          </ul>
        </div>
      </Panel>
      <Panel name="4">
        教育背景
        <div slot="content">
          <ul class="detail-ul">
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">学校名称 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.schoolName}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">在校时间 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.schoolDate }}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">所学专业 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.schoolWork }}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">学历学位 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.schoolEducation }}</p>
                </Col>
              </Row>
            </li>
          </ul>
        </div>
      </Panel>
      <Panel name="5">
        评价信息
        <div slot="content">
          <ul class="detail-ul">
            <li v-for="item in assessSys" :key="item.rowId" style="padding-bottom: 5px;border-bottom: 1px dotted #999;">
              <Row>
                <Col span="5">
                <p style="text-align: right;padding-right: 10px;">{{item.name}} : </p>
                </Col>
                <Col span="12">
                <p>{{item.Htb_comAssess}}</p>
                </Col>
                <Col span="5">
                <p>{{item.date}}</p>
                </Col>
                <Col span="2" style="text-align:right;">
                <Button type="error">删除</Button>
                </Col>
              </Row>
            </li>
          </ul>
          <Page :total="total" show-elevator @change="changes" style="margin: 15px 0;"></Page>
        </div>
      </Panel>
    </Collapse>

    <!--公司用户-->
    <Collapse v-model="valueCollapse" v-if="!$route.path.match('personal')">
      <Panel name="1">
        基本信息
        <div slot="content">
          <ul class="detail-ul">
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">公司名称 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.compay}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">账号 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.name}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">佣金 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.balance}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">头像 : </p>
                </Col>
                <Col span="21">
                <p><img :src="datas.logo" alt="公司头像"></p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">地址 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.Addr}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">规模 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.scale}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">综合评价 : </p>
                </Col>
                <Col span="21">
                <Rate disabled show-text v-model="datas.score"></Rate>
                </Col>
              </Row>
            </li>
          </ul>
        </div>
      </Panel>
      <Panel name="9">
        联系方式
        <div slot="content">
          <ul class="detail-ul">
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">电话 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.phone}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">邮箱 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.email }}</p>
                </Col>
              </Row>
            </li>
          </ul>
        </div>
      </Panel>
      <Panel name="10">
        详细信息
        <div slot="content">
          <ul class="detail-ul">
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">公司性质 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.Nature}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">注册资金 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.regmoney}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">公司简介 : </p>
                </Col>
                <Col span="21">
                <p>{{datas.profile}}</p>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">营业执照 : </p>
                </Col>
                <Col span="21">
                <a :href="item" target="_blank" v-for="item in JSON.parse(datas.busimages)" :key="item">
                  <img :src="item" alt="">
                </a>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col span="3">
                <p style="text-align: right;padding-right: 10px;">相关作品 : </p>
                </Col>
                <Col span="21">
                <a :href="item" target="_blank" v-for="item in datas.worksimages" :key="item">
                  <img :src="item" alt="">
                </a>
                </Col>
              </Row>
            </li>
          </ul>
        </div>
      </Panel>
      <Panel name="11" v-if="!$route.path.match('examine')">
        评价信息
        <div slot="content">
          <ul class="detail-ul">
            <li v-for="item in assessSys" :key="item.rowId" style="padding-bottom: 5px;border-bottom: 1px dotted #999;">
              <Row>
                <Col span="5">
                <p style="text-align: right;padding-right: 10px;">{{item.name}} : </p>
                </Col>
                <Col span="12">
                <p>{{item.Htb_comAssess}}</p>
                </Col>
                <Col span="5">
                <p>{{item.date}}</p>
                </Col>
                <Col span="2" style="text-align:right;">
                <Button type="error">删除</Button>
                </Col>
              </Row>
            </li>
            <li v-if="assessSys.length === 0">暂无评论</li>
          </ul>
          <Page :total="total" show-elevator @change="changes" style="margin: 15px 0;"></Page>
        </div>
      </Panel>
    </Collapse>

    <!--审核操作-->
    <div style="margin: 15px 0;float: right;" v-if="$route.path.match('examine')">
      <Button type="error" @click="reject=true">驳回</Button>
      <Button type="primary" @click="pass=true">通过</Button>
    </div>
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
    name: 'user-detail',
    data () {
      return {
        valueCollapse: '1',
        total: 1,
        pass: false,
        reject: false,
        rejectReason: '',
        datas: {},
        assessSys: []
      }
    },
    methods: {
      okPass () {
        this.$http.post(apis.UserCheck, { duid: this.$route.params.id, state: 6 })
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
          this.$http.post(apis.UserCheck, { duid: this.$route.params.id, state: 3, content: this.rejectReason })
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
      },
      assessSysList (pageIndexs = 1) {
        this.$http.post(apis.assessSysList, { duid: this.$route.params.id, pageIndex: pageIndexs, pageSize: 10 })
          .then(res => res.json())
          .then((res) => {
            if (res.success) {
              this.assessSys = res.result.data
              this.total = res.result.total
            }
          })
      },
      changes (val) {
        this.assessSysList(val)
      }
    },
    mounted () {
      if (this.$route.path.match('personal')) {
        this.$http.post(apis.UserinfoDetail, { peoid: parseInt(this.$route.params.id) })
          .then(res => res.json())
          .then((res) => {
            if (res.success) {
              this.datas = res.result.data
              for (let i in this.datas) {
                if (this.datas[i] === null) {
                  this.datas[i] = ''
                }
              }
            }
          })
        this.assessSysList()
      } else {
        this.$http.post(apis.CompayDetail, { duid: parseInt(this.$route.params.id) })
          .then(res => res.json())
          .then((res) => {
            if (res.success) {
              this.datas = res.result.data
              for (let i in this.datas) {
                if (this.datas[i] === null) {
                  this.datas[i] = ''
                }
              }
            }
          })
        this.assessSysList()
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
  line-height: 18px;
}
.detail-ul li p {
  line-height: 1.5;
}
</style>
