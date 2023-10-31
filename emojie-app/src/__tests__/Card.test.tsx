import {render, screen} from '@testing-library/react';
import Card from "../components/UI/Card";



test("if doesn't have children props", () => {

const { container } = render(
      <Card children={undefined} />
    );
expect(container.firstChild).toBeEmptyDOMElement();
});



test("if have children props", () => {
const { getByText } = render(
      <Card>
        <p>Child content</p>
      </Card>
    );
    expect(getByText('Child content')).toBeInTheDocument();
}); 