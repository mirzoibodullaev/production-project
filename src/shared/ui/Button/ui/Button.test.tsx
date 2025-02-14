import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button, ButtonTheme } from "./Button";

describe("Button", () => {
    test("renders Button component", () => {
        render(<Button>Click me</Button>);
        expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument();
    });

    test("applies custom className", () => {
        render(<Button className="custom-class">Click me</Button>);
        expect(screen.getByRole("button")).toHaveClass("custom-class");
    });

    test("applies theme class", () => {
        render(<Button theme={ButtonTheme.CLEAR}>Click me</Button>);
        expect(screen.getByRole("button")).toHaveClass("clear");
    });

    test("calls onClick handler when clicked", async () => {
        const onClick = jest.fn();
        render(<Button onClick={onClick}>Click me</Button>);
        await userEvent.click(screen.getByRole("button"));
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
