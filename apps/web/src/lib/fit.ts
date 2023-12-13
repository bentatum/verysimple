/**
 * This function calculates the dimensions and position of a child element to fit within a parent element.
 * @param {number} parentWidth - The width of the parent element.
 * @param {number} parentHeight - The height of the parent element.
 * @param {number} childWidth - The width of the child element.
 * @param {number} childHeight - The height of the child element.
 * @param {number} scale - The scale factor for the child element. Default is 1.
 * @param {number} offsetX - The horizontal offset of the child element within the parent. Default is 0.5.
 * @param {number} offsetY - The vertical offset of the child element within the parent. Default is 0.5.
 * @returns {Object} An object containing the width, height, left, and top values for the child element.
 */

export function fit(
    parentWidth: number,
    parentHeight: number,
    childWidth: number,
    childHeight: number,
    scale: number = 1,
    offsetX: number = 0.5,
    offsetY: number = 0.5
  ): { width: number, height: number, left: number, top: number } {
    const childRatio = childWidth / childHeight
    const parentRatio = parentWidth / parentHeight
    let width = parentWidth * scale
    let height = parentHeight * scale
  
    if (childRatio < parentRatio) {
      height = width / childRatio
    } else {
      width = height * childRatio
    }
  
    return {
      width: Math.round(width),
      height: Math.round(height),
      left: Math.round((parentWidth - width) * offsetX),
      top: Math.round((parentHeight - height) * offsetY),
    }
  }