import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ButtonProps, Button } from './Button';

const meta: Meta = {
  title: 'Components/Button/Default',
  component: Button,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: 'Default Button',
};
