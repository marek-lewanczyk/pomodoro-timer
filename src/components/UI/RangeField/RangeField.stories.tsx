import type { Meta, StoryObj } from '@storybook/react-vite';

import RangeField from './RangeField';
import { Formik } from 'formik';

const meta = {
    component: RangeField
} satisfies Meta<typeof RangeField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: args => (
        <Formik initialValues={{ [args.name]: '' }} onSubmit={() => {}}>
            <RangeField {...args} />
        </Formik>
    ),
    args: {
        name: 'volume',
        label: 'Volume',
        value: 50,
        min: 0,
        max: 100
    }
};
