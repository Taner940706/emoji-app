import {render, screen} from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import SearchBar from "../components/UI/SearchBar";



test("check component when button is not clicked", () => {
    const onSearch = jest.fn();
render(<SearchBar onSearch={onSearch} />);

const form = screen.getByTestId('search-form');
const button = screen.getByRole('button');
const input = screen.getByDisplayValue('');

expect(form).toBeInTheDocument();
expect(button).toBeInTheDocument();
expect(input).toBeInTheDocument();

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