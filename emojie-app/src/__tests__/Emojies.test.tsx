import {screen, waitFor, render, fireEvent} from '@testing-library/react';

import Emojies from '../components/Emojies';
import Card from '../components/UI/Card';



// describe("testing useEffect", () => {

// test("if fetching is successfull when app is reload", async() => {

// render(<Emojies />);

// await waitFor(() => {

// 	const cardName = screen.getByText('Name: ', {exact: false});
// 	const cardCategory = screen.getByText('Category: ', {exact: false});
// 	const cardGroup = screen.getByText('Group: ', {exact: false});
// 	const cardUnicode = screen.getByText('Unicode: ', {exact: false});
// 	const loading = screen.getByText('Loading', {exact: true});
// 	const notFound = screen.getByText('Result not found!', {exact: true});



// 	const cardNameStyle = window.getComputedStyle(cardName);
// 	const cardCategoryStyle = window.getComputedStyle(cardCategory);
// 	const cardGroupStyle = window.getComputedStyle(cardGroup);
// 	const cardUnicodeStyle = window.getComputedStyle(cardUnicode);

	

// 	expect(cardName).toBeInTheDocument();

// 	expect(cardCategory).toBeInTheDocument();
// 	expect(cardGroup).toBeInTheDocument();
// 	expect(cardUnicode).toBeInTheDocument();
// 	expect(loading).not.toBeInTheDocument();
// 	expect(notFound).not.toBeInTheDocument();
// 	expect(cardNameStyle.backgroundColor).toBe('#adcad6');
// 	expect(cardCategoryStyle.backgroundColor).toBe('#adcad6');
// 	expect(cardGroupStyle.backgroundColor).toBe('#adcad6');
// 	expect(cardUnicodeStyle.backgroundColor).toBe('#adcad6');


// });
// });

// test("if it failed", async () => {
//     global.fetch = jest.fn().mockRejectedValue(new Error("Doesn't show available emojies!"));
//     render(<Emojies />);
  
//     const loadingText = screen.getByText('Loading...');
  
//     expect(loadingText).toBeInTheDocument();
  
//     await waitFor(() => {
//       const errorText = screen.getByText("Doesn't show available emojies!");
  
//       expect(errorText).toBeInTheDocument();
//     });
//   });
// })

describe("Integration tests when Emojies and SearchBar interact with each other", () => {
    test("if searched emoji is found and not found", async () => {
        render(<Emojies />);

  // Simulate user input by typing into the search bar
  const searchInput = screen.getByPlaceholderText('Search');
  fireEvent.change(searchInput, { target: { value: 'banana' } });

  // Submit the search form
  const searchForm = screen.getByTestId('search-form');
  fireEvent.submit(searchForm);

  // Wait for the results to update (you can use waitFor if async operations are involved)

    const nameCard = await screen.findByText('Name: banana');


  // Verify that the result is displayed
  expect(nameCard).not.toBeNull();
  expect(screen.queryByText('Result not found!')).toBeNull(); // No "Result not found" message

  // Now let's simulate a search that should return no results
  fireEvent.change(searchInput, { target: { value: 'nonexistent' } });
  fireEvent.submit(searchForm);

  // Wait for the "Result not found" message to appear
  await screen.findByText('Result not found!');

  // Verify that the "Result not found" message is displayed
  expect(screen.getByText('Result not found!')).toBeInTheDocument();
  expect(screen.queryByText('Name:')).toBeNull(); // No results should be displayed

        
    });
});