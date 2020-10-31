<template>
	<div>
		<div class="i-layout-page-header">
			<PageHeader title="档案类型-模版" hidden-breadcrumb />
		</div>
		<Card :bordered="false" dis-hover class="ivu-mt">
			<table-form @on-submit="getData" @on-reset="getData" />
		</Card>
	</div>
</template>
<script>
    import tableForm from './table-form';

    export default {
        name: 'list-table-list',
        components: {
            tableForm
        },
        data() {
            return {

            }
        },
        methods: {
            getData() {
                // this.$refs.table.getData();
            }
        },
        mounted() {
            this.getData();
        }
    }
</script>
<style lang="less" scoped>
	/deep/.i-table-no-border .ivu-table th {
		background-color: #F8F8F9;
		//  color: red;
	}
</style>
