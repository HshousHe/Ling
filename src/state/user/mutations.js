export default {
     Topd:(state,i)=>{
         state.op.splice(i,i);
     },
     Topda:(state,i)=>{
         state.sop.splice(i,i);    
    },
     Dh:(state,i)=>{
        state.DH=i;
     },
     AddSOP:(state,i)=>{
         state.op=i
     },
     Asop:(state,i)=>{
        state.sop.push(i)
    },
    clearShop:(state)=>{
        state.sop=[];
    }
}
