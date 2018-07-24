import React from 'react'
import * as queryString from '../util/query-string'

export default function Link({ path = '', params = {}, isActive, ...props }) {
  const activeLink = isActive
    ? 'nav-link bg-dark text-white'
    : 'nav-link text-dark'
  return (
    <a
      {...props}
      className={ activeLink }
      href={'#' + path + queryString.stringify(params)} />
  )
}