import Lun from "./Qdindex/Lun.js"
import Nwe from "./Qdindex/Nwe.js"
import HN from './HDindex'
import wz from './HDindex/WzXx.js'
import Qdindex from './Qdindex/index'
import Ydindex from './Ydindex/index'
import Shopping from './Ydindex/Shopping'
import Sop from './Qdindex/Sop'
HN("/login","post")
wz("/login/index","post")
Qdindex("/Qdindex","post")
Lun("/Qdindex/Lun","post")
Ydindex("/Ydindex","post")
Shopping("/shopping","post")
Nwe("/Nwe","post")
Sop("/Sop","post")

