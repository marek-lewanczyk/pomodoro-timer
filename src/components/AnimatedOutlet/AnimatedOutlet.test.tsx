import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import AnimatedOutlet from './AnimatedOutlet.tsx';

function DummyPage() {
    return <div>Test Page</div>;
}

describe('AnimatedOutlet', () => {
    it('renders the Outlet content correctly', () => {
        render(
            <MemoryRouter initialEntries={['/test']}>
                <Routes>
                    <Route element={<AnimatedOutlet />}>
                        <Route path="/test" element={<DummyPage />} />
                    </Route>
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByText('Test Page')).toBeInTheDocument();
    });
});
