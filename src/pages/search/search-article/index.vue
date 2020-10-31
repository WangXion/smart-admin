<template>

    <Form :model="formRight" label-position="right" :label-width="100">
        <FormItem label="借阅人">
            <Input v-model="formRight.input1" style="width:300px"></Input>
        </FormItem>
        <FormItem label="借阅帐号">
            <Input v-model="formRight.input2"  style="width:300px"></Input>
        </FormItem>
        <FormItem label="借阅档套编号">
            <Input v-model="formRight.input3"  style="width:300px"></Input>
        </FormItem>
        <FormItem label="是否需要审批">
           <Select style="width:300px">
          <Option value="">需要</Option>
          <Option value="">不需要</Option>
           </Select>
        </FormItem>
        <FormItem label="借阅天数">
            <Input v-model="formRight.input3"  style="width:300px"></Input>
        </FormItem>
        <FormItem label="审批流程">
                     <Select style="width:300px">
          <Option value="">审批流程1</Option>
          <Option value="">审批流程2</Option>
           </Select>
        </FormItem>
        <FormItem>
            <Button type="primary">确认登记</Button>
            <!-- <Button style="margin-left: 8px">取消</Button> -->
        </FormItem>
    </Form>
</template>
<script>
    export default {
        data () {
            return {
                formRight: {
                    input1: '',
                    input2: '',
                    input3: ''
                },
            }
        }
    }
</script>