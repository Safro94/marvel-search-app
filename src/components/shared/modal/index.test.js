import React from 'react';
import { render, wait, waitForElement, fireEvent } from '@testing-library/react';

import Modal from './';

jest.mock('./style', () => {
  return {
    ModalContainer: 'modalContainer',
    Modal: 'modal',
    H1: 'h1',
    Close: 'close',
    CloseContainer: 'closeContainer',
  };
});

describe('<Modal /> ', () => {
  beforeEach(() => jest.clearAllMocks());
  const title = 'Title';
  const onClose = jest.fn();

  it('It should render OK', async () => {
    // Act
    const { container } = render(
      <Modal title={title} onClose={onClose}>
        <h2>Children</h2>
      </Modal>
    );
    await wait();

    // Assert
    expect(container).toMatchSnapshot();
  });

  it('When the close button is clicked, it should called the function passed by prop', async () => {
    // Act
    const { getByTestId } = render(
      <Modal title={title} onClose={onClose}>
        <h2>Children</h2>
      </Modal>
    );
    const close = await waitForElement(() => getByTestId('close'));
    fireEvent.click(close);

    // Assert
    expect(onClose).toBeCalledTimes(1);
  });
});
