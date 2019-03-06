<template>
    <div>
        <van-row>
                <van-col span="24">
                <div class="C">
                    <div class="c1"><router-link :to="{name:'Sz'}"><div class="Yop"><van-icon name="arrow-left" /></div></router-link>购物车</div>
                </div> 
                </van-col>
    </van-row>

    <van-card
    v-for="(v,index) in op"
    :key="v.key"
    tag="手机"
    :price="v.jia"
    :desc="v.name"  
    :title="v.name"
    :thumb="v.img"
    origin-price="10.00"
    >
  <div slot="footer">
    <van-button size="mini" @click="Ychu(index,1)">移除</van-button>
    <van-button size="mini">购买</van-button>
  </div>
</van-card>


    </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
const{mapState,mapGetters,mapMutations}=createNamespacedHelpers('us')
export default {
    created(){
       console.log(...mapState(['op']))
    },
    computed:{
        ...mapState(['op'])
    },
    methods:{
        Ychu(i,u){
            this.Topd(i,u)
        },
        ...mapMutations(["Topd"])
    }
}
</script>

<style lang="scss" scoped>
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

