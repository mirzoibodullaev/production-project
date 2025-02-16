import type { Meta, StoryObj } from "@storybook/react";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";
import { PageError } from "./PageError";

const meta: Meta<typeof PageError> = {
    title: "widgets/PageError",
    component: PageError,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof PageError>;

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
