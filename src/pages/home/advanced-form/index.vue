<template>
    <div>
        <div class="i-layout-page-header">
            <PageHeader title="个人信息" hidden-breadcrumb />
        </div>
        <Form ref="form" :model="data" label-position="top" class="ivu-mt">
            <Card :bordered="false" dis-hover title="" class="ivu-mt i-table-no-border">
                <Table :data="tableData" :columns="columns">
                    <template slot-scope="{ row, index }" slot="name">
                        <Input type="text" v-model="editName" v-if="editIndex === index" />
                        <span v-else>{{ row.name }}</span>
                    </template>
                    <template slot-scope="{ row, index }" slot="password">
                        <Input type="text" v-model="editId" v-if="editIndex === index" />
                        <span v-else>{{ row.password }}</span>
                    </template>
                    <template slot-scope="{ row, index }" slot="department">
                        <Select v-model="editDepartment" v-if="editIndex === index" transfer>
                            <Option v-for="(value, key) in departments" :key="key" :value="key">{{ value }}</Option>
                        </Select>
                        <span v-else>{{ departments[row.department] }}</span>
                    </template>
                    <template slot-scope="{ row, index }" slot="action">
                        <div v-if="editIndex === index">
                            <Button @click="handleSave(index)" type="success" ghost size="small">
                                <template v-if="!addNew">保存</template>
                                <template v-else>添加</template>
                            </Button>
                            <Button @click="handleCancel" v-if="!addNew" :disabled="addNew" type="primary" ghost size="small" class="ivu-ml">取消</Button>
                            <Button @click="handleDelete(index)" v-else type="error" ghost size="small" class="ivu-ml">删除</Button>
                        </div>
                        <div v-else>
                            <Button @click="handleEdit(row, index)" :disabled="addNew" type="primary" ghost size="small">编辑</Button>
                            <Poptip
                                confirm
                                transfer
                                title="请联系管理员"
                                @on-ok="handleDelete(index)">
                                <Button :disabled="addNew" type="error" ghost size="small" class="ivu-ml">忘记密码</Button>
                            </Poptip>
                        </div>
                    </template>
                </Table>
                <Button :disabled="addNew" type="dashed" long icon="md-add" class="ivu-mt" @click="handleAdd">新增成员</Button>
            </Card>
        </Form>
        <!-- <FooterToolbar>
            <Button type="primary" :loading="loading" @click="handleSubmit" size="large">提交</Button>
        </FooterToolbar> -->
    </div>
</template>
<script>
    export default {
        name: 'form-advanced-form',
        data () {
            return {
                data: {
                    tripReason: '',
                    contractId: '',
                    tripTime: [],
                    approve: '',
                    emergencyType: 3,
                    fromCity: '',
                    goTime: '',
                    backTime: '',
                    trafficType: '',
                    toCity: ''
                },
            
                columns: [
                    {
                        title: '姓名',
                        slot: 'name',
                        minWidth: 120
                    },
                    {
                        title: '密码',
                        slot: 'password',
                        minWidth: 120
                    },
                    {
                        title: '所属部门',
                        slot: 'department',
                        minWidth: 120
                    },
                    {
                        title: '操作',
                        slot: 'action',
                        align: 'center',
                        width: 220
                    }
                ],
                tableData: [
                    {
                        name: 'Aresn',
                        password: '666666',
                        department: 'dev'
                    },
                ],
                departments: {
                    dev: '研发部',
                    design: '设计部',
                    pm: '产品部'
                },
                editIndex: -1,
                editName: '',
                editId: '',
                editDepartment: '',
                addNew: false,
                loading: false
            }
        },
        methods: {
            handleSave (index) {
                if (!this.editName || !this.editId || !this.editDepartment) {
                    this.$Message.error('请填写完整的成员信息！');
                    return;
                }
                this.tableData[index].name = this.editName;
                this.tableData[index].password = this.editId;
                this.tableData[index].department = this.editDepartment;
                this.editIndex = -1;
                this.addNew = false;
            },
            handleCancel () {
                this.editIndex = -1;
                this.addNew = false;
            },
            handleEdit (row, index) {
                this.editName = row.name;
                this.editId = row.password;
                this.editDepartment = row.department;
                this.editIndex = index;
            },
            handleDelete (index) {
                // this.tableData.splice(index, 1);
                // this.addNew = false;
            },
            handleAdd () {
                this.addNew = true;
                const row = {
                    name: '',
                    password: '',
                    department: ''
                };
                this.tableData.push(row);
                this.handleEdit(row, this.tableData.length - 1);
            },
            // handleSubmit () {
            //     this.$refs.form.validate((valid) => {
            //         this.loading = true;
            //         if (valid) {
            //             setTimeout(() => {
            //                 this.$Message.success('出差申请提交成功!');
            //                 this.loading = false;
            //             }, 2000);
            //         } else {
            //             this.loading = false;
            //         }
            //     });
            // }
        }
    }
</script>
