import type { Meta, StoryObj } from "@storybook/react";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";
import { Navbar } from "./Navbar";
import { StoreDecorator } from "shared/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof Navbar> = {
    title: "widgets/Navbar",
    component: Navbar,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
    decorators: [StoreDecorator()],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
    args: {},
    decorators: [
        (Story) => (
            <ThemeProvider>
                <div className={`app ${Theme.LIGHT}`}>
                    <Story />
                </div>
            </ThemeProvider>
        ),
    ],
};

export const Dark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <ThemeProvider>
                <div className={`app ${Theme.DARK}`}>
                    <Story />
                </div>
            </ThemeProvider>
        ),
    ],
};
