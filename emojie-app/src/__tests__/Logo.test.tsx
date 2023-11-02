import {render, screen, waitFor} from '@testing-library/react';

import Logo from '../components/UI/Logo';



test("if img and p are exist", async()=> {

render(<Logo />);

const img = screen.getByRole('img');
const parag = screen.getByText('Emojie - search engine for emojies!', {exact: true});

await waitFor(() => {
const paragStyle = window.getComputedStyle(parag).fontSize;
expect(paragStyle).toBe('60px');
})

expect(img).toBeInTheDocument();
expect(parag).toBeInTheDocument();
expect(img).toHaveAttribute('src', 'emojie.png');
expect(img).toHaveAttribute('alt', 'main logo');



});