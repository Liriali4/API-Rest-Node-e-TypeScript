import { Router } from "express"
import { StatusCodes } from "http-status-codes";

const router = Router();


router.get("/", (_req, res) => {
    res.send("API rodando 🚀: Método GET");
});

router.post("/teste", (req, res) => {
   // res.send("API rodando 🚀: Método POST");
    return res.status(StatusCodes.ACCEPTED).json(req.body);
});




export default router;
