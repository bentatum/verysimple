/**
 * This function creates a promise that resolves after a specified number of milliseconds.
 * @param {number} ms - The number of milliseconds to wait before the promise resolves.
 * @returns {Promise<void>} A promise that resolves after the specified number of milliseconds.
 */

export function wait(ms: number): Promise<void> {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms);
  });
}
