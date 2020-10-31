<template>
  <div>
    <!-- <div class="i-layout-page-header">
            <PageHeader title="高级表单" content="当一次性提交大量数据时，可使用高级表单。" hidden-breadcrumb />
    </div>-->
    <Form ref="form" :model="data" :rules="rules" label-position="top" class="ivu-mt">
      <Card :bordered="false" dis-hover title="合同档案录入 ">
        <Row :gutter="24">
         
          <Col :xl="8" :lg="8" :md="8" :sm="8" :xs="8">
            <FormItem label="档案编号：" prop="fileId" label-for="fileId">
              <Input
                v-model="data.fileId"
                placeholder="请输入档案编号"
                element-id="fileId"
                style="width: 200px"
              />
            </FormItem>
          </Col>
           <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="年度月度：" prop="fileType" label-for="fileType">
              <DatePicker type="date" placeholder="请选择年月" style="width: 200px"></DatePicker>
            </FormItem>
          </Col>
          
          <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="档案盒号：" prop="fileType" label-for="fileType">
              <Select
                v-model="data.trafficType"
                placeholder="选择档案盒编号"
                element-id="trafficType"
                style="width: 200px"
              >
                <Option value>档案模板</Option>
                <Option value>档案模板</Option>
              </Select>
            </FormItem>
          </Col>
          <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="文件号：" prop="fileTitle" label-for="fileTitle">
              <Input
                v-model="data.fileTitle"
                placeholder="请输入文件号"
                element-id="fileTitle"
                style="width: 200px"
              />
            </FormItem>
          </Col>
          <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="档案标题：" prop="title" label-for="title">
              <Input
                v-model="data.title"
                placeholder="请输入档案标题"
                element-id="title"
                style="width: 400px"
              />
            </FormItem>
          </Col>
         
          <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="业务类型：" prop="fileType" label-for="fileType">
              <Select
                v-model="data.trafficType"
                placeholder="选择业务类别"
                element-id="trafficType"
                style="width: 200px"
              >
                <Option value>档案模板</Option>
                <Option value>档案模板</Option>
              </Select>
            </FormItem>
          </Col>
          <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="保管期限：" prop="fileType" label-for="fileType">
              <Select
                v-model="data.trafficType"
                placeholder="长期"
                element-id="trafficType"
                style="width: 200px"
              >
                <Option value>长期</Option>
                <Option value>短期</Option>
              </Select>
            </FormItem>
          </Col>
          <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="数量：" prop="page" label-for="page">
              <Input
                v-model="data.page"
                placeholder="请输入页数"
                element-id="page"
                style="width: 200px"
              />
            </FormItem>
          </Col>
          <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="秘级类型：" prop="security" label-for="security">
              <Select
                v-model="data.trafficType"
                placeholder="一级"
                element-id="security"
                style="width: 200px"
              >
                <Option value>一级</Option>
                <Option value>二级</Option>
                <Option value>三级</Option>
                <Option value>特级</Option>
              </Select>
            </FormItem>
          </Col>
           <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="归档日期：" prop="fileType" label-for="fileType">
              <DatePicker type="date" placeholder="请选择年月日" style="width: 200px"></DatePicker>
            </FormItem>
          </Col>
          <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="级别：" prop=" level" label-for=" level">
              <Select
                v-model="data. level"
                placeholder="普通"
                element-id=" level"
                style="width: 200px"
              >
                <Option value>普通</Option>
                <Option value>高级</Option>
              </Select>
            </FormItem>
          </Col>
          <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="分类编号：" prop="fileType" label-for="fileType">
              <Input
                v-model="data.contractId"
                placeholder="请输入分类编号"
                element-id="contractId"
                style="width: 200px"
              />
            </FormItem>
          </Col>
           <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="项目名称：" prop="contractId" label-for="contractId">
              <Input
                v-model="data.contractId"
                placeholder="请输入项目名称"
                element-id="contractId"
                style="width: 200px"
              />
            </FormItem>
          </Col>
           <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="项目标签：" prop="contractId" label-for="contractId">
              <Input
                v-model="data.contractId"
                placeholder="请输入项目标签"
                element-id="contractId"
                style="width: 200px"
              />
            </FormItem>
          </Col>
          <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="单位部门：" prop="fileType" label-for="fileType">
              <Input
                v-model="data.contractId"
                placeholder="请输入单位部门"
                element-id="contractId"
                style="width: 200px"
              />
            </FormItem>
          </Col>
          <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="合同编号：" prop="fileType" label-for="fileType">
              <Select
                v-model="data.trafficType"
                placeholder="合同编号："
                element-id="trafficType"
                style="width: 200px"
              >
                <Option value>档案模板</Option>
                <Option value>档案模板</Option>
              </Select>
            </FormItem>
          </Col>
          <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="合同类型：" prop="dep" label-for="fileType">
              <Select
                v-model="data.trafficType"
                placeholder="选择主办部门"
                element-id="trafficType"
                style="width: 200px"
              >
                <Option value>预付款</Option>
                <Option value>全款</Option>
                <option value="">乙方垫资</option>
              </Select>
            </FormItem>
          </Col>
           <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="签订日期：" prop="fileType" label-for="fileType">
              <DatePicker type="date" placeholder="请选择年月日" style="width: 200px"></DatePicker>
            </FormItem>
          </Col>
         <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="对方合同号：" prop="fileType" label-for="fileType">
              <Input
                v-model="data.contractId"
                placeholder="请输入对方合同号"
                element-id="contractId"
                style="width: 200px"
              />
            </FormItem>
          </Col>
         
          <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="归档日期：" prop="fileType" label-for="fileType">
              <DatePicker type="date" placeholder="请选择年月日" style="width: 200px"></DatePicker>
            </FormItem>
          </Col>
          
          <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="对方名字：" prop="fileType" label-for="fileType">
              <Input
                v-model="data.contractId"
                placeholder="请输入对方名字"
                element-id="contractId"
                style="width: 200px"
              />
            </FormItem>
          </Col>
             <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="开票信息：" prop="contractId" label-for="contractId">
              <Input
                v-model="data.contractId"
                placeholder="请输入开票信息"
                element-id="contractId"
                style="width: 200px"
              />
            </FormItem>
          </Col>
          <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="是否含税：" prop="fileType" label-for="fileType">
              <Select
                v-model="data.trafficType"
                placeholder="1"
                element-id="trafficType"
                style="width: 200px"
              >
                <Option value>含税</Option>
                <Option value>不包含</Option>
              </Select>
            </FormItem>
          </Col>
          
          <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="付款方式：" prop="fileType" label-for="fileType">
              <Select
                v-model="data.trafficType"
                placeholder="选择付款方式"
                element-id="trafficType"
                style="width: 200px"
              >
                <Option value>1</Option>
                <Option value>2</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
      </Card>
    </Form>
    <FooterToolbar>
      <Button type="primary" :loading="loading" @click="handleSubmit" size="large">提交</Button>
    </FooterToolbar>
  </div>
