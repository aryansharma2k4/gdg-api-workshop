import { Inventory, InventoryItem, Item }  from '../models/inventory.model'

export const getInventory = async (req, res) => {
    return await Inventory.find({ manager: req.user._id });
}

