<template>
    <DIV>
        <el-row>
             <el-col :xs="24" :sm="10" :md="5" :offset="2">
                <div class="IO">
                
                </div>
             </el-col>
              <el-col :xs="24" :sm="10" :md="5" :offset="2">
                <div class="IO">
                   
                </div>
             </el-col>
              <el-col :xs="24" :sm="10" :md="5" :offset="2">
                <div class="IO">
                  
                </div>
             </el-col>
        </el-row>
    </DIV>
</template>

<script>
export default {
     data(){
         return{

         }
     }
}
</script>

<style <style lang="scss" scoped>
.IO1{
    width: 100%;
    height: 200px;
}
.IO{
    width: 100%;
    height: 400px;
    background-color: white;
    margin-top: 10px;
    cursor: pointer;
}
.IO>img{
    width: 100%;
    height: 200px;
}
.IO:hover{
     box-shadow:0px 0px 10px silver;
}
</style>
