<template>
    <div>
      <Tabs value="name1">
        <TabPane name="name1" label="使用记录">
          <div style="padding-bottom: 1px;">
            <Row>
              <Col span="2">
              <p style="line-height: 32px;"> 时 间 段 : </p>
              </Col>
              <Col span="22">
              <DatePicker :value="value2" format="yyyy-MM-dd" type="daterange"
                          placement="bottom-start" placeholder="请选择时间段"
                          style="width: 200px" @on-change="changeDate"></DatePicker>
              </Col>
            </Row>
          </div>
          <div style="position: relative;">
            <Table border :columns="columns" :data="datas" style="margin: 20px 0;"></Table>
            <Select v-model="mode" class="mode" placeholder="全部">
              <Option value="">全部</Option>
              <Option value="充值">充值</Option>
              <Option value="通告">通告</Option>
            </Select>
            <Page :total="total" @on-change="changes" show-elevator></Page>
          </div>
        </TabPane>
      </Tabs>
    </div>
</template>

<script>
  import apis from '@/apis'
  export default {
    name: 'commission-logs',
    data () {
      return {
        total: 1,
        mode: '',
        value2: [],
        columns: [
          {
            title: '订单号',
            key: 'number',
            align: 'center'
          },
          {
            title: '名称',
            key: 'name',
            align: 'center'
          },
          {
            title: '账号',
            key: 'duname',
            align: 'center'
          },
          {
            title: '金额',
            key: 'money',
            align: 'center'
          },
          {
            title: '类型',
            key: 'payment',
            align: 'center'
          },
          {
            title: '时间',
            key: 'date',
            align: 'center'
          }
        ],
        datas: []
      }
    },
    methods: {
      moneyList (mode = this.mode, begindate = '', enddate = '', pageIndex = 1, pageSize = 10) {
        this.$http.post(apis.moneyList,
          {
            pageIndex: pageIndex,
            pageSize: pageSize,
            mode: mode,
            duid: this.$route.params.id,
            begindate: begindate,
            enddate: enddate
          })
          .then(res => res.json())
          .then((res) => {
            if (res.success) {
              this.total = res.result.total
              this.datas = res.result.data
            }
          })
      },
      changeDate (val) {
        this.moneyList(this.mode, ...val)
      },
      changes (val) {
        this.moneyList(this.mode, ...this.value2, val)
      }
    },
    watch: {
      mode (val) {
        this.moneyList(val, ...this.value2)
      }
    },
    mounted () {
      this.moneyList()
    }
  }
</script>

<style scoped>
.mode {
  position: absolute;
  width: 100px;
  top: 1px;
  left: 625px;
}
</style>
<style>
  .ivu-tabs-tabpane .mode .ivu-select-selection {
    background: #f8f8f9;
    height: 38px;
    border: none;
    color: #333;
    font-weight: 600;
    outline: none;
    text-align: center;
  }
  .ivu-tabs-tabpane .mode.ivu-select-single .ivu-select-selection .ivu-select-placeholder,
  .ivu-tabs-tabpane .mode.ivu-select-single .ivu-select-selection .ivu-select-selected-value {
    height: 38px;
    line-height: 40px;
  }
</style>
