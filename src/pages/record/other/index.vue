<template>
  <div>
    <!-- <div class="i-layout-page-header">
            <PageHeader title="高级表单" content="当一次性提交大量数据时，可使用高级表单。" hidden-breadcrumb />
    </div>-->
    <Form ref="form" :model="data" :rules="rules" label-position="top" class="ivu-mt">
      <Card :bordered="false" dis-hover title="基本信息">
        <Row :gutter="24">
          <Col :xl="24" :lg="24" :md="24" :sm="24" :xs="24">
            <FormItem label="档案类型：" prop="fileType" label-for="fileType">
              <Select
                v-model="data.trafficType"
                placeholder="项目档案"
                element-id="trafficType"
                style="width: 200px"
              >
                <Option value>文书档案</Option>
                <Option value>设备档案</Option>
                <Option value>设备档案</Option>
                <Option value>项目档案</Option>
                <Option value>人事档案</Option>
              </Select>
            </FormItem>
          </Col>
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
            <FormItem label="档案柜号：" prop="fileType" label-for="fileType">
              <Select
                v-model="data.trafficType"
                placeholder="选择档案柜编号"
                element-id="trafficType"
                style="width: 200px"
              >
                <Option value>档案模板</Option>
                <Option value>档案模板</Option>
              </Select>
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
            <FormItem label="年度选择：" prop="fileYear" label-for="fileYear">
              <Select
                v-model="data.trafficType"
                placeholder="选择年度"
                element-id="fileYear"
                style="width: 200px"
              >
                <Option value>2017</Option>
                <Option value>2018</Option>
                <Option value>2019</Option>
                <Option value>2020</Option>
              </Select>
            </FormItem>
          </Col>
          <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="业务类目：" prop="fileType" label-for="fileType">
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
            <FormItem label="页数：" prop="page" label-for="page">
              <Input
                v-model="data.page"
                placeholder="请输入页数"
                element-id="page"
                style="width: 200px"
              />
            </FormItem>
          </Col>
          <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="密级：" prop="security" label-for="security">
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
            <FormItem label="主办单位：" prop="fileType" label-for="fileType">
              <Select
                v-model="data.trafficType"
                placeholder="选择主办单位"
                element-id="trafficType"
                style="width: 200px"
              >
                <Option value>档案模板</Option>
                <Option value>档案模板</Option>
              </Select>
            </FormItem>
          </Col>
          <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="主办部门：" prop="dep" label-for="fileType">
              <Select
                v-model="data.trafficType"
                placeholder="选择主办部门"
                element-id="trafficType"
                style="width: 200px"
              >
                <Option value>档案模板</Option>
                <Option value>档案模板</Option>
              </Select>
            </FormItem>
          </Col>
          <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="主办人：" prop="host" label-for="host">
              <Select
                v-model="data.host"
                placeholder="选择主办人"
                element-id="host"
                style="width: 200px"
              >
                <Option value>0</Option>
                <Option value>档案模板</Option>
              </Select>
            </FormItem>
          </Col>
          <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="存放地址：" prop="addr" label-for="addr">
              <Select
                v-model="data.addr"
                placeholder="自动根据档案柜匹配地址"
                element-id="addr"
                style="width: 200px"
              >
                <Option value></Option>
              </Select>
            </FormItem>
          </Col>
          <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="归档日期：" prop="fileType" label-for="fileType">
              <DatePicker type="date" placeholder="请选择年月日" style="width: 200px"></DatePicker>
            </FormItem>
          </Col>
          <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="归档份数：" prop="fileType" label-for="fileType">
              <Select
                v-model="data.trafficType"
                placeholder="1"
                element-id="trafficType"
                style="width: 200px"
              >
                <Option value>2</Option>
                <Option value>3</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
      </Card>

      <Card :bordered="false" class="ivu-mt">
        <Row :gutter="24">
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
            <FormItem label="施工单位：" prop="fileType" label-for="fileType">
              <Input
                v-model="data.contractId"
                placeholder="请输入施工单位"
                element-id="contractId"
                style="width: 200px"
              />
            </FormItem>
          </Col>
          <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="项目负责人：" prop="fileType" label-for="fileType">
              <Input
                v-model="data.contractId"
                placeholder="请输入项目负责人"
                element-id="contractId"
                style="width: 200px"
              />
            </FormItem>
          </Col>
          <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="项目状态：" prop="fileType" label-for="fileType">
              <Select
                v-model="data.trafficType"
                placeholder="选择状态"
                element-id="trafficType"
                style="width: 200px"
              >
                <Option value>1</Option>
                <Option value>2</Option>
              </Select>
            </FormItem>
          </Col>
          
          <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="项目开始时间：" prop="goTime" label-for="goTime">
              <DatePicker type="date" placeholder="请选择出发时间" style="width: 200px"></DatePicker>
            </FormItem>
          </Col>
          <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="项目结束时间：" prop="backTime" label-for="backTime">
              <DatePicker type="date" placeholder="请选择项目结束时间" style="width: 200px"></DatePicker>
            </FormItem>
          </Col>
         
          <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="设计单位：" prop="fileType" label-for="fileType">
              <Input
                v-model="data.contractId"
                placeholder="请输入设计单位"
                element-id="contractId"
                style="width: 200px"
              />
            </FormItem>
          </Col>
          <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="设计单位联系人：" prop="fileType" label-for="fileType" style="width: 200px">
              <Input
                v-model="data.contractId"
                placeholder="请输入设计单位联系人"
                element-id="contractId"
                style="width: 200px"
              />
            </FormItem>
          </Col>
          <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24">
            <FormItem label="设计单位地址：" prop="fileType" label-for="fileType">
              <Select
                v-model="data.trafficType"
                placeholder="设计单位地址"
                element-id="trafficType"
                style="width: 200px"
              >
                <Option value>1</Option>
                <Option value>2</Option>
              </Select>
            </FormItem>
          </Col>
          <Col :xl="24" :lg="24" :md="24" :sm="24" :xs="24">
            <FormItem label="备注信息：" prop="fileType" label-for="fileType">
              <Input
                v-model="value17"
                maxlength="100"
                show-word-limit
                type="textarea"
                placeholder="Enter something..."
                style="max-width: 81%"
              />
            </FormItem>
          </Col>
          <Col :xl="12" :lg="12" :md="12" :sm="12" :xs="24">
            <FormItem label="图像信息：" prop="remarks" label-for="remarks">
              <Upload multiple action="//jsonplaceholder.typicode.com/posts/">
                <Button icon="ios-cloud-upload-outline">可多图上传</Button>
              </Upload>
            </FormItem>
          </Col>
          <Col :xl="12" :lg="12" :md="12" :sm="12" :xs="24" >
            <div style="display:flex; flex-direction: column;">
                <Button type="button" style="width:100px;margin-bottom:10px">
                <span>扫描文件</span>
                </Button>
                <Button type="button" style="width:100px">
                <span>拍照文件</span>
                </Button>
            </div>
          </Col>
          <Col :xl="24" :lg="24" :md="24" :sm="24" :xs="24">
            <FormItem label="原始文件附件" prop="acc" label-for="fileType">
              <Input  v-model="data.acc" placeholder="文件标题名字" element-id="acc" style="width: 200px;margin-right:20px" />
              <Input v-model="data.acc" placeholder="对应编号" element-id="acc" style="width: 100px;margin-right:20px" />
              <Input v-model="data.acc" placeholder="备注信息" element-id="acc" style="width: 200px;margin-right:20px" />
            </FormItem>
          </Col>
           <Col :xl="24" :lg="24" :md="24" :sm="12" :xs="24">
            <Input  v-model="data.acc" placeholder="文件上传" element-id="acc" style="width: 200px;margin-right:20px" />
              <Button type="file" icon="ios-cloud-upload-outline">上传</Button>
              <Button type="button" style="margin-left:20px">
                <span>扫描文件</span>
              </Button>
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