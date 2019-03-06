<template>
    <div>
        <el-row>
            <el-col :xs="24" :sm="24" :md="24" >
                <div class="Top">
                    <div class="Top1">
                         <el-input  placeholder="请输入内容" v-model="input5">
                            <el-select v-model="select" slot="prepend" class="ip" placeholder="请选择">
                            <el-option label="id名" value="1"></el-option>
                            <el-option label="用户名" value="2"></el-option>
                            </el-select>
                            <el-button slot="append" icon="el-icon-search"></el-button>
                        </el-input>
                    </div> 
                </div>
            </el-col>
        </el-row>
        

            <template v-if="op">
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

          

            <template v-if="ip">
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

        

            <template v-if="up">
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

            <el-pagination
                :page-size="20"
                :pager-count="11"
                layout="prev, pager, next"
                :total="1000">
            </el-pagination>
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
           input5:'',
           select:"",
           op:false,
           ip:false,
           up:false,
       }
   },
   created(){
       let $this=this
       let id=this.$route.query.id
       this.axios({
                  url:"/login/index",
                  method:"post"
            }).then(function(rst){
                  console.log($this.tableData=rst.data[0].YH)
                  console.log($this.FK=rst.data[0].fk)
                  console.log($this.Gm=rst.data[0].GW)
                  console.log($this.xx=rst.data[0].xx)
       })
      if(id==1){
          this.op=true
      }else if(id==2){
          this.ip=true
      }else if(id==3){
          this.up=true
      }
   }
}
</script>
<style lang="scss" scoped>
.ip{
    width:90px !important;
}
.Top1{
    width: 30%;
    float:right; 
}
 .Top{
     width: 100%;
     height:40px;
     background-color:#DCDFE6; 
 }
    @media (max-width:992px ){
        .Top1{ 
          width: 70%;
        }
    }
     @media (max-width:780px ){
        .Top1{ 
          width: 100%;
        }
    }
</style>