</template>
<script>
export default {
  name: "form-advanced-form",
  data() {
    return {
      data: {
        tripReason: "",
        contractId: "",
        tripTime: [],
        approve: "",
        emergencyType: 3,
        fromCity: "",
        goTime: "",
        backTime: "",
        trafficType: "",
        toCity: ""
      },
      rules: {
        fileType: [{ required: true, message: "档案类型", trigger: "blur" }],
        fileId: [
          { required: true, message: "请填写档案编号", trigger: "blur" }
        ],
        tripTime: [
          {
            required: true,
            type: "array",
            message: "请选择出差时间",
            trigger: "change",
            fields: {
              0: {
                type: "date",
                message: "请选择出差时间"
              },
              1: {
                type: "date",
                message: "请选择出差时间"
              }
            }
          }
        ],
        approve: [
          { required: true, message: "请选择审批人", trigger: "change" }
        ],
        fromCity: [
          { required: true, message: "请选择出发城市", trigger: "change" }
        ],
        goTime: [
          {
            required: true,
            type: "date",
            message: "请选择出发时间",
            trigger: "change"
          }
        ],
        backTime: [
          {
            required: true,
            type: "date",
            message: "请选择返程时间",
            trigger: "change"
          }
        ],
        trafficType: [
          { required: true, message: "请选择交通类型", trigger: "change" }
        ]
      },
      toCityRule: [
        { required: true, message: "请选择到达城市", trigger: "change" }
      ],
      editIndex: -1,
      editName: "",
      editId: "",
      editDepartment: "",
      addNew: false,
      loading: false
    };
  }
};
</script>
<style lang="less" scoped>
/deep/.ivu-form .ivu-form-item-label {
  color: #000;
  font-size: 15px;
}
</style>