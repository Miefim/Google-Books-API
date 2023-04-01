import { ReactNode } from 'react'
import style from './index.module.css'

type ButtonProps = {
   children?: string | JSX.Element
   className?: string
   onClick?: React.MouseEventHandler
}

const Button: React.FC<ButtonProps> = ({children, className, onClick, ...props}) => {
   return(
      <button className={`${style.button} ${className}`} onClick={onClick} {...props}>{children}</button>
   )
}

export default Button