<template>
    <div>
        <div class="i-layout-page-header">
            <PageHeader title="客户阶段设置" hidden-breadcrumb />
        </div>
        <Card :bordered="false" dis-hover class="ivu-mt ">
            <Row>
                <Col :xl="{span: 12, offset: 6}" :lg="{span: 12, offset: 6}" :md="{span: 16, offset: 4}" :sm="{span: 20, offset: 2}" :xs="24">
                    <Form ref="form" :model="data" :rules="rules" :label-width="labelWidth" :label-position="labelPosition">
                        <FormItem label="第一阶段：" prop="title" label-for="title">
                            <Input v-model="data.title" placeholder="Al初选" element-id="title" />
                        </FormItem>
                        <FormItem label="第一阶段：" prop="content" label-for="content">
                            <Input v-model="data.content" placeholder="初步沟通" element-id="content" />
                        </FormItem>
                        <FormItem>
                            <Button type="primary" :loading="loading" @click="handleSubmit">提交</Button>
                            <Button class="ivu-ml">保存</Button>
                        </FormItem>
                    </Form>
                </Col>
            </Row>
        </Card>
    </div>
</template>
<script>
    import { mapState } from 'vuex';

    export default {
        name: 'form-basic-form',
        data () {
            return {
                data: {
                    title: '',
                    content: ''
                },
                rules: {
                    title: [
                        { required: true, message: '请输入会议的名称', trigger: 'blur' }
                    ],
                    content: [
                        { required: true, message: '请输入会议的内容简要', trigger: 'blur' }
                    ],
                },
                loading: false
            }
        },
        computed: {
            ...mapState('admin/layout', [
                'isMobile'
            ]),
            labelWidth () {
                return this.isMobile ? undefined : 140;
            },
            labelPosition () {
                return this.isMobile ? 'top' : 'right';
            }
        },
        methods: {
            handleSubmit () {
                this.$refs.form.validate((valid) => {
                    this.loading = true;
                    if (valid) {
                        setTimeout(() => {
                            this.$Message.success('会议室预定成功!');
                            this.loading = false;
                        }, 2000);
                    } else {
                        this.loading = false;
                    }
                });
            }
        }
    }
</script>
