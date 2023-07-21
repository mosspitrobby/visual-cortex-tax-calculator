import supertest from "supertest";
import app from "../src/app";

describe("Test routes/routes.ts", () => {
    it("Should hit health check", async () => {
        const res = await supertest(app).get("/");
        expect(res.body).toEqual({ message: "Welcome to the Visual Cortex tax calculator!" });
    });

    test("Should give /calculate response, given correct request", async () => {
        const payload = {
            year: "2023-2024",
            income: 80000,
        };
        const response = { message: "The estimated tax on your taxable income is: A$16,467.00" };

        const requester = supertest(app);
        const res = await requester.post("/api/calculate").send(payload);
        expect(res.body).toEqual(response);
    });

    test("Should throw 500 if cannot find tax rate data for given year.", async () => {
        const payload = {
            year: "2023-2026",
            income: 80000,
        };

        const requester = supertest(app);
        await requester.post("/api/calculate").send(payload).expect(500);
    });

    test("Should throw 400 if income is negative.", async () => {
        const payload = {
            year: "2023-202",
            income: -80000,
        };

        const requester = supertest(app);
        await requester.post("/api/calculate").send(payload).expect(400);
    });

    test("Should throw 400 if income is a string.", async () => {
        // Could support this but cleaner to make it a number.
        const payload = {
            year: "2023-202",
            income: "fgfg",
        };

        const requester = supertest(app);
        await requester.post("/api/calculate").send(payload).expect(400);
    });

    test("Should throw 404 if hitting wrong url", async () => {
        // Could support this but cleaner to make it a number.
        const payload = {
            year: "2023-202",
            income: 80000,
        };

        const requester = supertest(app);
        await requester.post("/sillyboy").send(payload).expect(404);
    });
});
