import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskForm from './TaskForm';
import { TasksProvider } from '@/context/TaskContext';

describe('TaskForm', () => {
  it('adds a task when form is submitted', async () => {
    const user = userEvent.setup();
    render(
      <TasksProvider>
        <TaskForm />
      </TasksProvider>,
    );

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: 'Add' });
    await user.type(input, 'Test task');
    await user.click(button);

    expect(input).toHaveValue('');
  });
});
