import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import Sort from '../Sort'
import Category from '../Category'
import Button from '../../UI/Button' 
import Search from '../Search'
import style from './index.module.css'

const Header = () => {
   const params = useParams()
   const searchValue = useSelector(state => state.searchSlice.searchValue)
   const [isVisibleBtnUp, setIsVisibleBtnUp] = useState(false)

   const handleUpButton = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth"
     })
   }

   const handleScroll = () => {
      if(window.scrollY > 250){
         setIsVisibleBtnUp(true)
      }
      else{
         setIsVisibleBtnUp(false)  
      }
   }

   useEffect(() => {
      window.addEventListener('scroll', handleScroll)
   },[])

   return(
      <header className={style.header}>
         <h1 className={style.title}>Search for books</h1>
         {!params.hasOwnProperty('id') && <Search className={style.search} placeholder={'Search books'}/>}
         {!params.hasOwnProperty('id') &&
            <div className={`${style.sortsLine} ${!searchValue && style.noActive}`}>
               <Category/>
               <Sort/>
            </div>
         }
         {isVisibleBtnUp &&
            <Button className={style.upBtn} onClick={handleUpButton}>
               <img className={style.upBtn_icon} src="/images/leftArrow.png" alt="" />
            </Button>}
      </header>
   )
}

export default Header