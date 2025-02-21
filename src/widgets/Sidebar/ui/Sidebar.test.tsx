import { JSX } from "react";
import { MemoryRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { render, screen, fireEvent } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { StoreProvider } from "app/providers/StoreProvider";
import i18n from "shared/config/i18n/i18nForTests";

const renderWithProviders = (component: JSX.Element) => {
    return render(
        <MemoryRouter>
            <StoreProvider>
                <I18nextProvider i18n={i18n}>
                    <ThemeProvider>{component}</ThemeProvider>
                </I18nextProvider>
            </StoreProvider>
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
