/**
 * Creates a promise that resolves when the given element comes into view.
 * @param {HTMLElement} element - The element to observe.
 * @param {Object} options - The options for the IntersectionObserver.
 * @param {number} options.threshold - The threshold for the IntersectionObserver. Default is 1.
 * @returns {Object} An object containing the promise and a disconnect function.
 */
export function createInViewPromise(
  element: HTMLElement,
  options: { threshold?: number } = {}
): { promise: Promise<void>; disconnect: () => void } {
  let observer: IntersectionObserver | undefined;

  const promise = new Promise<void>((resolve) => {
    const threshold = options.threshold ?? 1;
    observer = new IntersectionObserver((entries) => {
      for (let i = 0; i < entries.length; i++) {
        const inView =
          entries[i].isIntersecting &&
          entries[i].intersectionRatio >= threshold;
        if (inView) return resolve();
      }
    }, options);
    observer.observe(element);
  });

  return {
    promise,
    disconnect: () => {
      if (observer) {
        observer.disconnect();
      }
    },
  };
}
