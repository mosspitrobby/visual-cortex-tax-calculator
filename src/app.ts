import express, { type Request, type Express, type Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/routes";
import { errorHandler, requestBodyErrorHandler } from "./handler/error-handlers";

dotenv.config();
const port: string | number = process.env.PORT || "3000";

const app: Express = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Welcome to the Visual Cortex tax calculator!" });
});

app.use(requestBodyErrorHandler);
app.use("/api", router);

app.use(errorHandler);

if (process.env.NODE_ENV !== "test") {
    app.listen(port, () => {
        console.log(`listening on port ${port}`);
    });
}
export default app;
