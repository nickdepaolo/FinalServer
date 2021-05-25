const Express = require("express");
const router = Express.Router();
const validateJWT = require("../middleware/validate-jwt");
const { ItemModel } = require("../models/");

//New Item --C
router.post("/", validateJWT, async (req, res) => {
  const { itemName, itemPhoto, description, userId, storeId } = req.body.item;
  const itemEntry = {
    itemName,
    itemPhoto,
    description,
    userId,
    storeId
  };
  try {
    const newItem = await ItemModel.create(itemEntry);
    res.status(200).json(newItem);
  } catch {
    res.status(500).json({ error: err });
  }
  ItemModel.create(itemEntry);
});

//Get Item by User  --R
router.get("/itembyid", validateJWT, async (req, res) => {
  const { id } = req.user;
  try {
    const results = await ItemModel.findAll({
      where: {
        userId: id,
      },
    });
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

//Update Item Name --U
router.put("/update", validateJWT, async (req, res) => {
  const { itemName, itemId} = req.body.item;
  // const itemId = req.body.id;

  const query = {
    where: {
      id: itemId
    }
  };

  const updatedItem = {
    itemName: itemName
  };

  try {
    const update = await ItemModel.update(updatedItem, query);
    res.status(200).json(update);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

//Update Item Description --U
router.put("/update2", validateJWT, async (req, res) => {
  const { description, itemId } = req.body.item;
  

  const query = {
    where: {
      id: itemId,
    },
  };

  const updatedItem = {
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
router.delete("/delete/", validateJWT, async (req, res) => {
  const {itemId} = req.body.item;

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
