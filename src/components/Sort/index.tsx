import { useSelector } from 'react-redux'

import { setBooks, setBooksArray, getBooks } from '../../redux/slices/booksSlice'
import { setSort, sortSelector } from '../../redux/slices/sortSlice'
import { searchSelector } from '../../redux/slices/searchSlice' 
import { useAppDispatch } from '../../redux/store'
import DropDown from '../../UI/DropDown'
import style from './index.module.css'

const Sort: React.FC = () => {
   const dispatch = useAppDispatch()
   const { sort, category } = useSelector(sortSelector)
   const { searchValue } = useSelector(searchSelector)

   const handleSelected = (sort: string) => {
      dispatch(setSort(sort))
      dispatch(setBooks(null))
      dispatch(setBooksArray([]))
      dispatch(getBooks([searchValue, category, sort]))
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