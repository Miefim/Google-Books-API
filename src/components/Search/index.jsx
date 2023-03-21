import { useState } from 'react'

import Input from '../../UI/Input'
import style from './index.module.css'

const Search = ({className, placeholder}) => {
   const [searchValue, setSearchValue] = useState('')

   const handleSearchBtn = () => {
      if(searchValue){
         console.log(searchValue)
      }
   }

   const handleKeyDown = (e) => {
      if(e.key === 'Enter' && searchValue){
         handleSearchBtn() 
      }
   }

   return(
      <div className={`${style.search} ${className}`}>
         <Input 
            className={style.input} 
            placeholder={placeholder || 'Search'}
            setValue={setSearchValue}
            value={searchValue}
            onKeyDown={handleKeyDown}
         />
         <button 
            className={style.searchBtn} 
            onClick={handleSearchBtn}
            disabled={!searchValue}
         >
            <img className={style.searchBtn_icon} src="/images/search.png" alt="" />
         </button>
      </div>
   )
}

export default Search 