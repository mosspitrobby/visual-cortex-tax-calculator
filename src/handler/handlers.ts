import { type Request, type Response } from "express";
import formatterAUD from "../helper/helpers";
import { type IncomeInfo, type TaxRateRow, type TaxRateTable, type ResponseError } from "../types/types";
import taxRates from "../tax-rates/tax-rates";

export default function calculateTaxHander(req: Request, res: Response) {
    const info: IncomeInfo = req.body;

    const taxRateTable: TaxRateTable = taxRates[info.year];
    if (!taxRateTable) {
        const error: ResponseError = new Error("Cannot find tax rate table for year.");
        throw error;
    }

    const taxBracket: TaxRateRow | undefined = taxRateTable.find(
        (el) => info.income >= el.min && info.income <= el.max,
    );

    if (!taxBracket) {
        // Should never get here since the value must be positive and a number.
        const error: ResponseError = new Error("Tax bracket not found, are the tax year and income valid?");
        throw error;
    }

    let taxable = 0;

    if (taxBracket.min !== 0) {
        taxable = taxBracket.base + (info.income - (taxBracket.min - 1)) * taxBracket.rate;
    }

    return res.json({ message: `The estimated tax on your taxable income is: ${formatterAUD.format(taxable)}` });
}
