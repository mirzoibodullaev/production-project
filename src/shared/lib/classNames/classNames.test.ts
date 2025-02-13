import { classNames, Mods } from "./classNames";

describe("classNames", () => {
    test("returns only the base class when no mods or additional classes", () => {
        expect(classNames("base-class")).toBe("base-class");
    });

    test("includes additional classes", () => {
        expect(classNames("base-class", {}, ["extra1", "extra2"])).toBe(
            "base-class extra1 extra2"
        );
    });

    test("includes mods that are true", () => {
        const mods: Mods = { mod1: true, mod2: false, mod3: undefined };
        expect(classNames("base-class", mods)).toBe("base-class mod1");
    });

    test("includes additional classes and valid mods", () => {
        const mods: Mods = { mod1: true, mod2: "some-value", mod3: false };
        expect(classNames("base-class", mods, ["extra1", "extra2"])).toBe(
            "base-class extra1 extra2 mod1 mod2"
        );
    });

    test("handles empty base class", () => {
        expect(classNames("", { mod1: true }, ["extra1"])).toBe("extra1 mod1");
    });

    test("filters out falsy additional classes", () => {
        expect(
            classNames("base-class", {}, ["extra1", undefined, "", "extra2"])
        ).toBe("base-class extra1 extra2");
    });
});
