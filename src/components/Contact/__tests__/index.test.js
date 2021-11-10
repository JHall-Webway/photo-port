import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact form is rendering', () => {
    it('renders', () => {
        render(<ContactForm />);
    });
    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('matches header', () => {
        const { getByTestId } = render(<ContactForm />);
        expect(getByTestId('link')).toHaveTextContent('Contact me');
    });
    it('matches button text', () => {
        const { getByTestId } = render(<ContactForm />);
        expect(getByTestId('submit')).toHaveTextContent('Submit');
    });
});