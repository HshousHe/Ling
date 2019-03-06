<template>
    <div>
              <el-row>
                  <el-col v-for="v in xx" :key="v.key" :xs="24" :sm="10" :md="4" :offset="2">
                      <router-link :to="{name:'xI',query:{id:v.id}}">
                          <div class="op">
                             <div class="op1">
                                 <i :class="v.i"></i>
                             </div>
                             <DIV class="OP2">
                                 <DIV class="OP21">{{v.name}}</DIV>    
                                 <div>{{v.Nue}}</div> 
                             </DIV>
                        </div>
                      </router-link> 
                  </el-col>
              </el-row>

            <el-row>
                <el-col :span="24">
                     <div class="Bai">
                            最新用户
                         <el-button type="primary">查看更多<i class="el-icon-arrow-right"></i></el-button>
                     </div>
                </el-col>
            </el-row>

            <template>
            <el-table
                :data="tableData"
                stripe
                 border
                style="width: 100%">
                <el-table-column
                prop="date"
                label="注册日期"
                width="180">
                </el-table-column>
                <el-table-column
                prop="name"
                label="用户名"
                width="180">
                </el-table-column>
                <el-table-column
                prop="address"
                label="用户密码">
                </el-table-column>
                <el-table-column
                prop="addJs"
                label="用户介绍">
                </el-table-column>
                <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
                </el-table-column>
            </el-table>
            </template> 

            <el-row>
                <el-col :span="24">
                     <div class="Bai">
                            最新反馈
                         <el-button type="primary">查看更多<i class="el-icon-arrow-right"></i></el-button>
                     </div>
                </el-col>
            </el-row>

            <template>
            <el-table
                :data="FK"
                stripe
                 border
                style="width: 100%">
                <el-table-column
                prop="date"
                label="反馈日期"
                width="180">
                </el-table-column>
                <el-table-column
                prop="name"
                label="用户名"
                width="180">
                </el-table-column>
                <el-table-column
                prop="addJs"
                label="反馈内容">
                </el-table-column>
                <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
                </el-table-column>
            </el-table>
            </template> 

             <el-row>
                <el-col :span="24">
                     <div class="Bai">
                            最新收入
                         <el-button type="primary">查看更多<i class="el-icon-arrow-right"></i></el-button>
                     </div>
                </el-col>
            </el-row>

            <template>
            <el-table
                :data="Gm"
                stripe
                 border
                style="width: 100%">
                <el-table-column
                prop="date"
                label="购买日期"
                width="180">
                </el-table-column>
                <el-table-column
                prop="name"
                label="购买用户"
                width="180">
                </el-table-column>
                <el-table-column
                prop="addJs"
                label="购买商品">
                </el-table-column>
                 <el-table-column
                prop="Sr"
                label="商品价格">
                </el-table-column>
                <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">退款</el-button>
                </template>
                </el-table-column>
            </el-table>
            </template> 

    </div>
</template>

<script>
export default {
   data(){
       return{
           tableData:[],
           FK:[],
           Gm:[],
           xx:[],
       }
   },
   created(){
       let $this=this
       this.axios({
                  url:"/login/index",
                  method:"post"
            }).then(function(rst){
                  console.log($this.tableData=rst.data[0].YH)
                  console.log($this.FK=rst.data[0].fk)
                  console.log($this.Gm=rst.data[0].GW)
                  console.log($this.xx=rst.data[0].xx)
       })

   }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/css/HTindex.scss';
.Bai{
    width: 100%;
    text-align:center;
    font: 25px "微软雅体";
    margin-top: 20px;
}
.Bai>.el-button{
     float:right;
}
.op{
     @include op;
     cursor: pointer;
     margin-top: 20px;
     margin-left: -60px;
  }
 .OP21{
     margin-top:40px;
 } 
.OP2{
    width:70%;
    height:140px;
    float: left;
    font: 24PX "微软雅体";
}  
  .op1{
      width: 30%;
      height: 140px;
       float: left;
      font: 60PX "微软雅体";
      line-height:140px;
      text-align: center;
  }
  .op:hover{
      color: white;
      background-color: #409EFF;
  }
   @media (max-width:992px ){
       .op{
           height:100px;
            margin-left: -8%
       }
       .OP2{
      height:100px;
      margin-top:-20px
       }  
     .op1{
      height:100px;
       line-height:100px;
     }
   }
   @media (max-width:768px ){
       .op{
           margin-left: -8%;
          font: 50PX "微软雅体";
       }
   }
</style>
