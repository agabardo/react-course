import React from "react"
import classes from './Button.module.css';

const HeaderCartButton = (props) => {
  return <Button>{ props.children }</Button>
}
export default HeaderCartButton;