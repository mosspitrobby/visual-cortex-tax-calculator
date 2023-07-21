import Router from "express";
import calculateTaxHander from "../handler/handlers";

const router = Router();
router.post("/calculate", calculateTaxHander);

export default router;
