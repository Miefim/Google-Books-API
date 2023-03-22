import style from './index.module.css'

const Input = ({className, placeholder, value, setValue, ...props}) => {
   return(
      <input 
         className={`${style.input} ${className}`} 
         onChange={(e) => setValue(e.target.value)}
         placeholder={placeholder}
         value={value}
         type="text" 
         {...props}
      />
   )
}

export default Input 