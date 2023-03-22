import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Button from '../../UI/Button'
import { getBooks } from '../../redux/slices/booksSlice'
import style from './index.module.css'

const BooksList = () => {
   const { books, booksArray, isLoading, error } = useSelector(state => state.booksSlice)
   const dispatch = useDispatch()
   const nav = useNavigate()

   const hadleCardClick = (e) => {
      nav(`/${e.currentTarget.id}`)
   } 
   
   const handleMoreBtn = () => {
      if(books.items.length === 30){
         dispatch(getBooks([, booksArray.length]))
      } 
      
   }

   return(
      <div className={style.booksList}>
         {
            books 
            ?  <div className={style.foundsRes}>
                  {books.totalItems === 0 ? 'Oops nothing found' : `Found ${books.totalItems} results`}
               </div> 
            :  ''
         }
         <div className={style.conteinerCards}>
            {isLoading && !books ? <div>Loading...</div> : ''}
            {  
               booksArray?.map(book => 
                  <div id={book.id} className={style.card} onClick={hadleCardClick} key={book.id}>
                     <div className={style.card_imgBlock}>
                        <img className={style.imgBlock_img} src={book.volumeInfo.imageLinks?.thumbnail ? book.volumeInfo.imageLinks?.thumbnail : '/images/bookImg.jpg'} alt=""/>  
                     </div>
                     <div className={style.card_description}>
                        <div className={style.description_category}>{book.volumeInfo.categories ? book.volumeInfo.categories[0] : ''}</div>
                        <div className={style.description_title}>{book.volumeInfo.title}</div>
                        <div className={style.description_author}>{book.volumeInfo.authors ? book.volumeInfo.authors[0] : ''}</div>
                     </div>
                  </div> 
               )
            }
         </div>
         {books?.items.length === 30 && <Button className={style.moreBtn} onClick={handleMoreBtn}>More</Button>}
      </div>
   )
}

export default BooksList