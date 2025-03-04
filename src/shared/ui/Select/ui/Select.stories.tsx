import type { Meta, StoryObj } from "@storybook/react";
import { Select, SelectOptions } from "./Select";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";

const meta: Meta<typeof Select> = {
    title: "shared/Select",
    component: Select,
    parameters: {
        layout: "fullscreen",
    },
    args: {
        label: "Выберите опцию",
        options: [
            { value: "option1", content: "Опция 1" },
            { value: "option2", content: "Опция 2" },
            { value: "option3", content: "Опция 3" },
        ] as Array<SelectOptions<string>>
    },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
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

export const Readonly: Story = {
    decorators: [
        (Story) => (
            <ThemeProvider>
                <div className={`app ${Theme.LIGHT}`}>
                    <Story />
                </div>
            </ThemeProvider>
        ),
    ],
    args: {
        readonly: true,
    },
};

export const DarkTheme: Story = {
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
