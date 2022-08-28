import { render, screen , fireEvent} from '@testing-library/react';
import App, { replaceCamelwithSpaces } from './App';

test('button has correct initial color', () => {
  render(<App />)

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue'})

  // expect the background color to be red
  expect(colorButton).toHaveStyle({backgroundColor: 'red'})

  // click button
  fireEvent.click(colorButton)

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue'})

  // expect the button text to be 'Change to Red'
  expect(colorButton.textContent).toBe('Change to red')
});

test('initial conditions', () => {
  render(<App />)

  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to blue'})
  expect(colorButton).toBeEnabled();

  // check that the cehckbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})

test('Checkbox disables button on first click and enables on second click', () => {
  render(<App />)

  /**
   * accessible name is for simple cases equal to e.g. the label of a form element,
   * or the text content of a button 
   * or the value of the aria-label
   */
  const checkbox = screen.getByRole('checkbox', { name: 'Disable Button'})
  const button = screen.getByRole('button')

  fireEvent.click(checkbox);
  expect(button).toBeDisabled()

  fireEvent.click(checkbox)
  expect(button).toBeEnabled()
})

test('Disabled button has gray background and reverts to red', () => {
  render(<App />)

  const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' })
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })

  // disable button
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle('background-color: gray')

  // re-enable button
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle('background-color: red')
   
})

test('Clicked disabled button has gray background and reverts to blue', () => {
  render(<App />)

  const checkbox = screen.getByRole('checkbox', { name : 'Disable Button' })
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })

  // initial button color is red
  expect(colorButton).toHaveStyle('background-color: red')

  // change button to blue
  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle('background-color: blue')

  // disable button
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle('background-color: gray')
  
  // re-enable button
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle('background-color: blue')
})

// for Unit testing a function
describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelwithSpaces('Red')).toBe('Red')
  });

  test('Works for one inner capital letter', () => {
    expect(replaceCamelwithSpaces('MidnightBlue')).toBe('Midnight Blue')
  })

  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelwithSpaces('MediumVioletRed')).toBe('Medium Violet Red') 
  })
})

/** Unit Testing Functions
 * Functions separate from components
 * - Used by several components
 * - Complex logix
 * 
 * Unit test if
 * - Complex logic difficult to test via functional tests
 * - Too many edge cases
 */
