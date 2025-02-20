import type { Meta, StoryObj } from "@storybook/react";
import { ProfileCard } from "./ProfileCard";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof ProfileCard> = {
    title: "entities/ProfileCard",
    component: ProfileCard,
    parameters: {
        layout: "fullscreen",
    },
    args: {
        data: {
            firstname: "John",
            lastname: "Doe",
            city: "USA",
            username: "johndoe",
            country: Country.America,
            currency: Currency.USD,
            age: 22,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqafzhnwwYzuOTjTlaYMeQ7hxQLy_Wq8dnQg&s",
        },
    },
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Light: Story = {
    decorators: [
        (Story) => (
            <ThemeProvider>
                <div className={`app ${Theme.LIGHT}`}>
                    {StoreDecorator({})(Story)}
                </div>
            </ThemeProvider>
        ),
    ],
};

export const Dark: Story = {
    decorators: [
        (Story) => (
            <ThemeProvider>
                <div className={`app ${Theme.DARK}`}>
                    {StoreDecorator({})(Story)}
                </div>
            </ThemeProvider>
        ),
    ],
};

export const Loading: Story = {
    decorators: [
        (Story) => (
            <ThemeProvider>
                <div className={`app ${Theme.LIGHT}`}>
                    {StoreDecorator({})(Story)}
                </div>
            </ThemeProvider>
        ),
    ],
    args: {
        isLoading: true,
    },
};

export const WithError: Story = {
    decorators: [
        (Story) => (
            <ThemeProvider>
                <div className={`app ${Theme.LIGHT}`}>
                    {StoreDecorator({})(Story)}
                </div>
            </ThemeProvider>
        ),
    ],
    args: {
        error: "Ошибка при загрузке профиля",
    },
};
