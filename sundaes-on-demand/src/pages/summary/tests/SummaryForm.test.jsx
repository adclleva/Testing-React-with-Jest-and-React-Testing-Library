import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

test("Initial Conditions", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });

  expect(checkbox).not.toBeChecked();

  const confirmButton = screen.getByRole("button", { name: /Confirm Order/i });
  expect(confirmButton).toBeDisabled();
});

test("Checkbox enables button on first click and disables on second click", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });

  const confirmButton = screen.getByRole("button", { name: /Confirm Order/i });

  userEvent.click(checkbox);
  expect(confirmButton).toBeEnabled();

  userEvent.click(checkbox);
  expect(confirmButton).toBeDisabled();
});

test("popover response to hover", () => {
  render(<SummaryForm />);

  // popover starts out hidden
  const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);
  expect(nullPopover).not.toBeInTheDocument(); // jest assersion

  // popover appears upon mouseover of checkbox
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  userEvent.hover(termsAndConditions); // to hover over the popover

  const popover = screen.getByText(/no ice cream will actually be delivered/i); // getBy will throw an error
  expect(popover).toBeInTheDocument();

  // popover disappears when we mouse out
  userEvent.unhover(termsAndConditions);
  const nullPopoverAgain = screen.queryByText(/no ice cream will actually be delivered/i);
  expect(nullPopoverAgain).not.toBeInTheDocument();
});
