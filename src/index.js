import { useState, useEffect, useRef } from 'react'
import {
  noop,
  getCurrentBreakpoint,
  getWindowDimensions,
  getDimensions,
  getMouseCoordinates
} from './helpers'

/**
 * useStateWithCb
 * @param {any} value
 * @param {(value: any) => void} callback
 * @return {any}
 * @since 1.0.0
 */
export const useStateWithCb = (value, callback = noop) => {
  const [state, setState] = useState(value)
  useEffect(() => callback(state), [state, callback])
  return [state, setState]
}

/**
 * useDimensions
 * @return {{ref: React.MutableRefObject<any>, width: number, height: number}}
 * @since 1.0.0
 */
export const useDimensions = () => {
  const [state, setState] = useState({ width: 0, height: 0 })
  const ref = useRef()
  const handleResize = () => setState({ ...getDimensions(ref.current) })
  useEffect(() => {
    setTimeout(() => setState({ ...getDimensions(ref.current) }), 50)
    window.addEventListener('resize', handleResize, false)
    return () => window.removeEventListener('resize', handleResize, false)
  }, [])
  return {
    ref,
    ...state
  }
}

/**
 * useWindowDimensions
 * @return {{width: number, height: number, breakpoint: string}}
 * @since 1.0.0
 */
export const useWindowDimensions = () => {
  const [state, setState] = useState({
    width: 0,
    height: 0,
    breakpoint: 'lg'
  })
  const handleResize = () => {
    const dimensions = getWindowDimensions()
    setState({
      ...dimensions,
      breakpoint: getCurrentBreakpoint(dimensions.width)
    })
  }
  useEffect(() => {
    const dimensions = getWindowDimensions()
    setState({
      ...dimensions,
      breakpoint: getCurrentBreakpoint(dimensions.width)
    })
    window.addEventListener('resize', handleResize, false)
    return () => window.removeEventListener('resize', handleResize, false)
  }, [])
  return { ...state }
}

/**
 * useMouseCoordinates
 * @return {{x: number, y: number}}
 * @since 1.0.6
 */
export const useMouseCoordinates = () => {
  const [state, setState] = useState({ x: 0, y: 0 })
  const handleMove = (e) => setState({ ...getMouseCoordinates(e) })
  useEffect(() => {
    window.addEventListener('mousemove', handleMove, false)
    return () => window.removeEventListener('mousemove', handleMove, false)
  }, [])
  return { ...state }
}

/**
 * helpers
 * @type {{noop: noop, getDimensions: (function(HTMLElement): {width: number, height: number}), getCurrentBreakpoint: (function(number): string), getWindowDimensions: (function(): {width: number, height: number}), getMouseCoordinates: (function(MouseEvent): {x: number, y: number})}}
 * @since 1.0.6
 */
export const helpers = {
  noop,
  getCurrentBreakpoint,
  getWindowDimensions,
  getDimensions,
  getMouseCoordinates
}
