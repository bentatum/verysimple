import { Dialog } from '@headlessui/react';
import { render, screen } from '@testing-library/react';
import DialogContent from './DialogContent';
import '@/test/mocks/window/IntersectionObserver';
import { createRef } from 'react';

beforeEach(() => {
  // mute focus trap warning
  jest.spyOn(console, 'warn').mockImplementation(() => {});
});

describe('DialogContent', () => {
  test('snapshot', () => {
    const { container } = render(
      <Dialog open onClose={() => {}}>
        <DialogContent>Test</DialogContent>
      </Dialog>
    );
    expect(container).toMatchSnapshot();
  });

  describe('appearance', () => {
    beforeEach(() => {
      render(
        <Dialog open onClose={() => {}}>
          <DialogContent>Test</DialogContent>
        </Dialog>
      );
    });
    test('side padding', () => {
      expect(screen.getByText('Test')).toHaveClass('px-6');
    });
    test('text size', () => {
      expect(screen.getByText('Test')).toHaveClass('text-base');
    });
  });

  describe('padding bottom', () => {
    test('default', () => {
      render(
        <Dialog open onClose={() => {}}>
          <DialogContent>Test</DialogContent>
        </Dialog>
      );
      expect(screen.getByText('Test')).toHaveClass('pb-8');
    });

    test('override', () => {
      render(
        <Dialog open onClose={() => {}}>
          <DialogContent className="pb-7">Test</DialogContent>
        </Dialog>
      );
      expect(screen.getByText('Test')).not.toHaveClass('pb-3');
      expect(screen.getByText('Test')).toHaveClass('pb-7');
    });
  });

  // @fixme
  it.skip("forwards the ref", () => {
    const ref = createRef<HTMLDivElement>();
    render(<DialogContent ref={ref}>test</DialogContent>);
    expect(ref.current).toBeInTheDocument();
  });
  it("has a display name", () => {
    expect(DialogContent.displayName).toBe("DialogContent");
  });
});
