import { BrowserRouter } from "react-router-dom";
import type { Meta, StoryObj } from "@storybook/react";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";
import { Navbar } from "./Navbar";

const meta: Meta<typeof Navbar> = {
    title: "widgets/Navbar",
    component: Navbar,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
    args: {},
    decorators: [
        (Story) => (
            <BrowserRouter>
                <ThemeProvider>
                    <div className={`app ${Theme.LIGHT}`}>
                        <Story />
                    </div>
                </ThemeProvider>
            </BrowserRouter>
        ),
    ],
};

export const Dark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <BrowserRouter>
                <ThemeProvider>
                    <div className={`app ${Theme.DARK}`}>
                        <Story />
                    </div>
                </ThemeProvider>
            </BrowserRouter>
        ),
    ],
};
