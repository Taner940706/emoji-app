import {screen, waitFor, render} from '@testing-library/react';

import Emojies from '../components/Emojies';



describe("testing useEffect", () => {

test("if fetching is successfull when app is reload", async() => {

render(<Emojies />);

await waitFor(() => {

	const cardName = screen.getByText('Name: ', {exact: false});
	const cardCategory = screen.getByText('Category: ', {exact: false});
	const cardGroup = screen.getByText('Group: ', {exact: false});
	const cardUnicode = screen.getByText('Unicode: ', {exact: false});
	const loading = screen.getByText('Loading', {exact: true});
	const notFound = screen.getByText('Result not found!', {exact: true});



	const cardNameStyle = window.getComputedStyle(cardName);
	const cardCategoryStyle = window.getComputedStyle(cardCategory);
	const cardGroupStyle = window.getComputedStyle(cardGroup);
	const cardUnicodeStyle = window.getComputedStyle(cardUnicode);

	

	expect(cardName).toBeInTheDocument();

	expect(cardCategory).toBeInTheDocument();
	expect(cardGroup).toBeInTheDocument();
	expect(cardUnicode).toBeInTheDocument();
	expect(loading).not.toBeInTheDocument();
	expect(notFound).not.toBeInTheDocument();
	expect(cardNameStyle.backgroundColor).toBe('#adcad6');
	expect(cardCategoryStyle.backgroundColor).toBe('#adcad6');
	expect(cardGroupStyle.backgroundColor).toBe('#adcad6');
	expect(cardUnicodeStyle.backgroundColor).toBe('#adcad6');


});
});

test("if it failed", async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error("Doesn't show available emojies!"));
    render(<Emojies />);
  
    const loadingText = screen.getByText('Loading...');
  
    expect(loadingText).toBeInTheDocument();
  
    await waitFor(() => {
      const errorText = screen.getByText("Doesn't show available emojies!");
  
      expect(errorText).toBeInTheDocument();
    });
  });
})