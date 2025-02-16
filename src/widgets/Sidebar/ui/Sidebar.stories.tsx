import { BrowserRouter } from "react-router-dom";
import type { Meta, StoryObj } from "@storybook/react";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";
import { Sidebar } from "./Sidebar";

const meta: Meta<typeof Sidebar> = {
    title: "widgets/Sidebar",
    component: Sidebar,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

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
