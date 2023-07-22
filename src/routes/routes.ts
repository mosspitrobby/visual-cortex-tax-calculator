import Router from "express";
import calculateTaxHander from "../handler/handlers";
import { requestBodyErrorHandler } from "../handler/error-handlers";

const router = Router();
router.post("/calculate", requestBodyErrorHandler, calculateTaxHander);

export default router;
