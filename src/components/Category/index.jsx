import { useSelector, useDispatch } from 'react-redux'

import { setBooks, setBooksArray, getBooks } from '../../redux/slices/booksSlice'
import { setCategory } from '../../redux/slices/sortSlice'
import DropDown from '../../UI/DropDown'
import style from './index.module.css'

const Category = () => {
   const dispatch = useDispatch()
   const { category, sort } = useSelector(state => state.sortSlice)
   const { searchValue } = useSelector(state => state.searchSlice)

   const handleSelected = (prop) => {
      dispatch(setCategory(prop))
      dispatch(setBooks(null))
      dispatch(setBooksArray([]))
      dispatch(getBooks([searchValue, , prop, sort]))
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