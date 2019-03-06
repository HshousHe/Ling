export default{

    getmsg:(state)=>state.username+state.age+"岁",
    Get:(state,io)=>{
          state.op=io
    }

}