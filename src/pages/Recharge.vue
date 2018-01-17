<template>
  <div>
    <div style="position: relative;">
      <div class="datePick">
        <Row>
          <Col span="12">
          <DatePicker type="month" v-model="dateval" @on-change="dateChange" placeholder="请选择时间段" style="width: 120px"></DatePicker>
          </Col>
          <Col span="12">
          <h6 style="line-height: 40px;font-size: 16px;font-weight: 500;">{{year}}年{{month}}月充值金额为 : {{money}}元</h6>
          </Col>
        </Row>
      </div>
      <div id="myChart" :style="{width: '100%', height: '300px'}"></div>
    </div>
    <Table border :columns="columns" :data="datas"></Table>
    <Page :total="total" show-elevator @change="pageChange" style="margin: 15px 0;"></Page>
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
    name: 'recharge',
    data () {
      return {
        total: 1,
        money: 0,
        dateval: `${new Date().getFullYear()}-${new Date().getMonth() + 1}`,
        year: `${new Date().getFullYear()}`,
        month: `${new Date().getMonth() + 1}`,
        columns: [
          {
            title: '订单号',
            key: 'number'
          },
          {
            title: '名称',
            key: 'name'
          },
          {
            title: '账号',
            key: 'duname'
          },
          {
            title: '金额',
            key: 'money'
          },
          {
            title: '充值方式',
            key: 'payment'
          },
          {
            title: '时间',
            key: 'date'
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
          title: { text: '充值金额数据统计' },
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
      rechargeList (pageIndex = 1, begindate = '', pageSize = 10) {
        this.$http.post(apis.rechargeList, { pageIndex: pageIndex, pageSize: pageSize, begindate: begindate })
          .then(res => res.json())
          .then((res) => {
            if (res.success) {
              this.total = res.result.total
              this.datas = res.result.data
            }
          })
      },
      chargeCount (begindate = '') {
        this.$http.post(apis.chargeCount, { begindate: begindate })
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
        this.chargeCount(val)
        this.rechargeList(1, val)
        this.year = val.split('-')[0]
        this.month = val.split('-')[1]
      },
      pageChange (val) {
        this.rechargeList(val)
      }
    },
    mounted () {
      this.chargeCount()
      this.rechargeList()
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
