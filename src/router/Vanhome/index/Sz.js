import _import from "../../_inpforn"
export default {
        path: '/Sz',
        name: 'Sz',
        component:_import('vanhome/home/Sz'),
        children:[
                {
                        path: 'Shou',
                        name: 'Shou',
                        component:_import('vanhome/home/Sou'),
                }
        ]
}