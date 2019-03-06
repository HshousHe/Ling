export default function(url,methd){
      const Mock=require('mockjs');
      Mock.mock(url,methd,{
            YH:'HMMHDGN',
            password:"123456"
      })
  }

