export default function(url,methd){
    const Mock=require('mockjs');
    Mock.mock(url,methd,{
           iAP:[
               {
                  name:"iPhone 8",
                  Jia:"7100",
                  Yjia:"7199",
                  Ig:4,
                  Jj:"炎炎八月，愈发精彩。iPhone X，你好未来。",
                  time:"2018-08-24 16:07:00",
                  img:[
                        {i:"../../../../static/Ip/i1.jpg"},
                        {i:"../../../../static/Ip/i2.jpg"},
                        {i:"../../../../static/Ip/i3.jpg"},
                   ]
               }
           ],
           Cui:[
            {
               name:"坚果 TNT 工作站（显示器）",
               Jia:"9999.00",
               Yjia:"19999.00",
               Ig:3,
               Jj:" 坚果 TNT 工作站（显示器）",
               time:"2018-08-24 12:02:59",
               img:[
                     {i:"../../../../static/Cz/CZ1.png"},
                     {i:"../../../../static/Cz/CZ2.png"},
                     {i:"../../../../static/Cz/CZ3.png"},
                ]
            }
        ],
        Mi:[
            {
               name:"小米MIX 2S",
               Jia:"2999.00",
               Yjia:"￥3500.00",
               Ig:2,
               Jj:"陶瓷机身手机中的艺术品/搭载高通骁龙845处理器/AI感光双摄,DxO百分相机/Qi无线充电",
               time:"2018-08-23 16:16:39",
               img:[
                     {i:"../../../../static/Mi/MI1.jpg"},
                     {i:"../../../../static/Mi/MI1.jpg"},
                     {i:"../../../../static/Mi/MI1.jpg"},
                ]
            }
        ],
        Mz:[
            {
               name:"魅族 HALO 激光蓝牙耳机",
               Jia:"999.00",
               Yjia:"￥1100.00",
               Ig:1,
               Jj:" 出色，所以出众个性张扬不受夜晚限制，随时随地发光芒，成为焦点。黑夜，从此成为你的主场！",
               time:"2018-08-23 18:11:44",
               img:[
                     {i:"../../../../static/Mz/M1.png"},
                     {i:"../../../../static/Mz/M2.png"},
                     {i:"../../../../static/Mz/M3.png"},
                ]
            }
        ],

    })
}