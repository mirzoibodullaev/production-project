import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

export enum ValidateProfileErrors {
    INCORRET_USER_DATA = "INCORRET_USER_DATA",
    INCORRET_AGE = "INCORRET_AGE",
    INCORRET_USERNAME = "INCORRET_USERNAME",
    INCORRET_CITY = "INCORRET_CITY",
    NO_DATA = "NO_DATA",
    SERVER_ERROR = "SERVER_ERROR",
}

export interface Profile {
    id?: string;
    firstname?: string;
    lastname?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    validateErrors?: ValidateProfileErrors[];
}
