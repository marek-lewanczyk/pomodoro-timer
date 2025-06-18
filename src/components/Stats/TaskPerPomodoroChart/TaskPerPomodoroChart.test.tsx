import { render, screen } from '@testing-library/react';
import TaskPerPomodoroChart from './TaskPerPomodoroChart.tsx';
import { TasksProvider } from '../../../context/TaskContext.tsx'; // <- poprawiona nazwa

describe('TaskPerPomodoroChart', () => {
  it('renders the chart with heading', () => {
    render(
      <TasksProvider>
        <TaskPerPomodoroChart />
      </TasksProvider>,
    );

    const heading = screen.getByText(/Pomodoro per Task/i);
    expect(heading).toBeInTheDocument();
  });
});
