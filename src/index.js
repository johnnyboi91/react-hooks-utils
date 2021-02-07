import { useState, useEffect, useRef } from 'react'
import {
  noop,
  getCurrentBreakpoint,
  getWindowDimensions,
  getDimensions
} from './helpers'

/**
 * useStateWithCb
 * @param {any} value
 * @param {(value: any) => void} callback
 * @return {[any, (value: any) => void]}
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
  const ref = useRef()
  const [state, setState] = useState({ width: 0, height: 0 })
  const handleResize = () => {
    const dimensions = getDimensions(ref.current)
    setState((prev) => ({
      ...prev,
      width: dimensions.width,
      height: dimensions.height
    }))
  }
  useEffect(() => {
    const dimensions = getDimensions(ref.current)
    setState((prev) => ({
      ...prev,
      width: dimensions.width,
      height: dimensions.height
    }))
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
    setState((prev) => ({
      ...prev,
      width: dimensions.width,
      height: dimensions.height,
      breakpoint: getCurrentBreakpoint(dimensions.width)
    }))
  }
  useEffect(() => {
    const dimensions = getWindowDimensions()
    setState((prev) => ({
      ...prev,
      width: dimensions.width,
      height: dimensions.height,
      breakpoint: getCurrentBreakpoint(dimensions.width)
    }))
    window.addEventListener('resize', handleResize, false)
    return () => window.removeEventListener('resize', handleResize, false)
  }, [])
  return {
    ...state
  }
}
