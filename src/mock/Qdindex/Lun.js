export default function(url,methd){
    const Mock=require('mockjs');
    Mock.mock(url,methd,{
          img:[
              "../../static/lun1.jpg",
              "../../static/lun2.jpg",
              "../../static/lun3.jpg",
              "../../static/lun4.jpg",
          ],
          Lx:[
              {
                 Tu:"el-icon-goods",
                 Txz:"品质至上",
                 Txx:"原装正品 全国联保 假一罚十 "
              },
              {
                Tu:"el-icon-service",
                Txz:"服务至上",
                Txx:"为您提供上帝般的服务  "
              },
              {
                Tu:"el-icon-time",
                Txz:"物流至闪 ",
                Txx:"顺丰包邮,快如闪电 "  
              },
              {
                Tu:"el-icon-document",
                Txz:"优惠至山",
                Txx:"独家优惠，打折多多 "  
              }
          ]
    })
}