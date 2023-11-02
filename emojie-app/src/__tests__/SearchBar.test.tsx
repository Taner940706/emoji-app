import {render, screen} from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import SearchBar from "../components/UI/SearchBar";



test("check component when button is not clicked", () => {
    const onSearch = jest.fn();
render(<SearchBar onSearch={onSearch} />);

const form = screen.getByTestId('search-form');
const button = screen.getByRole('button');
const input = screen.getByDisplayValue('');

const buttonStyle = window.getComputedStyle(button);
const inputStyle = window.getComputedStyle(input);


expect(form).toBeInTheDocument();
expect(button).toBeInTheDocument();
expect(input).toBeInTheDocument();
expect(inputStyle.backgroundColor).toBe('white');
expect(buttonStyle.color).toBe('ButtonText');

userEvent.hover(button);
expect(buttonStyle.backgroundColor).toBe('ButtonFace');


});

test("check component, when button is clicked", () => {
    const searchedString = "smile";
  const onSearch = jest.fn();
  render(<SearchBar onSearch={onSearch} />);

  const input = screen.getByDisplayValue('');
  const button = screen.getByRole('button'); // Locate the button element by its name

  userEvent.type(input, searchedString); // Type the search string into the input field
  userEvent.click(button); // Click the button

  expect(onSearch).toHaveBeenCalledWith(searchedString);
  expect(input).toHaveValue(searchedString);



});