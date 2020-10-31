<template>
    <div>
        <div class="i-layout-page-header">
            <PageHeader title="合同档案详情" hidden-breadcrumb />
        </div>
        <Card :bordered="false" dis-hover class="ivu-mt i-table-no-border">
            <DescriptionList>
                <Description term="档案类型：">文书档案</Description>
                <Description term="档案编号：">MYHZHT20200501001</Description>
                <Description term="档案柜号：">10</Description>
                <Description term="年度：">2002</Description>
                <Description term="保管期限：">长期</Description>
                <Description term="档案标题：">2005年档案咨询及技术服务合同</Description>
                 <Description term="密级：">三级</Description>
                <Description term="部门：">部门3级连动管理</Description>
                <Description term="检查人：">xxx</Description>
                <Description term="归档日期：">1991-05-14</Description>
                <Description term="页数：">162</Description>
                <Description term="存放地点：">北京市朝阳区</Description>
            </DescriptionList>
            <Divider />
            
        </Card>
    </div>
</template>
<script>
    export default {
        name: 'profile-basic',
        data () {
            return {
                columns: [
                    {
                        title: '姓名',
                        slot: 'name',
                        minWidth: 140
                    },
                    {
                        title: '性别',
                        slot: 'gender',
                        minWidth: 140
                    },
                    {
                        title: '城市',
                        key: 'city',
                        minWidth: 140
                    },
                    {
                        title: '邮箱',
                        key: 'mail',
                        minWidth: 180
                    }
                ]
              
            }
        }
    }
</script>
