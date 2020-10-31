<template>
	<Form ref="form" :model="data" :rules="rules" :label-width="labelWidth" :label-position="labelPosition">
		<Row :gutter="24" type="flex" justify="end">
			<Col v-bind="grid">
			<FormItem label="档案编号" prop="name" label-for="name">
				<Input v-model="data.name" placeholder="DA003" element-id="name" />
			</FormItem>
			</Col>
			<Col v-bind="grid">
			<FormItem label="档案类型" prop="status1" label-for="status1">
				<Input v-model="data.cun" placeholder="合同档室" element-id="cun" />
			</FormItem>
			</Col>
			<Col v-bind="grid">
			<FormItem label="系统模版编号" prop="status2" label-for="statu2">
				<Input v-model="data.zu" placeholder="请输入系统模版编号" element-id="zu" />
			</FormItem>
			</Col>
			<Col v-bind="grid" class="ivu-text-right">
			<FormItem>
				<Button type="primary" @click="handleSubmit">查询</Button>
				<Button class="ivu-ml-8" @click="handleReset">重置</Button>
				<!-- <a v-font="14" class="ivu-ml-8" @click="collapse = !collapse">
                        <template v-if="!collapse">
                            展开 <Icon type="ios-arrow-down" />
                        </template>
                        <template v-else>
                            收起 <Icon type="ios-arrow-up" />
                        </template>
                    </a> -->
			</FormItem>
			</Col>
		</Row>
	</Form>
</template>
<script>
    import {
        mapState
    } from 'vuex';

    export default {
        data() {
            return {
                grid: {
                    xl: 6,
                    lg: 6,
                    md: 12,
                    sm: 24,
                    xs: 24
                },
                collapse: false,
                data: {
                    name: '',
                    status1: '',
                    status2: '',
                    status3: '',
                },
                rules: {

                }
            }
        },
        computed: {
            ...mapState('admin/layout', [
                'isMobile'
            ]),
            labelWidth() {
                return this.isMobile ? undefined : 100;
            },
            labelPosition() {
                return this.isMobile ? 'top' : 'right';
            }
        },
        methods: {
            handleSubmit() {
                this.$emit('on-submit', this.data);
            },
            handleReset() {
                this.$refs.form.resetFields();
                this.$emit('on-reset');
            }
        }
    }
</script>
