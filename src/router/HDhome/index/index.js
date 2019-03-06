import _import from "../../_inpforn"
export default {
        path: '/HDhome',
        name: 'HDhome',
        component:_import('HThome/home.vue'),
        children:[
            {
                path: 'HDindex',
                name: 'HDindex',
                component:_import('HThome/home/index.vue'),
            },
            {
                path: 'GLY',
                name: 'GLY',
                component:_import('HThome/home/GLY.vue'),
            },
            {
                path: 'xI',
                name: 'xI',
                component:_import('HThome/home/xI.vue'),
            }
            ,
            {
                path: 'GN',
                name: 'GN',
                component:_import('HThome/Wzgn'),
            }
            // },{
            //     path: 'QDhome',
            //     name: 'QDhome',
            //     component:_import('QDhome/home/index.vue'),
            // }
        ]
}