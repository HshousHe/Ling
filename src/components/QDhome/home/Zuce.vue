<template>
    <div>
        <el-row>
            <el-col  :md="8" :xs="24" :sm="12">
                <div class="Zc">
                     <div class="Zc1">会员注册</div>
                     <br/>
               
                    <el-input placeholder="请输入内容" v-model="input3">
                        <template  slot="prepend">
                            <span class="Vanic">
                                <van-icon name="friends-o" />
                            </span>
                        </template>
                    </el-input>
                    <br/>
                    <br/>
                     <el-input placeholder="密码" v-model="input3">
                        <template  slot="prepend">
                            <span class="Vanic">
                                <van-icon name="newspaper-o" />
                            </span>
                        </template>
                    </el-input>
                    <br/>
                    <br/>
                     <el-input placeholder="重复密码" v-model="input3">
                        <template  slot="prepend">
                            <span class="Vanic">
                                <van-icon name="newspaper-o" />
                            </span>
                        </template>
                    </el-input>

                  <div class="Gj">更多资料</div>

                  <el-form ref="form" :model="form" label-width="100px">
                 
                    <br/>
                    <el-form-item label="公司名称">
                        <el-input v-model="name" placeholder="公司名称"></el-input>
                    </el-form-item>
                    <el-form-item label="公司传真">
                        <el-input v-model="name" placeholder="公司传真"></el-input>
                    </el-form-item>
                    <el-form-item label="公司联系地址">
                        <el-input v-model="name" placeholder="公司联系地址"></el-input>
                    </el-form-item>
                    <el-form-item label="公司邮政编码">
                        <el-input v-model="name" placeholder="公司邮政编码"></el-input>
                    </el-form-item>
                      <el-form-item label="公司网址">
                        <el-input v-model="name" placeholder="公司网址"></el-input>
                    </el-form-item>
                  </el-form> 
                <div class="Dl">
                     <el-button type="primary">主要按钮</el-button>
                </div>
                </div>
            </el-col>
        </el-row>
       

        <div class="Topz"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
           form:"",
           name:""
        }
    }
}
</script>

<style lang="scss" scoped>
.Dl{
    width: 100%;
}
.el-button{
    width: 100%;
}
.Gj{
    width: 100%;
    height:35px;
    text-align: center;
    color: #C0C4CC;
    line-height: 35px;
    border-bottom: 1px #DCDFE6 solid;
}
.Vanic{
    font:25px "微软雅体";
}
.Zc{
    width: 100%;
    height:700px;
    margin: 0px auto;
    margin-left:100%;

}
.Topz{
    width: 100%;
    height:30px;
}
.Zc1{
    width: 100%;
    height:50px;
    text-align: center;
    font: 22px "微软雅体";
    line-height:50px;
}
@media (max-width:990px){
.Zc{
    margin-left: 50%;
}
}
@media (max-width:750px){
.Zc{
    margin-left:0%;
}
}
</style>

