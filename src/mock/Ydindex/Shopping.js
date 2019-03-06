export default function(url,methd){
    const Mock=require('mockjs');
    Mock.mock(url,methd,{
         sP:[
             {
                 img:"../../../../static/R1.jpg",
                 name:"魅族16th"
             },
             {
                img:"../../../../static/R2.png",
                name:"魅族X8"
            },
            {
                img:"../../../../static/R3.jpg",
                name:"以旧换新"
            },
            {
                img:"../../../../static/R4.jpg",
                name:"魅族 zero "
            },
         ],
         Mz:[
             {
                 id:0,
                 img:"../../../../static/Mz/M1.png",
                 tx1:"魅族 X8",
                 tx2:"人脸指纹双解锁 旗舰双摄",
                 tx3:"￥",
                 tx4:"1298",
             },
             {
                id:1,
                img:"../../../../static/Mz/M2.png",
                tx1:"魅族 16th Plus",
                tx2:"骁龙845 屏幕下指纹",
                tx3:"￥",
                tx4:"2998",
            },
            {
                id:2,
                img:"../../../../static/Mz/M3.png",
                tx1:"魅族 16th",
                tx2:"骁龙845 AI加速 屏幕下指纹 AI双摄光学防抖",
                tx3:"￥",
                tx4:"2498",
            },
            {
                id:3,
                img:"../../../../static/Mz/M4.png",
                tx1:"魅族 16 X",
                tx2:"高通骁龙710 屏幕下指纹 旗舰双摄",
                tx3:"￥",
                tx4:"1798",
            },
            {
                id:4,
                img:"../../../../static/Mz/M5.png",
                tx1:"魅族 Note8",
                tx2:"全像素双核对焦大电池长续航",
                tx3:"￥",
                tx4:"999",
            },
            {
                id:5,
                img:"../../../../static/Mz/M6.png",
                tx1:"魅族 V8 高配版",
                tx2:"1200万+500万高清双摄",
                tx3:"￥",
                tx4:"898",
            }
         ],
         Mi1:[
             {
                img:"../../../../static/Mi/M1.jpg",
             },
             {
                img:"../../../../static/Mi/M2.jpg",
             },
             {
                img:"../../../../static/Mi/M3.jpg",
             }
         ],
         Cz:[
             {
                img:"../../../../static/Cz/C1.jpg",
             },
             {
                img:"../../../../static/Cz/C2.jpg",
             },
             {
                img:"../../../../static/Cz/C3.jpg",
             }
         ],
         Ui:[
            {
                img:"../../../../static/Mi/MI1.jpg",
                tx1:"小米8青春版6GB+64GB",
                tx2:"潮流镜面渐变色，2400万自拍旗舰",
                tx3:"￥",
                tx4:"1499",
            },
            {
                img:"../../../../static/Mi/MI2.png",
                tx1:"小米Play",
                tx2:"内置每月10GB高速流量，高颜值流光渐变色",
                tx3:"￥",
                tx4:"1099",
            },
            {
                img:"../../../../static/Mi/MI3.jpg",
                tx1:"小米8",
                tx2:"相机全新升级，960帧超慢动作",
                tx3:"￥",
                tx4:"2599",
            },
            {
                img:"../../../../static/Mi/MI4.jpg",
                tx1:"小米MIX 2S 8GB+256GB",
                tx2:"骁龙845 年度旗舰处理器，艺术品般陶瓷机身",
                tx3:"￥",
                tx4:"3399",
            },
            {
                img:"../../../../static/Mi/MI5.jpg",
                tx1:"小米6X 6GB+128GB",
                tx2:"轻薄美观的拍照手机",
                tx3:"￥",
                tx4:"3399",
            },
            {
                img:"../../../../static/Mi/MI6.jpg",
                tx1:"小米8",
                tx2:"相机全新升级,960帧超慢动作",
                tx3:"￥",
                tx4:"1499",
            }
         ],
         Cz1:[
            {
                img:"../../../../static/Cz/CZ1.png",
                tx1:"小米8青春版6GB+64GB",
                tx2:"潮流镜面渐变色，2400万自拍旗舰",
                tx3:"￥",
                tx4:"1499",
            },
            {
                img:"../../../../static/Cz/CZ2.png",
                tx1:"小米8青春版6GB+64GB",
                tx2:"潮流镜面渐变色，2400万自拍旗舰",
                tx3:"￥",
                tx4:"1499",
            },
            {
                img:"../../../../static/Cz/CZ3.png",
                tx1:"小米8青春版6GB+64GB",
                tx2:"潮流镜面渐变色，2400万自拍旗舰",
                tx3:"￥",
                tx4:"1499",
            },
            {
                img:"../../../../static/Cz/CZ4.png",
                tx1:"小米8青春版6GB+64GB",
                tx2:"潮流镜面渐变色，2400万自拍旗舰",
                tx3:"￥",
                tx4:"1499",
            },
            {
                img:"../../../../static/Cz/CZ5.jpg",
                tx1:"小米8青春版6GB+64GB",
                tx2:"潮流镜面渐变色，2400万自拍旗舰",
                tx3:"￥",
                tx4:"1499",
            },
            {
                img:"../../../../static/Cz/CZ6.jpg",
                tx1:"小米8青春版6GB+64GB",
                tx2:"潮流镜面渐变色，2400万自拍旗舰",
                tx3:"￥",
                tx4:"1499",
            },
          ],
          iP:[
              {
                img:"../../../../static/Ip/i1.jpg",
                tx1:"iPhone 8",
                tx2:"潮流镜面渐变色，2400万自拍旗舰",
                tx3:"￥",
                tx4:"4399.00元", 
              },
              {
                img:"../../../../static/Ip/i2.jpg",
                tx1:"iPhone 8 Plus",
                tx2:"潮流镜面渐变色，2400万自拍旗舰",
                tx3:"￥",
                tx4:"5399.00", 
              },
              {
                img:"../../../../static/Ip/i3.jpg",
                tx1:"iPhone X",
                tx2:" 炎炎八月，愈发精彩。iPhone X",
                tx3:"￥",
                tx4:"7100.00元", 
              },
              {
                img:"../../../../static/Ip/i4.png",
                tx1:"iPad Pro",
                tx2:"iPad Pro 不只能做到， 还能做到",
                tx3:"￥",
                tx4:"5143.00", 
              },
              {
                img:"../../../../static/Ip/i5.jpg",
                tx1:"Apple Watch Series 3",
                tx2:"三个圆环，圆一个梦",
                tx3:"￥",
                tx4:"2450.00", 
              },
              {
                img:"../../../../static/Ip/i6.jpg",
                tx1:"MacBook Pro",
                tx2:"MacBook Pro 更强劲,更专业",
                tx3:"￥",
                tx4:"10200.00", 
              }
          ]
    })
}