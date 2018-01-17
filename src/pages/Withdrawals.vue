<template>
  <div>
    <div style="position: relative;">
      <div class="datePick">
        <Row>
          <Col span="12">
          <DatePicker type="month" v-model="dateval" @on-change="dateChange" placeholder="请选择时间段" style="width: 120px"></DatePicker>
          </Col>
          <Col span="12">
          <h6 style="line-height: 40px;font-size: 16px;font-weight: 500;">{{year}}年{{month}}月提现金额为 : {{money}}元</h6>
          </Col>
        </Row>
      </div>
      <div id="myChart" :style="{width: '100%', height: '300px'}"></div>
    </div>
    <Tabs value="1" @on-click="changeTab">
      <TabPane label="待提现" name="1">
        <Table :columns="columns" :data="datas" border style="margin-top: 30px;"></Table>
        <Page :total='total' show-elevator style="margin-top: 15px;" @on-change="changePage"></Page>
        <Modal title="转账确认提示" v-model="align" @on-ok="confrim" @on-cancel="align=false">
          <p style="text-align: center; font-size: 18px;">请确认已人工转账!</p>
        </Modal>
      </TabPane>
      <TabPane label="已提现" name="2">
        <Table border :columns="columns2" :data="datas"></Table>
        <Page :total="total" @change="pageChange" show-elevator style="margin: 15px 0;"></Page>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  import apis from '@/apis'
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/line')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  export default {
    name: 'withdrawals',
    data () {
      return {
        total: 1,
        state: 1,
        money: 0,
        params: null,
        align: false,
        dateval: `${new Date().getFullYear()}-${new Date().getMonth() + 1}`,
        year: `${new Date().getFullYear()}`,
        month: `${new Date().getMonth() + 1}`,
        columns: [
          {
            title: '真实姓名',
            key: 'realName',
            width: 90
          },
          {
            title: '订单号',
            key: 'number'
          },
          {
            title: '手机',
            key: 'phone'
          },
          {
            title: '开户行',
            key: 'bankName'
          },
          {
            title: '提现账号',
            key: 'cardNumber'
          },
          {
            title: '金额 (元)',
            key: 'money',
            width: 90
          },
          {
            title: '申请时间',
            key: 'date'
          },
          {
            title: '操作',
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'ghost'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.align = true
                      this.params = params
                    }
                  }
                }, '确认转账')
              ])
            }
          }
        ],
        columns2: [
          {
            title: '真实姓名',
            key: 'realName',
            width: 90
          },
          {
            title: '订单号',
            key: 'number'
          },
          {
            title: '手机',
            key: 'phone'
          },
          {
            title: '开户行',
            key: 'bankName'
          },
          {
            title: '提现账号',
            key: 'cardNumber'
          },
          {
            title: '金额 (元)',
            key: 'money',
            width: 90
          },
          {
            title: '申请时间',
            key: 'date'
          },
          {
            title: '处理人',
            key: 'clrName'
          }
        ],
        datas: [],
        xdata: [],
        ydata: []
      }
    },
    methods: {
      drawLine () {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: { text: '提现金额数据统计' },
          tooltip: {},
          xAxis: {
            data: this.xdata,
            name: '日期'
          },
          yAxis: {
            name: '金额/元'
          },
          series: [{
            name: '金额',
            type: 'line',
            data: this.ydata
          }]
        })
      },
      getList (pageIndexs = 1, begindate = '', pageSizes = 10) {
        this.$http.post(apis.CashList,
          { state: this.state, pageIndex: pageIndexs, pageSize: pageSizes, begindate: begindate })
          .then(res => res.json()).then((ress) => {
            if (ress.success) {
              const resultData = ress.result.data
              for (let i = 0; i < resultData.length; i += 1) {
                const cardNumber = resultData[i].cardNumber
                if (cardNumber) {
                  const cardNumberArr = []
                  cardNumberArr.push(cardNumber.substr(0, 4))
                  cardNumberArr.push(cardNumber.substr(4, 4))
                  cardNumberArr.push(cardNumber.substr(8, 4))
                  cardNumberArr.push(cardNumber.substr(12, 4))
                  resultData[i].cardNumber = cardNumberArr.join(' ')
                }
              }
              this.datas = resultData
              this.total = ress.result.total
            }
          }).catch((err) => {
            this.$Message.error(err.msg)
          })
      },
      changePage (val) {
        this.getList(val)
      },
      confrim () {
        if ('row' in this.params) {
          this.$http.post(apis.CashComfirm,
            { walletid: this.params.row.walletid,
              number: this.params.row.number })
            .then(res => res.json()).then((ress) => {
              if (ress.success) {
                this.$Message.success('操作成功')
                this.getList()
              }
            }).catch(err => this.$Message.error(err))
        }
      },
      changeTab (val) {
        this.state = val
        this.getList()
      },
      CashCount (begindate = '') {
        this.$http.post(apis.CashCount, { begindate: begindate })
          .then(res => res.json())
          .then((res) => {
            if (res.success) {
              this.xdata = []
              this.ydata = []
              res.result.count.map((val) => {
                this.xdata.push(val.Times)
                this.ydata.push(parseFloat(val.total_fee))
              })
              this.money = res.result.sumfee
              this.drawLine()
            }
          })
      },
      dateChange (val) {
        this.CashCount(val)
        this.getList(1, val)
        this.year = val.split('-')[0]
        this.month = val.split('-')[1]
      },
      pageChange (val) {
        this.getList(val)
      }
    },
    mounted () {
      this.CashCount()
      this.getList()
    }
  }
</script>

<style scoped>
  .datePick {
    position: absolute;
    top: 0;
    left: 200px;
    z-index: 999;
    width: calc(100% - 200px);
  }
</style>
