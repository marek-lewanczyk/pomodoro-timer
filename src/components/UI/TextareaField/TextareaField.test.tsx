import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextareaField from './TextareaField.tsx';

describe('TextareaField', () => {
  it('renders with label and placeholder', () => {
    render(
      <TextareaField
        label="Notes"
        name="notes"
        value=""
        onChange={() => {}}
        placeholder="Enter your notes..."
      />,
    );

    expect(screen.getByLabelText('Notes')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your notes...')).toBeInTheDocument();
  });

  it('displays the given value', () => {
    render(
      <TextareaField label="Message" name="message" value="Hello world" onChange={() => {}} />,
    );

    expect(screen.getByDisplayValue('Hello world')).toBeInTheDocument();
  });

  it('calls onChange when user types', async () => {
    const handleChange = vi.fn();

    render(
      <TextareaField label="Description" name="description" value="" onChange={handleChange} />,
    );

    const textarea = screen.getByLabelText('Description');
    await userEvent.type(textarea, 'test');

    expect(handleChange).toHaveBeenCalled();
  });
});
