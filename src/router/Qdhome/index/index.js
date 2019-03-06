import _import from "../../_inpforn"
export default {
        path: '/QDhome',
        name: 'QDhome',
        component:_import('QDhome/home'),
        children:[
                {
                        path: 'Dl',
                        name: 'Dl',
                        component:_import('QDhome/home/Dl'),
                },
                {
                        path: 'iphone',
                        name: 'iphone',
                        component: _import('QDhome/home/iphone'),
                },
                {
                        path: 'Nwe',
                        name: 'Nwe',
                        component: _import('QDhome/home/Nwe'),
                },
                {
                        path: 'Xm',
                        name: 'Xm',
                        component: _import('QDhome/home/Xm'),
                },
                {
                        path: 'Cuiz',
                        name: 'Cuiz',
                        component: _import('QDhome/home/Cuiz'),
                },
                {
                        path: 'Meiz',
                        name: 'Meiz',
                        component: _import('QDhome/home/Meiz'),
                },
                {
                        path: 'Soing',
                        name: 'Soing',
                        component: _import('QDhome/home/Soing'),
                },
                {
                        path: 'Gue',
                        name: 'Gue',
                        component: _import('QDhome/home/Gue'),
                },
                {
                        path: 'Gyu',
                        name: 'Gyu',
                        component: _import('QDhome/home/Gyu'),
                },
                {
                        path: 'Zuce',
                        name: 'Zuce',
                        component: _import('QDhome/home/Zuce'),
                }
        ]
}