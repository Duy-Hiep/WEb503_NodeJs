import express from 'express';
import { Create, Get, GetAll, Remove, Update } from '../controllers/category';

const router = express.Router();

router.get("/categories", GetAll)
router.get("/categories/:id", Get)
router.post("/categories", Create)
router.put("/categories/:id", Update)
router.delete("/categories/:id", Remove)

export default router