import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send({ data: "Aqui va el modelo de datos"})
});

export { router };