const express = require('express');
const router = express.Router();
const estudanteController = require("../controllers/estudanteController");
const upload = require("../config/upload.js");
const apiKeyMiddleware = require("../config/apiKey"); // 🔐
router.use(apiKeyMiddleware); // 🔒 Protege todas as rotas

router.get("/estudante", estudanteController.getAllEstudantes);
router.get("/estudante/:id", estudanteController.getEstudanteById);
router.post("/estudante/", upload.single("photo"), estudanteController.createEstudante);
router.put("/estudante/:id", estudanteController.updateEstudante);
router.delete("/estudante/:id", estudanteController.deleteEstudante);

module.exports = router;