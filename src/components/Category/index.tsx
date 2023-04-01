import { useSelector } from 'react-redux'

import { searchSelector } from '../../redux/slices/searchSlice'
import { useAppDispatch } from '../../redux/store'
import { setBooks, setBooksArray, getBooks } from '../../redux/slices/booksSlice'
import { setCategory, sortSelector } from '../../redux/slices/sortSlice'
import DropDown from '../../UI/DropDown'
import style from './index.module.css'

const Category: React.FC = () => {
   const dispatch = useAppDispatch()
   const { category, sort } = useSelector(sortSelector)
   const { searchValue } = useSelector(searchSelector)

   const handleSelected = (category: string) => {
      dispatch(setCategory(category))
      dispatch(setBooks(null))
      dispatch(setBooksArray([]))
      dispatch(getBooks([searchValue, category, sort]))
   }

   return(
      <div className={style.categoriesBlock}>
         Categories
         <DropDown 
            className={style.dropDown} 
            selected={category} 
            setSelected={handleSelected}
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
   )
}

export default Category