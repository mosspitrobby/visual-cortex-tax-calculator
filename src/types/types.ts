export interface IncomeInfo {
    year: string;
    income: number;
}

export interface ResponseError extends Error {
    status?: number;
}

export interface TaxRateRow {
    min: number;
    max: number;
    base: number;
    rate: number;
}

export type TaxRateTable = TaxRateRow[];

export function isTypeIncomeInfo(obj: object): obj is IncomeInfo {
    return "year" in obj && typeof obj.year === "string" && "income" in obj && typeof obj.income === "number";
}
