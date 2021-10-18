import "@testing-library/jest-dom";
import { render, fireEvent } from '@testing-library/react';

import Checkbox from "./Checkbox";

describe('checkbox component', () => {
  const setup = () => {
    const checkbox = render(<Checkbox label="test-label" id="test-id" value="test-value" />);
    const label = checkbox.getByText("test-label");
    const input = checkbox.getByRole('checkbox', { name: "test-label" }) as HTMLInputElement;

    return {
      ...checkbox,
      input,
      label
    }
  }

  it('should render label', async () => {
    const { label } = setup();

    expect(label).toBeInTheDocument();
  });

  it('should be unchecked', () => {
    const { input } = setup();
    const checked = input.checked;

    expect(checked).toBe(false)
  });

  it('should be checked after click on label', () => {
    const { label, input } = setup();

    fireEvent.click(label);
    const checked = input.checked;

    expect(checked).toBe(true);
  });

  it('should be checked after click', () => {
    const { input } = setup();

    fireEvent.click(input);
    const checked = input.checked;

    expect(checked).toBe(true);
  });
});
