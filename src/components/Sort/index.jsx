import { useSelector, useDispatch } from 'react-redux'

import { setBooks, setBooksArray, getBooks } from '../../redux/slices/booksSlice'
import { setSort } from '../../redux/slices/sortSlice'
import DropDown from '../../UI/DropDown'
import style from './index.module.css'

const Sort = () => {
   const dispatch = useDispatch()
   const { sort, category } = useSelector(state => state.sortSlice)
   const { searchValue } = useSelector(state => state.searchSlice)

   const handleSelected = (prop) => {
      dispatch(setSort(prop))
      dispatch(setBooks(null))
      dispatch(setBooksArray([]))
      dispatch(getBooks([searchValue, , category, prop]))
   }

   return(
      <div className={style.sortBlock}>
         Sorting by
         <DropDown 
            className={style.dropDown} 
            selected={sort} 
            setSelected={handleSelected}
         >
            <div>relevance</div>
            <div>newest</div>
         </DropDown>
      </div>
   )
}

export default Sort