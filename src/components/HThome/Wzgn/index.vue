<template>
    <div>
        <h1>导航栏</h1>
        <div class="DH">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
            <el-input v-model="input1" placeholder="请输入内容"></el-input>
            <el-input v-model="input2" placeholder="请输入内容"></el-input>
            <el-input v-model="input3" placeholder="请输入内容"></el-input>
            <el-button type="primary" @click="Qren">确认</el-button>
        </div>
    </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
const{mapState,mapGetters,mapMutations}=createNamespacedHelpers('us')
export default {
   data(){
       return{
           input:"",
           input1:"",
           input2:"",
           input3:"",
           op:[],
       }
   },
 computed:{
    ...mapGetters(["getmsg"])
  },
  methods:{
      Qren(){
            this.op.push(this.input)
            this.op.push(this.input1)
            this.op.push(this.input2)
            this.op.push(this.input3)
            this.Dh(this.op)
              this.$message({
                    message: '已进入前端页',
                    type: 'success'
                  });
              this.$router.push({
                  name: 'QDhome', 
                  query:{name:"已进入前端页"}
                   // 路由的名称
                })
         const h = this.$createElement;

            this.$notify({
            title: '提醒你',
            message: h('i', { style: 'color: teal'}, '你已进入前端页面')
            });
      },
      ...mapMutations(["Dh"])
  }
}
</script>

<style lang="scss" scoped>
.DH{
    width: 100%;
}
.DH>.el-input{
    width:10%;
}
</style>
