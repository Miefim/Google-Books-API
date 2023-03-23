import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { setCategory, setSort } from '../../redux/slices/sortSlice'
import Button from '../../UI/Button' 
import Search from '../Search'
import DropDown from '../../UI/DropDown'
import style from './index.module.css'

const Header = () => {
   const dispatch = useDispatch()
   const { sort, category } = useSelector(state => state.sortSlice)
   const params = useParams()
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
            <div className={style.sortsLine}>
               <div className={style.categoriesBlock}>
                  Categories
                  <DropDown 
                     className={style.dropDown} 
                     selected={category} 
                     setSelected={(prop) => dispatch(setCategory(prop))}
                  >
                     <div>all</div>
                     <div>art</div>
                     <div>biography</div>
                     <div>computers</div>
                     <div>history</div>
                     <div>medical</div>
                     <div>poetry</div>
                  </DropDown>
               </div>
               <div className={style.categoriesBlock}>
                  Sorting by
                  <DropDown 
                     className={style.dropDown}
                     selected={sort} 
                     setSelected={(prop) => dispatch(setSort(prop))}
                  >
                     <div>relevance</div>
                     <div>newest</div>
                  </DropDown>
               </div>
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