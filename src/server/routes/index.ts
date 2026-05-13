import { Router } from "express"
//import { StatusCodes } from "http-status-codes";

import { cidadeController } from "../controllers";



const router = Router();


router.get("/", (_req, res) => {
    res.send("API rodando 🚀: Método GET");
});

router.post("/cidades", cidadeController.create);




export default router;
