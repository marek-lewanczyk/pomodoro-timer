import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import TextareaField from './TextareaField';

const meta = {
  component: TextareaField,
} satisfies Meta<typeof TextareaField>;

export default meta;
type Story = StoryObj<typeof TextareaField>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value || '');

    return <TextareaField {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
  },
  args: {
    label: 'Opis',
    name: 'description',
    value: '',
    placeholder: 'Wpisz opis...',
  },
};
