/**
 * noop
 * Sample (empty) function.
 * @param {any} value
 * @since 1.0.0
 */
export const noop = (value) => {
}

/**
 * getDimensions
 * Get element dimensions.
 * @param {HTMLElement} el
 * @return {{width: number, height: number}}
 */
export const getDimensions = (el) => {
  const rect = el.getBoundingClientRect()
  return {
    width: el.clientWidth || rect.width,
    height: el.clientHeight || rect.height
  }
}

/**
 * getWindowDimensions
 * Get window dimensions.
 * @return {{width: number, height: number}}
 */
export const getWindowDimensions = () => {
  return {
    width:
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth,
    height:
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight
  }
}

/**
 * getCurrentBreakpoint
 * @param {number} width
 * @return {string}
 */
export const getCurrentBreakpoint = (width) => {
  let breakpoint = 'xlg'
  if (width < 1200 && width > 992) breakpoint = 'lg'
  else if (width < 992 && width > 768) breakpoint = 'md'
  else if (width < 768 && width > 600) breakpoint = 'sm'
  else if (width < 600) breakpoint = 'xs'
  return breakpoint
}
