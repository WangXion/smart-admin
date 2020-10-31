<template>
  <div>
    <Card :bordered="false" dis-hover class="ivu-mt">
      <table-form @on-submit="getData" @on-reset="getData" />
      <div class="flexbox">
        <router-link to="file-month" class="cabinet">
          <div class="inner">
            <div>档案室</div>
            <div>2017</div>
          </div>
        </router-link>
        <router-link to="file-month" class="cabinet">
          <div class="inner">
            <div>档案室</div>
            <div>2018</div>
          </div>
        </router-link>
        <router-link to="file-month" class="cabinet">
          <div class="inner">
            <div>档案室</div>
            <div>2019</div>
          </div>
        </router-link>
        <router-link to="file-month" class="cabinet">
          <div class="inner">
            <div>档案室</div>
            <div>2020</div>
          </div>
        </router-link>
      </div>
    </Card>
  </div>
</template>
<script>
import tableForm from "./table-form";

export default {
  name: "list-table-list",
  components: { tableForm },
  data() {
    return {};
  },
  methods: {
    // handleMonth(){
    //     component: resolve => { require(['./pages/file-month/index.vue'], resolve); }
    // },
    getData() {
      this.$refs.table.getData();
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
<style lang="less" scoped>
/deep/ .flexbox {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom:30px
}
.cabinet {
  border: 10px solid #a9b4c5;
  width: 200px;
  height: 400px;
  position: relative;
}
.cabinet::after {
  content: "卷宗号";
  color: #fff;
  width: 60px;
  text-align: center;
  padding: 5px;
  background-color: #a9b4c5;
  position: absolute;
  bottom: -34px;
  left: 50%;
  margin-left: -30px;
}
.inner {
  border: 1px solid #d9dfe1;
  border-bottom: 5px solid #687da2;
  box-shadow: 0 0 3px #687da2;
  margin: 20px auto 0;
  font-size: 16px;
  width: 150px;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

