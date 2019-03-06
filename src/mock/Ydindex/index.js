export default function(url,methd){
    const Mock=require('mockjs');
    Mock.mock(url,methd,{
           Lunbo:[
                {
                   img:"../../../../static/i1.jpg",
                   img2:"../../../../static/i2.jpg",
                   tx1:"iPhone 8 Plus",
                   tx2:"￥5399.00元",
                   tx3:"iPhoneX",
                   tx4:"￥7100.00元"
                },
                {
                    img:"../../../../static/i4.jpg",
                    img2:"../../../../static/i5.jpg",
                    tx1:"MacBook Pro",
                    tx2:"￥10200.00元",
                    tx3:"小米笔记本Air 13.3 四核增强",
                    tx4:"￥4999.00元"
                 },
                 {
                    img:"../../../../static/i6.jpg",
                    img2:"../../../../static/i3.jpg",
                    tx1:"Apple Watch Series 3",
                    tx2:"￥2450.00元",
                    tx3:"魅族 HALO 激光蓝牙耳机",
                    tx4:"￥999.00元"
                 },
                 {
                    img:"../../../../static/i7.jpg",
                    img2:"../../../../static/i8.png",
                    tx1:"魅族 16th",
                    tx2:"￥2698.00元",
                    tx3:"iPhone 8",
                    tx4:"￥4399.00元"
                 },
           ],
           Wbl:[
               {
                img:"../../../../static/p1.jpg", 
                tx:"08",
                tx1:'2018',
                tx3:"蜕变，重生，终于等到你！"
               },
               {
                img:"../../../../static/p2.jpg", 
                tx:"08",
                tx1:'2018',
                tx3:"小米MIX 2S 翡翠色开售"
               }, {
                img:"../../../../static/p3.jpg", 
                tx:"08",
                tx1:'2018',
                tx3:"Apple Kyoto京都市四条通盛大开幕"
               }
           ],
           YdSz:[
              {
                 name:"账号资料"
              },
              {
                 name:"收货地址"
              },
              {
                 name:"帮助"
              },
              {
                 name:"购物车"
              }
           ],
           Soping:[
               {
                  name:" 小米"
               },
               {
                  name:"魅族"
               },
               {
                  name:"锤子"
               },
               {
                  name:"苹果"
               }
           ],
           MI:[
              {
                 name:"Mi"
              },
              {
                 name:"Apo"
              },
              {
                 name:"mEI"
              },
              {
                 name:"Cui"
              }
           ]
    })
}