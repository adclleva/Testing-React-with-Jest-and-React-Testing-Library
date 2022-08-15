import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn testing/i);
  expect(linkElement).toBeInTheDocument();
});

/**
 * assertions use an expect method
 * it expects an argument, matcher, and matcher argumet
 */

/**
 * jest-dom, comes with the create-react-app
 * src/setup Tests.sj imports it before each test and makes matchers available
 * DOM-based matchers
 *  ex: toBeVisible() or toBeChecked()
 */