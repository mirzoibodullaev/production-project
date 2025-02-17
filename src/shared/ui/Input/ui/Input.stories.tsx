import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";

const meta: Meta<typeof Input> = {
    title: "shared/Input",
    component: Input,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof Input>;

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
