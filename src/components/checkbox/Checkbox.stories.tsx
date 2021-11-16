import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkbox, CheckBoxProps } from './Checkbox';

const meta: Meta = {
  title: 'Components/Checkbox/Default',
  component: Checkbox,
  argTypes: {
    initialState: {
      controls: '',
      options: ['enabled', 'disabled'],
    },
    ariaLabel: {
      type: 'string',
    },
  },
  // parameters: {
  //   controls: { expanded: true },
  // },
};

export default meta;

const Template: Story<CheckBoxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});

Default.args = {
  initialState: 'enabled',
};
