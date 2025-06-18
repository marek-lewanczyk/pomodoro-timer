import { render, screen } from '@testing-library/react';
import { Form, Formik } from 'formik';
import FormikInputField from './FormikInputField.tsx';
import userEvent from '@testing-library/user-event';
import * as Yup from 'yup';

describe('FormikInputField', () => {
  it('renders label and input', () => {
    render(
      <Formik initialValues={{ testField: '' }} onSubmit={() => {}}>
        <Form>
          <FormikInputField name="testField" label="Test Label" />
        </Form>
      </Formik>,
    );

    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('respects input type and min/max', () => {
    render(
      <Formik initialValues={{ age: 5 }} onSubmit={() => {}}>
        <Form>
          <FormikInputField name="age" label="Age" fieldType="number" min={1} max={10} />
        </Form>
      </Formik>,
    );

    const input = screen.getByLabelText('Age') as HTMLInputElement;
    expect(input.type).toBe('number');
    expect(input.min).toBe('1');
    expect(input.max).toBe('10');
  });

  it('displays validation error', async () => {
    render(
      <Formik
        initialValues={{ email: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email').required('Required'),
        })}
        onSubmit={() => {}}
      >
        <Form>
          <FormikInputField name="email" label="Email" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>,
    );

    await userEvent.click(screen.getByText('Submit'));
    expect(await screen.findByText('Required')).toBeInTheDocument();
  });
});
