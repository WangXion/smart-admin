<template>
	<div>
		<div class="i-layout-page-header">
			<PageHeader title="档案类型" hidden-breadcrumb />
			<Button type="primary" @click="zeng= true" style="width:130px    width: 130px;
    position: absolute;
    right: 84px;
    top: 125px;">添加</Button>
			<Modal v-model="zeng" title="添加" @on-ok="asyncOKs">
				<Form :model="formTop1" label-position="top">
					<FormItem label="*类型">
					    <Select v-model="formTop1.input22">
			            <Option value="类型一">类型一</Option>
			            <Option value="类型二">类型二</Option>
	              	</Select>
					</FormItem>
					<FormItem label="案卷界面模版">
                      <i-Input v-model="formTop1.input23"></i-Input>
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
                    input22: "",
                    input23: "",

                },

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
