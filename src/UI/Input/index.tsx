import style from './index.module.css'

type InputProps = {
   className?: string
   placeholder?: string
   value: string
   setValue: (arg: string) => void
   onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>
}

const Input: React.FC<InputProps> = ({className, placeholder, value, setValue, onKeyDown, ...props}) => {
   return(
      <input 
         className={`${style.input} ${className}`} 
         onChange={(e) => setValue(e.target.value)}
         placeholder={placeholder}
         value={value}
         type="text" 
         onKeyDown={onKeyDown}
         {...props}
      />
   )
}

export default Input 