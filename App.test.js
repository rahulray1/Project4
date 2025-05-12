import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AppHeader component', () => {
  render(<App />);
  const headerElement = screen.getByText(/TechieBoom/i); // Match the text in AppHeader
  expect(headerElement).toBeInTheDocument();
});
