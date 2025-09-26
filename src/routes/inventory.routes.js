import { Router } from "express";
import {verifyJWT} from '../middlewares/authUser.middleware'
import { getInventory, getInventoryItems, increaseInventoryItemCount } from "../controllers/inventory.controller";

const router = Router()

router.get('/', verifyJWT, getInventory)
router.get('/:inventoryId', verifyJWT, getInventoryItems)
router.post('/:inventoryId/items/:itemId/', verifyJWT, increaseInventoryItemCount)


export default router