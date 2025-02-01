import {Router} from 'express';
const router=Router();
import {ConsultarProductos } from '../services/conexion.js';

router.get('/', (req,res) => res.render('index',{title:'Inicio'}))
router.get('/api/get-productos',async(req,res)=>{
    const productos=await ConsultarProductos();
    res.status(200).json(productos);
});


export default router;