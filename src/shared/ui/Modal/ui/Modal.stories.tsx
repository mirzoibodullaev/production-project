import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";

const meta: Meta<typeof Modal> = {
    title: "shared/Modal",
    component: Modal,
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
    args: {
        children:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum reprehenderit aliquid asperiores. Sed placeat esse facere accusamus officiis, unde amet? Illum, alias vel cupiditate repudiandae ut minus deserunt veritatis facere",
    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {
    args: {
        isOpen: true,
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
    },
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
