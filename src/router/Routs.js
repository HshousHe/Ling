import _import from "./_inpforn"
import HDhome from './HDhome/index'
import Qdhome from './Qdhome/index/index.js'
import vanhome from './vanhome/index/index.js'
import Sz from './vanhome/index/Sz.js'
import GU from './vanhome/index/Gu.js'
import Dl from './vanhome/index/VandL.js'
export default[
    {
        path: '/',
        name: 'HDdl',
        component:_import('HTindex')
    }
].concat(HDhome,Qdhome,vanhome,Sz,GU,Dl)