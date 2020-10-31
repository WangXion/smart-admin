<template>
    <div>
        <div class="i-layout-page-header">
            <PageHeader title="添加"  hidden-breadcrumb />
        </div>
         <Card :bordered="false" dis-hover class="ivu-mt" >
       <Form style="    margin-left: 72px;margin-top:20px">
       <FormItem label="发文机关" style="width:100%">
            <Input placeholder="单行输入" style="width:300px"></Input>
        </FormItem>
       <FormItem style="position: relative;" >
       <FormItem label="编号" >
            <Input placeholder="单行输入" style="width:300px"></Input>
        </FormItem>
         <FormItem label="类型" style="    position: relative;
    left: 394px;
    top: -33px;
}" >
            <Input placeholder="单行输入" style="width:300px"></Input>
        </FormItem>
        </FormItem>
         <FormItem label="标题" style="width:100%;position: relative; top: -28px;">
            <Input placeholder="单行输入" style="width:300px"></Input>
        </FormItem>
        <FormItem>
            <i-quill v-model="value" :min-height="400" />
            <Divider />
            <Button @click="handleAddText">增加文本</Button>
            <Button @click="handleAddImg" class="ivu-ml">增加图片</Button>
        </FormItem>
        <FormItem label="原文链接" style="width:100%">
            <Input placeholder="单行输入" style="width:300px"></Input>
        </FormItem>
        <FormItem label="原文PDF" style="width:100%">
            <Input placeholder="单行输入" style="width:300px"></Input>
           <Upload action="//jsonplaceholder.typicode.com/posts/" style="    position: relative;
    top: -33px;
    left: 354px;
}">
        <Button icon="ios-cloud-upload-outline">游览上传</Button>
          </Upload>
        </FormItem>
        <FormItem>
            <Button type="primary">提交</Button>
        </FormItem>
    </Form>
        </Card>

    </div>
</template>
<script>
    import iQuill from '@/components/quill';

    export default {
        name: 'editor-quill',
        components: { iQuill },
        data () {
            return {
                value: `<h1>iView Admin Pro</h1>`
            }
        },
        methods: {
            handleAddText () {
                this.value += '<p><span style="color: #19be6b;">新增加的内容。</span></p>';
            },
            handleAddImg () {
                this.value += '<p><img src="https://file.iviewui.com/dist/2ecd3b0452aa197097d5131afacab7b8.png"></p>';
            }
        }
    }
</script>
<style lang="less" scoped>
/deep/.ivu-form-item:not(:nth-child(1)) .ivu-form-item-content .ivu-input-wrapper input{
        margin-left: 26px;
    }
</style>