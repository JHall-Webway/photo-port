import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ''
import Modal from '..';

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};

const onClose = jest.fn();

afterEach(cleanup);

describe('Modal is rendering', () => {
    it('renders', () => {
        render(<Modal
            currentPhoto={currentPhoto}
            onClose={onClose}
        />);
    });
    it('matches snapshot', () => {
        const { asFragment } = render(<Modal currentPhoto={currentPhoto} onClose={onClose} />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('click event', () => {
    it('calls onClose handler', () => {
        const { getByText } = render(<Modal currentPhoto={currentPhoto} onClose={onClose} />);
        fireEvent.click(getByText('Close'));
        expect(onClose).toHaveBeenCalledTimes(1);
    });
})

