<template>
    <div>
          <van-row>
            <van-col span="9">
                <div class="Top">
                  <img width="130px"  height="40px" src="../../../assets/img/logo.png"  />
                </div>
            </van-col>
             <van-col span="11">
                <div class="Top">
                  <van-search placeholder="关键词" background="#E4E7ED" v-model="value" />
                </div>
            </van-col>
             <van-col span="4">
                <div class="Top">
                    <van-button @click="Pc" size="small" type="primary">pc</van-button>
                </div>
            </van-col>
         </van-row>
      
       <INDEX v-if="Name"></INDEX>
       <router-view/>


     <div class="Top20"></div>
         <van-tabbar
            v-model="active"
            active-color="#409EFF"
            >
            <van-tabbar-item icon="home-o"  @click="Tz2">首页</van-tabbar-item>
            <van-tabbar-item icon="search"  @click="Tz1">商品</van-tabbar-item>
            <van-tabbar-item icon="setting-o" @click="Tz">设置</van-tabbar-item>
        </van-tabbar>

  
        
    </div>
</template>

<script>
import indxz from "./indexZ.vue"
export default {
    components:{
      INDEX:indxz
    },
   data(){
       return{
           value:"",
           active:"",
           Dh:[],
           Lx:[],
           Name:true,
          
       }
   },
   methods:{
       Pc(){
          this.$message({
                    message: 'Pc',
                    type: 'success'
                  });
          this.$router.push({
                  name: 'QDhome', 
                  query:{name:"Pc"}
                   // 路由的名称
               })
       },
       Tz(){
          this.$router.push({
                  name: 'Sz', 
                  query:{name:"Sz"}
                   // 路由的名称
          })
       },
       Tz1(){
            this.Name=false
            this.$router.push({
                  name: 'Shopping', 
                  query:{name:"Shopping"}
                   // 路由的名称
          })
       },
       Tz2(){
            this.Name=true
            this.$router.push({
                  name: 'vanhome', 
                  query:{name:"vanhome"}
                   // 路由的名称
          })
       }
   },
   created(){
              let $this=this
           this.axios({
                  url:"/Qdindex/Lun",
                  method:"post"
            }).then(function(rst){
                  console.log($this.Dh=rst.data.img)
                  console.log($this.Lx=rst.data.Lx)
            })
   }
}
</script>

<style lang="scss" scoped>
.Top20{
    width: 100%;
    height:70px;
}
.Top{
    width: 100%;
    height:60px;
    background-color:#E4E7ED;
    img{
        margin-top: 10px;
    }
    .van-search{
        padding-top: 15px;
    }
    .van-button{
        cursor: pointer;
        margin-top: 15px;
    }
    .van-button:hover{
        background-color:#409EFF; 
    }
}
.Lx:hover{
    background-color:#45c2f6;
    color: white !important;
    box-shadow: 0px 0px 10px silver;
}
.Lx{
    width: 100%;
    height:100px;
    cursor: pointer;
    text-align: center;
    margin-top: 10px;
    border-bottom: 1px #DCDFE6 solid;
    border-top: 1px #DCDFE6 solid;
            .Lx2{
            margin-top: 10px;
        }
        .Lx3{
        font-family: 'Lato',sans-serif;
        font-weight: 400;
        font-size: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        }
        .LX1{
            width: 100%;
            text-align: center;
            height:50px;
            font:35px "微软雅体";
            line-height:80px;
        
        }
}
.Bt{
    width: 100%;
    text-align: center;
    font: 20px "微软雅体";
    font-weight: bold;
    span{
        color: #45c2f6
    }
    margin-top: 20px;
}



</style>

