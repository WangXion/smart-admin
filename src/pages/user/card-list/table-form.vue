<template>
	<Form ref="form" :model="data" :rules="rules" :label-width="labelWidth" :label-position="labelPosition">
		<Row :gutter="24" type="flex" >

			<FormItem label="" prop="name" label-for="name">
					</Select>
						<Select style="width:200px" placeholder="选择故障类型">
					<Option value=""></Option>
					<Option value=""></Option>
				</Select>
					</Select>
						<Select  style="width:200px" placeholder="选择解决进展" >
					<Option value=""></Option>
					<Option value=""></Option>
					</Select>
					  <Row style="    display: flex;
    position: relative;
    top: -33px;
    left: 400px;">
        <Col>
            <DatePicker type="daterange" placement="bottom-end" placeholder="选择时间" style="width: 200px"></DatePicker>
        </Col>
		  </Row>
			</FormItem>


			<FormItem style="    margin-left: 100px;
    position: relative;
    left: 217px;">
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
	
		</Row>
	</Form>
</template>
<script>
    import {mapState} from 'vuex';
    export default {
        data() {
            return {
                grid: {
                    xl: 8,
                    lg: 8,
                    md: 12,
                    sm: 24,
                    xs: 24
                },
                collapse: false,
                data: {
                    name: '',
                    status1: '',
                    count: null,
                    date: '',
                    status2: '',
                    status3: ''
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
