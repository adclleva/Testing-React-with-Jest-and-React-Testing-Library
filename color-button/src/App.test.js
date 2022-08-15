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

/**
 * RTL helps with:
 * - rendering components into virtual DOM
 * - searching virtual DOM
 * - Interacting with virtual DOM
 * 
 * Needs a test runner:
 * - find tests, run them. make assertions
 * 
 * Jest:
 * - is recommended by Testing Library
 * - comes with create-react-app
 * 
 * npm test runs an npm script that runs Jest in watch mode
 */

/**
 * watchmode
 * 
 * watch for changes in files since last commit
 * Only run tests related to these files
 * No changes? No tests
 * - Type a to run all tests
 */