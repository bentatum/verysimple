import { render, fireEvent, cleanup } from '@testing-library/react';
import Ripple from './Ripple';

describe('Ripple', () => {
  afterEach(cleanup);

  it('creates a ripple effect on click', () => {
    const { getByTestId } = render(
      <Ripple>
        <div data-testid="test-child">Test</div>
      </Ripple>
    );
    fireEvent.click(getByTestId('test-child'));
    expect(document.querySelector('.animate-ripple')).toBeInTheDocument();
  });

  it.skip('clears timeout on component unmount', () => {
    jest.useFakeTimers();
    const clearTimeoutSpy = jest.spyOn(global, 'clearTimeout');
    const { unmount } = render(
      <Ripple>
        <div>Test</div>
      </Ripple>
    );
    unmount();
    expect(clearTimeoutSpy).toHaveBeenCalledTimes(1);
    jest.useRealTimers();
  });

  it('passes modified props to child', () => {
    const { getByTestId } = render(
      <Ripple>
        <div data-testid="test-child" style={{ color: 'red' }}>Test</div>
      </Ripple>
    );
    fireEvent.click(getByTestId('test-child'));
    const child = getByTestId('test-child');
    expect(child).toHaveStyle('position: relative');
    expect(child.onclick).toBeDefined();
  });
});