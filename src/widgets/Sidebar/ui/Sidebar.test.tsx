import { MemoryRouter } from "react-router-dom";
import { JSX } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { ThemeProvider } from "app/providers/ThemeProvider";

const renderWithProviders = (component: JSX.Element) => {
    return render(
        <MemoryRouter>
            <ThemeProvider>{component}</ThemeProvider>
        </MemoryRouter>
    );
};

describe("Sidebar", () => {
    test("renders Sidebar", () => {
        renderWithProviders(<Sidebar />);
        expect(screen.getByTestId("toggle-btn")).toBeInTheDocument();
    });

    test("toggles collapsed state on button click", () => {
        renderWithProviders(<Sidebar />);
        const toggleButton = screen.getByTestId("toggle-btn");

        const sidebar = screen.getByRole("complementary");
        expect(sidebar).not.toHaveClass("collapsed");

        fireEvent.click(toggleButton);
        expect(sidebar).toHaveClass("collapsed");

        fireEvent.click(toggleButton);
        expect(sidebar).not.toHaveClass("collapsed");
    });
});
