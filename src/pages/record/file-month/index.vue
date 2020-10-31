<template>
    <div>
        <Card :bordered="false" dis-hover class="ivu-mt">
            <table-form @on-submit="getData" @on-reset="getData" />
            <div class="flexbox">
            <div class="cabinet">
                 <span class="yue">001档案柜</span>
               <div class="inner"> 
               </div>
                <div class="inner"> 
               </div>
           </div>
            <div class="cabinet">
                 <span class="yue">002档案柜</span>
               <div class="inner"> 
               </div>
                <div class="inner"> 
               </div>
           </div>
            <div class="cabinet">
                <span class="yue">003档案柜</span>
               <div class="inner"> 
               </div>
                <div class="inner"> 
               </div>
           </div>
           <div class="cabinet">
                <span class="yue">004档案柜</span>
               <div class="inner"> 
               </div>
                <div class="inner"> 
               </div>
           </div>
            <div class="cabinet">
                 <span class="yue">005档案柜</span>
               <div class="inner"> 
               </div>
                <div class="inner"> 
               </div>
           </div>
            <div class="cabinet">
                 <span class="yue">006档案柜</span>
               <div class="inner"> 
               </div>
                <div class="inner"> 
               </div>
           </div>
            </div>
          
        </Card>
    </div>
</template>
<script>
    import tableForm from './table-form';
   

    export default {
        name: 'list-table-list',
        components: { tableForm },
        data () {
            return {

            }
        },
        methods: {
            getData () {
                this.$refs.table.getData();
            }
        },
        mounted () {
            this.getData();
        }
    }
</script>
<style lang="less" scoped>
/deep/
.flexbox{
     display: flex;
     justify-content: space-around;
     align-items: center;
     margin-bottom:30px
}
.cabinet{
    border:10px solid #a9b4c5;
    width:15%;
    height: 300px;
    position: relative;
    display: flex;
   
}
.cabinet .yue{
    content: '';
    color: #fff;
    width:80px;
    text-align: center;
    padding: 5px;
    background-color: #a9b4c5;
    position: absolute;
    bottom: -34px;
    left: 50%;
    margin-left: -40px ;
}   
.inner{
    border:3px solid #d9dfe1;
    border-bottom: 5px solid #687da2;
    box-shadow: 0 0 3px #687da2;
    margin: 0 auto;
    font-size: 16px;
    width: 150px;
    height: 280px;
    display: flex;
}
</style>

