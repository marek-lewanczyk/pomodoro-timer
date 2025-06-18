import { render, screen } from '@testing-library/react';
import Footer from './Footer.tsx';

vi.mock('@/components/MotivationalQuote.tsx', () => ({
  default: () => <p>Stay positive and work hard.</p>,
}));

describe('Footer', () => {
  it('renders the footer text and quote', async () => {
    render(<Footer />);

    expect(await screen.findByText('Stay positive and work hard.')).toBeInTheDocument();
    expect(screen.getByText('Made with ❤️ by')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Marek Lewańczyk' })).toHaveAttribute(
      'href',
      'https://github.com/marek-lewanczyk',
    );
  });
});
