import { useState } from 'react'
import style from './index.module.css'

type DropDownProps = {
   children: JSX.Element[]
   className?: string
   selected: string
   setSelected: (arg: string) => void
}

const DropDown: React.FC<DropDownProps> = ({children, className, selected, setSelected}) => {
   const [isOpen, setIsOpen] = useState<boolean>(false)

   return(
      <div className={`${style.dropDown} ${className}`} onClick={() => setIsOpen(!isOpen)}>
         <img src="/images/downArrow.png" className={`${style.dropDown_icon} ${isOpen && style.activeDropDown_ico}`} alt=''/>
         {selected ? selected : children[0]?.props.children}
         <div className={`${style.dropDownList} ${isOpen && style.active}`}>
            {
               children.map((el, i) => 
                  <div className={style.dropDownList_item} key={i} onClick={() => setSelected(el.props.children)}>
                     {el.props.children}
                     {el.props.children === selected && <img src="/images/ok.png" className={style.item_icon} alt=''/>}
                  </div>
               )
            }
            
         </div>
      </div>
   )
}

export default DropDown