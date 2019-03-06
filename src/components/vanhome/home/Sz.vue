<template>
    <div>
        
        <van-row>
            <van-col span="24">
               <div class="C">
                  <div class="c1"><router-link :to="{name:name}"><div class="Yop"><van-icon name="arrow-left" /></div></router-link>{{Sz}}</div>
               </div> 
            </van-col>
        </van-row>

        <div  v-if="OP">
            <van-row>
                    <van-col span="24" v-for="v in Yd" :key="v.key">
                        <div class="Hm" @click="Tz(v.name)">
                            <span>{{v.name}}</span>
                        </div>
                    </van-col>
                </van-row>
                <van-button size="large" class="tZ" @click="Dl">登录</van-button>
        </div>

        <router-view/>
    </div>
</template>

<script>
export default {
   data(){
       return{
            activeName: '1',
            Yd:[],
            Sz:"设置",
            OP:true,
            name:"vanhome",
       }
   },
   methods:{
         Tz(i){
             if(i=="购物车"){
                 this.$message({
                    message: '购物车',
                    type: 'success'
                  });
                        this.$router.push({
                  name: 'Gu', 
                  query:{name:"购物车"}
                   // 路由的名称
                })
             }else if(i=="收货地址"){
                this.$message({
                    message: '收货地址',
                    type: 'success'
                  });
                 this.$router.push({
                  name: 'Shou', 
                  query:{name:"收货地址"}
                   // 路由的名称
                })
                this.OP=false
                this.Sz="收货地址"
             }
         },
         Dl(){
    
                        this.$router.push({
                  name: 'Dla', 
                  query:{name:"登录"}
                   // 路由的名称
                })
         }
   },
   created(){
    let $this=this
    this.axios({
        url:"/Ydindex",
        method:"post"
    }).then(function(rst){
        console.log($this.Yd=rst.data.YdSz)
    })
   }
}
</script>

<style lang="scss" scoped>
.Hm{
    width:100%;
    height:40px;
    border-bottom: 1px #DCDFE6 solid;
    cursor: pointer;
    text-align: left;
    line-height: 40px;
    span{
        margin-left: 10px;
        color: #323233;
        font-size: 14px;
        text-align: right;
    }
}
.Xs{
    width:1200px;
    position: relative;
    top: 0px;
    height:500px;
    color: #409EFF;
    background-color: green;
}
.tZ{
   background-color:#409EFF;
   color: white;
   cursor: pointer;
}
.C{
    width: 100%;
    height:40px;
    background-color: #DCDFE6;
    .c1{
        width:100%;
        text-align:center;
        float: left;
        line-height:40px;
        cursor: pointer;
    }
   
         .Yop{
             position: absolute;
             left: 0px;
           }
    
}
</style>

