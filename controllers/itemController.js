const Express = require("express");
const router = Express.Router();
const validateJWT = require("../middleware/validate-jwt");
const { ItemModel } = require("../models/itemModel");

//New Item --C
router.post("/", validateJWT, async (req, res) => {
  const { itemName, itemPhoto, description } = req.body.item;
  const itemEntry = {
    itemName,
    itemPhoto,
    description,
  };
  try {
    const newItem = await ItemModel.create(itemEntry);
    res.status(200).json(newItem);
  } catch {
    res.status(500).json({ error: err });
  }
  ItemModel.create(itemEntry);
});

//Get Item by ID  --R
router.get("/itembyid", async (req, res) => {
  const { id } = req.body.item;
  try {
    const results = await ItemModel.findAll({
      where: {
        itemid: id,
      },
    });
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

//Update Item --U
router.put("/update/:Id", validateJWT, async (req, res) => {
  const { itemName, itemPhoto, description } = req.body.item;
  const itemId = req.params.Id;

  const query = {
    where: {
      id: itemId,
    },
  };

  const updatedItem = {
    itemName: itemName,
    itemPhoto: itemPhoto,
    description: description,
  };

  try {
    const update = await ItemModel.update(updatedItem, query);
    res.status(200).json(update);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

//Delete Item --D
router.delete("/delete/:id", validateJWT, async (req, res) => {
  const itemId = req.params.id;

  try {
    const query = {
      where: {
        id: itemId,
      },
    };

    await ItemModel.destroy(query);
    res.status(200).json({ message: "Item Removed" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});
module.exports = router;
