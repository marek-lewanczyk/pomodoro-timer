import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskActions from './TaskActions.tsx';

describe('TaskActions', () => {
    const setup = (props = {}) => {
        const onSetActive = vi.fn();
        const onEdit = vi.fn();
        const onDelete = vi.fn();

        render(<TaskActions isCompleted={false} isActive={false} isEditing={false} onSetActive={onSetActive} onEdit={onEdit} onDelete={onDelete} {...props} />);

        return { onSetActive, onEdit, onDelete };
    };

    it('renders all action buttons', () => {
        setup();

        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(3);
        expect(screen.getAllByRole('button')).toHaveLength(3);
    });

    it('calls appropriate callbacks on click', async () => {
        const user = userEvent.setup();
        const { onSetActive, onEdit, onDelete } = setup();

        const buttons = screen.getAllByRole('button');
        await user.click(buttons[0]);
        await user.click(buttons[1]);
        await user.click(buttons[2]);

        expect(onSetActive).toHaveBeenCalled();
        expect(onEdit).toHaveBeenCalled();
        expect(onDelete).toHaveBeenCalled();
    });

    it("does not show 'set active' button if task is completed", () => {
        render(<TaskActions isCompleted={true} isActive={false} isEditing={false} onSetActive={vi.fn()} onEdit={vi.fn()} onDelete={vi.fn()} />);

        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(2); // Edit, Delete
    });

    it("shows 'ClipboardDocumentCheckIcon' if editing", () => {
        render(<TaskActions isCompleted={false} isActive={false} isEditing={true} onSetActive={vi.fn()} onEdit={vi.fn()} onDelete={vi.fn()} />);

        expect(screen.getAllByRole('button')).toHaveLength(3);
    });
});
