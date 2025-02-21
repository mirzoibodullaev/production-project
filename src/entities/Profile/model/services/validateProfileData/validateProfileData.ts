import { Profile, ValidateProfileErrors } from "../../types/profile";

export const validateProfileData = (profile: Profile) => {
    const { age, firstname, lastname, username, city } = profile;

    if (!profile) {
        return [ValidateProfileErrors.NO_DATA];
    }

    const errors: ValidateProfileErrors[] = [];

    if (!firstname || !lastname) {
        errors.push(ValidateProfileErrors.INCORRET_USER_DATA);
    }

    if (!username) {
        errors.push(ValidateProfileErrors.INCORRET_USERNAME);
    }

    if (!city) {
        errors.push(ValidateProfileErrors.INCORRET_CITY);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileErrors.INCORRET_AGE);
    }

    return errors;
};
