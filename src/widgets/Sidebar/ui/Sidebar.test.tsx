import { render, screen, fireEvent } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { JSX } from "react";

const renderWithProviders = (component: JSX.Element) => {
    return render(<ThemeProvider>{component}</ThemeProvider>);
};

describe("Sidebar", () => {
    test("renders Sidebar", () => {
        renderWithProviders(<Sidebar />);
        expect(
            screen.getByRole("button", { name: /toggle/i })
        ).toBeInTheDocument();
    });

    test("toggles collapsed state on button click", () => {
        renderWithProviders(<Sidebar />);
        const toggleButton = screen.getByRole("button", { name: /toggle/i });

        const sidebar = screen.getByRole("complementary");
        expect(sidebar).not.toHaveClass("collapsed");

        fireEvent.click(toggleButton);
        expect(sidebar).toHaveClass("collapsed");

        fireEvent.click(toggleButton);
        expect(sidebar).not.toHaveClass("collapsed");
    });
});
