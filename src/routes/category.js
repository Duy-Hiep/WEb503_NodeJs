import express from 'express';
import { Create, Get, GetAll, Remove, Update } from '../controllers/category';
import { checkPerMission } from '../middlewares/checkPermission';

const router = express.Router();

router.get("/categories", GetAll)
router.get("/categories/:id", Get)
router.post("/categories",checkPerMission ,Create)
router.put("/categories/:id",checkPerMission, Update)
router.delete("/categories/:id",checkPerMission, Remove)

export default router