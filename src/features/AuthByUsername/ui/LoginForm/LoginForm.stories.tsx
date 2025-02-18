import type { Meta, StoryObj } from "@storybook/react";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/storybook/StoreDecorator/StoreDecorator";
import LoginForm from "./LoginForm";

const meta: Meta<typeof LoginForm> = {
    title: "features/LoginForm",
    component: LoginForm,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: {
                username: "",
                password: "",
                error: "",
                isLoading: false,
            },
        }),
    ],
};

export const PrimaryDark: Story = {
    args: {},
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

export const WithError: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: {
                username: "admin",
                password: "admin",
                error: "Вы ввели неверный логин или пароль",
                isLoading: false,
            },
        }),
    ],
};

export const WithErrorDark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <ThemeProvider>
                <div className={`app ${Theme.DARK}`}>
                    {StoreDecorator({
                        loginForm: {
                            username: "admin",
                            password: "admin",
                            error: "Вы ввели неверный логин или пароль",
                            isLoading: false,
                        },
                    })(Story)}
                </div>
            </ThemeProvider>
        ),
    ],
};

export const WithLoading: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: {
                username: "",
                password: "",
                error: "",
                isLoading: true,
            },
        }),
    ],
};
