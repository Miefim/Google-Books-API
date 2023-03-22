import style from './index.module.css'

const Button = ({children, className, ...props}) => {
   return(
      <button className={`${style.button} ${className}`} {...props}>{children}</button>
   )
}

export default Button