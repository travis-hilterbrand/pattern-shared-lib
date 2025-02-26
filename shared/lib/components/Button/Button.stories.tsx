import { StoryObj, StoryFn, Meta } from "@storybook/react";
//import { action } from "@storybook/addon-actions";
import { Button as ComponentType } from "./Button";

const meta: Meta<typeof ComponentType> = {
  component: ComponentType,
  args: {
    "data-testid": "my-test-id",
    label: "My button",
    variant: "primary",
    // see https://github.com/storybookjs/storybook/issues/15012
    //onClick: action("onClick"),
    //onBlur: action("onBlur"),
    //onFocus: action("onFocus"),
  },
};
export default meta;

const Template: StoryFn<typeof ComponentType> = (props) => {
  return <ComponentType {...props} />;
};

type Story = StoryObj<typeof ComponentType>;

export const Default: Story = {};

export const VariantPrimary: Story = {
  render: Template,
  args: {
    variant: "primary",
  },
};
export const VariantStandard: Story = {
  render: Template,
  args: {
    variant: "standard",
  },
};
