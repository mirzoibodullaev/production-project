import type { Meta, StoryObj } from "@storybook/react";
import { ProfilePageHeader } from "./ProfilePageHeader";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/storybook/StoreDecorator/StoreDecorator";
import { StateSchema } from "app/providers/StoreProvider";

const meta: Meta<typeof ProfilePageHeader> = {
  title: "pages/ProfilePageHeader",
  component: ProfilePageHeader,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof ProfilePageHeader>;

const baseState: DeepPartial<StateSchema> = {
  profile: {
    readonly: true,
  },
};

export const Readonly: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className={`app ${Theme.LIGHT}`}>
          {StoreDecorator(baseState)(Story)}
        </div>
      </ThemeProvider>
    ),
  ],
};

export const Editing: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className={`app ${Theme.LIGHT}`}>
          {StoreDecorator({
            profile: { readonly: false },
          })(Story)}
        </div>
      </ThemeProvider>
    ),
  ],
};

export const DarkMode: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className={`app ${Theme.DARK}`}>
          {StoreDecorator(baseState)(Story)}
        </div>
      </ThemeProvider>
    ),
  ],
};

export const EditingDarkMode: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className={`app ${Theme.DARK}`}>
          {StoreDecorator({
            profile: { readonly: false },
          })(Story)}
        </div>
      </ThemeProvider>
    ),
  ],
};
