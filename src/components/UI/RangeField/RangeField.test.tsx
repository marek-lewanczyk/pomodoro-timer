import { fireEvent, render, screen } from '@testing-library/react';
import { Form, Formik } from 'formik';
import RangeField from './RangeField.tsx';

describe('RangeField', () => {
  it('renders the slider with label and value', () => {
    render(
      <Formik initialValues={{ volume: 60 }} onSubmit={() => {}}>
        <Form>
          <RangeField name="volume" label="Volume" value={60} />
        </Form>
      </Formik>,
    );

    const slider = screen.getByRole('slider');
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveAttribute('type', 'range');
    expect(slider).toHaveValue('60');
  });

  it('allows user to change the range value', () => {
    render(
      <Formik initialValues={{ volume: 60 }} onSubmit={() => {}}>
        <Form>
          <RangeField name="volume" label="Volume" value={60} />
        </Form>
      </Formik>,
    );

    const slider = screen.getByRole('slider') as HTMLInputElement;

    fireEvent.change(slider, { target: { value: '80' } });

    expect(slider.value).toBe('80');
  });
});
