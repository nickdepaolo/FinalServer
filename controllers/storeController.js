const Express = require("express");
const router = Express.Router();
const { StoreModel } = require("../models");
const {validateJWT} = require("../middleware");

//Create New Store
router.post("/", validateJWT, async (req, res) => {
  const {contactInfo} = req.body.store;
  const { id } = req.user;
  const storeEntry = {
    userId: id,
    contactInfo: contactInfo
  };

  try {
    const newStore = await StoreModel.create(storeEntry);
    res.status(200).json(newStore);
  } catch (err) {
    res.status(500).json({error: err});
  }
  // StoreModel.create(storeEntry);
});

//Get Store By Id
router.get("/mystore", validateJWT, async (req, res) => {
  const { id } = req.user;
  try {
    const store = await StoreModel.findOne({
      where: {
        userId: id,
      },
    });
    res.status(200).json(store);
  } catch {
    res.status(500).json({ error: err });
  }
});

//Update Store Name
router.put("/update", validateJWT, async (req, res) => {
  const {storeId, contactInfo} = req.body.store;
 
  const query = {
    where: {
      id: storeId,
    },
  };

  const updatedDescription = {
    contactInfo: contactInfo,
  };

  try {
    const update = await StoreModel.update(updatedDescription, query);
    res.status(200).json(update);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

//Update description
router.put("/update2", validateJWT, async (req, res) => {
  const {storeId, storeDes} = req.body.store;
 
  const query = {
    where: {
      id: storeId,
    },
  };

  const updatedDescription = {
    storeDes: storeDes,
  };

  try {
    const update = await StoreModel.update(updatedDescription, query);
    res.status(200).json(update);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

//Delete Contact Info
router.put("/delete", validateJWT, async (req, res) => {
  const {storeId, contactInfo} = req.body.store;

  try {
    const query = {
      where: {
        id: storeId,
      },
    };

    const deletedInfo = {
      contactInfo: contactInfo,
    };

    const update = await StoreModel.update(deletedInfo, query);
    res.status(200).json({ message: "Contact Info Removed" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
