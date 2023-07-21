import { type TaxRateTable } from "../types/types";

const taxRates: { [key: string]: TaxRateTable } = {
    "2023-2024": [
        {
            min: 0,
            max: 18200,
            base: 0,
            rate: 0,
        },
        {
            min: 18201,
            max: 45000,
            base: 0,
            rate: 0.19,
        },
        {
            min: 45001,
            max: 120000,
            base: 5092,
            rate: 0.325,
        },
        {
            min: 120001,
            max: 180000,
            base: 29467,
            rate: 0.37,
        },
        {
            min: 180001,
            max: Infinity,
            base: 51667,
            rate: 0.45,
        },
    ],
    "2022-2023": [
        {
            min: 0,
            max: 18200,
            base: 0,
            rate: 0,
        },
        {
            min: 18201,
            max: 45000,
            base: 0,
            rate: 0.19,
        },
        {
            min: 45001,
            max: 120000,
            base: 5092,
            rate: 0.325,
        },
        {
            min: 120001,
            max: 180000,
            base: 29467,
            rate: 0.37,
        },
        {
            min: 180001,
            max: Infinity,
            base: 51667,
            rate: 0.45,
        },
    ],
    "2021-2022": [
        {
            min: 0,
            max: 18200,
            base: 0,
            rate: 0,
        },
        {
            min: 18201,
            max: 45000,
            base: 0,
            rate: 0.19,
        },
        {
            min: 45001,
            max: 120000,
            base: 5092,
            rate: 0.325,
        },
        {
            min: 120001,
            max: 180000,
            base: 29467,
            rate: 0.37,
        },
        {
            min: 180001,
            max: Infinity,
            base: 51667,
            rate: 0.45,
        },
    ],
    "2020-2021": [
        {
            min: 0,
            max: 18200,
            base: 0,
            rate: 0,
        },
        {
            min: 18201,
            max: 45000,
            base: 0,
            rate: 0.19,
        },
        {
            min: 45001,
            max: 120000,
            base: 5092,
            rate: 0.325,
        },
        {
            min: 120001,
            max: 180000,
            base: 29467,
            rate: 0.37,
        },
        {
            min: 180001,
            max: Infinity,
            base: 51667,
            rate: 0.45,
        },
    ],
};

export default taxRates;
