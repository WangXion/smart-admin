<template>
    <Tabs>
        <TabPane label="问题">
    <Menu active-name="1" :open-names="['1']">
        <Submenu name="1-1">
            <template slot="title">
                <Icon type="ios-analytics" />
                问题类型
            </template>
                <ul class="left" >
                    <li class="ta" @click='getDataId(index)' v-for="(item,index) in left" :key="index" :date-id='index'>{{item}}</li>
                </ul>
                <ul class="right">
                          <li  v-for="(item,index) in left" :key="index">{{item}}</li>
                </ul>
        </Submenu>

    </Menu>
        </TabPane>
        <TabPane label="常见问题">常见问题</TabPane>
        <TabPane label="下载手册">下载手册</TabPane>
    </Tabs>
</template>
<script>
    import $ from 'jquery';
    export default {
        data() {
            return {
                left:["新手必读","数据分析","系统管理","数据分析","任务管理","黑名单管","话术管理理","短信管理","售后服务"],
                right:["新手必读","数据分析","系统管理","数据分析","任务管理","黑名单管","话术管理理","短信管理","售后服务"]
            }
        },
        methods: {
            //问题切换
            getDataId(index) {
                $(".right li").eq(index).css("display","block").siblings().css("display","none")
               
            }
        },
    }
</script>
<style lang="less">
 .ivu-tabs-nav .ivu-tabs-tab{
    margin: 0 93px;
    }
.ivu-tabs-ink-bar{
          display: none;
    }
    .left{
        li{
                text-align: center;
                margin-bottom: 10px;
        }
    }
    .right{
        position: absolute;
        width: 1000px;
        top: 0;
        left: 265px;
        li{
            display: none;
        }
    }
</style>