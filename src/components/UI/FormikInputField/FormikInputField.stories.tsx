import type { Meta, StoryObj } from '@storybook/react-vite';
import { Formik } from 'formik';

import FormikInputField from './FormikInputField';

const meta = {
    component: FormikInputField
} satisfies Meta<typeof FormikInputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: args => (
        <Formik initialValues={{ [args.name]: '' }} onSubmit={() => {}}>
            <FormikInputField {...args} />
        </Formik>
    ),
    args: {
        label: 'Your name',
        name: 'name'
    }
};
