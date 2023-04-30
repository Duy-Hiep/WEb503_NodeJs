import express from 'express';
import { Create, Get, GetAll, Remove, Update } from '../controllers/product';
import { checkPerMission } from '../middlewares/checkPermission';


const router = express.Router();

router.get("/products",GetAll)
router.get("/products/:id", Get)
router.post("/products", checkPerMission,Create)
router.put("/products/:id", checkPerMission,Update)
router.delete("/products/:id",checkPerMission, Remove)

export default router