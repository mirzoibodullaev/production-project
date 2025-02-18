import type { Meta, StoryObj } from "@storybook/react";
import { LoginModal } from "./LoginModal";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof LoginModal> = {
    title: "features/LoginModal",
    component: LoginModal,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof LoginModal>;

export const Light: Story = {
    args: {
        isOpen: true,
    },
    decorators: [
        (Story) => (
            <ThemeProvider>
                {StoreDecorator({
                    loginForm: {
                        username: "",
                        password: "",
                        error: "",
                        isLoading: false,
                    },
                })(Story)}
            </ThemeProvider>
        ),
    ],
};

export const Dark: Story = {
    args: {
        isOpen: true,
    },
    decorators: [
        (Story) => (
            <ThemeProvider>
                <div className={`app ${Theme.DARK}`}>
                    {StoreDecorator({
                        loginForm: {
                            username: "",
                            password: "",
                            error: "",
                            isLoading: false,
                        },
                    })(Story)}
                </div>
            </ThemeProvider>
        ),
    ],
};
