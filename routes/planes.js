const express = require("express");
const router = express.Router();
const { getPlanes, createPlane, getPlane } = require("../controllers/planes");
const path = require("path");
const multer = require("multer");

//показываем где хранить загружаемые файлы
const storage = multer.diskStorage({
  destination: "./assets/",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({
  storage,
});
router.get("/", getPlanes); //route get /api/planes - получить все самолеты
router.get("/:id", getPlane); //route get /api/planes/:id - получить конкретный самолет по айди
router.post("/", upload.single("planeImage"), createPlane); // route post /api/planes - создать самолет

module.exports = router;
