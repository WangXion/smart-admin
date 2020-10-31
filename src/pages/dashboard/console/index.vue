<template>
	<div>
		<div class="i-layout-page-header">
			<PageHeader title="权限管理" hidden-breadcrumb />
			<Button type="primary" @click="zeng= true" style="width:130px    width: 130px;
    position: absolute;
    right: 84px;
    top: 125px;">添加账号</Button>
			<Modal v-model="zeng" title="添加账号" @on-ok="asyncOKs">
				<Form :model="formTop1" label-position="top">
					<FormItem label="*手机号">
						<i-Input v-model="formTop1.input11"></i-Input>
					</FormItem>
					<FormItem label="*密码">
						<i-Input v-model="formTop1.input22"></i-Input>
					</FormItem>
					<FormItem label="*角色">
						<Select placeholder="请选择">
							<Option :value="0">子账号</Option>
							<Option :value="1">父账号</Option>
						</Select>
					</FormItem>
					<FormItem label="*部门信息">
                     <Cascader :data="data" trigger="hover"></Cascader>
					</FormItem>
				</Form>
			</Modal>
		</div>
		<Card :bordered="false" dis-hover class="ivu-mt">
			<table-form @on-submit="getData" @on-reset="getData" />
			<table-list ref="table" />
		</Card>
	</div>
</template>
<script>
    import tableForm from './table-form';
    import tableList from './table-list';

    export default {
        name: 'list-table-list',
        components: {
            tableForm,
            tableList
        },
        data() {
            return {
                zeng: false,
                formTop1: {
                    input11: "",
                    input22: ""
                },
                data: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }]

            }

        },
        methods: {
            getData() {
                this.$refs.table.getData();
            },
            asyncOKs() {
                setTimeout(() => {
                    this.zeng = false;
                }, 2000);
            },
        },
        mounted() {
            this.getData();
        }
    }
</script>
