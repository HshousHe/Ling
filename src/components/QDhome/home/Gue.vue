<template>
    <div>
        <div class="Gu">
             <el-row >
                 <el-col v-for="(v,index) in sop" :key="v.key"  :md="12" :xs="24" :sm="24">
                    <div class="Gu1">
                         <div class="Gu11">
                             <img width="100%" height="120px" :src="v.img" />
                         </div>
                          <div class="Gu12">
                             <span>{{v.name}}</span><br/>
                             <span>￥{{v.jia}}</span><br/>
                             <span>数量:{{v.nue}}</span>
                             <div class="Gu121">
                                     <div class="Gu21" @click="Ychu(index,1)">移除</div>
                                     <div class="Gu21">购买</div>
                             </div>
                         </div>
                    </div>
                 </el-col>
             </el-row>
        </div>
    </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
const{mapState,mapGetters,mapMutations}=createNamespacedHelpers('us')
export default {
    data(){
         return{
             IO:[]
         }
    },
      computed:{
        ...mapState(['sop'])
    },
    methods:{
       Ychu(i,u){
            if(this.sop.length==1){
               this.clearShop()
            }else{
               this.Topda(i,u)
            }
        },
        ...mapMutations(["Topda"]),
         ...mapMutations(["Asop"]),
          ...mapMutations(["clearShop"]),
    }
}
</script>

<style lang="scss" scoped>
.Gu21{
    width:48%;
    height: 35px;
    float: left;
    text-align: center;
    font: 14px "微软雅体";
    line-height: 35px;
    cursor: pointer;
    background-color:#E6A23C;
    color: white;
}
.Gu21:last-child{
    margin-left:1%;
    background-color:#F56C6C;
}
.Gu121{
    width:150px;
    height:35px;
    margin-top:20px;
}
.Gu11{
    width:120px;
    height: 120px;
    float: left;
    margin-top:15px;
    margin-left: 3%;
    
}
.Gu12{
    width:70%;
    height: 120px;
    float: left;
    margin-top:15px;
    border-right:1px #C0C4CC solid; 
    background-color: #DCDFE6; 
    span:first-child{
       font: 15px "微软雅体";
       font-weight: bold;
    }
     span:nth-child(3){
       font: 15px "微软雅体";
       color:red;
    }
    span:nth-child(5){
       font: 15px "微软雅体";
       color:salmon;
    }
}
.Gu1{
    width: 100%;
    height: 150px;
    background-color: #DCDFE6;
}
.Gu{
    width:78%;
    margin: 0px auto;
    margin-top: 20px;
}
@media (max-width:650px){
.Gu12{
    width: 100%;
}
}
</style>

