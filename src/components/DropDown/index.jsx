import { useState } from 'react'
import style from './index.module.css'

const DropDown = ({children, className}) => {
   const [isOpen, setIsOpen] = useState(false)
   const [selected, setSelected] = useState(0)

   return(
      <div className={`${style.dropDown} ${className}`} onClick={() => setIsOpen(!isOpen)}>
         <img src="/images/downArrow.png" className={`${style.dropDown_icon} ${isOpen && style.activeDropDown_ico}`} alt=''/>
         {selected ? children[selected] : children[0]?.props.children}
         <div className={`${style.dropDownList} ${isOpen && style.active}`}>
            {
               children.map((el, i) => 
                  <div className={style.dropDownList_item} key={i} onClick={() => setSelected(i)}>
                     {el.props.children}
                     {i === selected && <img src="/images/ok.png" className={style.item_icon} alt=''/>}
                  </div>
               )
            }
            
         </div>
      </div>
   )
}

export default DropDown