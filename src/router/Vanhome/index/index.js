import _import from "../../_inpforn"
export default {
        path: '/vanhome',
        name: 'vanhome',
        component:_import('vanhome/home'),
        children:[
                {
                        path: 'Shopping',
                        name: 'Shopping',
                        component:_import('vanhome/home/Shopping'),
                }
        ]
}