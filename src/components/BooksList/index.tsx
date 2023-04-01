import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

import { scrollSelector } from '../../redux/slices/scrollSlice'
import { searchSelector } from '../../redux/slices/searchSlice'
import { sortSelector } from '../../redux/slices/sortSlice'
import { useAppDispatch } from '../../redux/store'
import { setScroll } from '../../redux/slices/scrollSlice'
import { Book, booksSelector, getBooks, setSelectedBook } from '../../redux/slices/booksSlice'
import Loader from '../../UI/Loader'
import Button from '../../UI/Button'
import style from './index.module.css'


const BooksList: React.FC = () => {
   const { scroll } = useSelector(scrollSelector)
   const { books, booksArray, isLoading, error } = useSelector(booksSelector)
   const { searchValue } = useSelector(searchSelector)
   const { sort, category } = useSelector(sortSelector)
   const dispatch = useAppDispatch()
   const nav = useNavigate()

   useEffect(() => {
      window.scrollTo(0, scroll)
   },[])

   const hadleCardClick = (e:React.MouseEvent<HTMLDivElement>, book:Book) => {
      dispatch(setSelectedBook(book))
      dispatch(setScroll(window.scrollY))
      nav(`/${e.currentTarget.id}`)
   } 
   
   const handleMoreBtn = () => {
      if(books?.items.length === 30){
         dispatch(getBooks([searchValue, category, sort, booksArray.length]))
      }  
   } 

   return(
      <div className={style.booksList}>
         {(!books && !isLoading && !error) &&
            <div className={style.infoBlock}>
               <img className={style.infoBlock_icon} src="/images/welcomeIcon.png" alt="" />
            </div>
         }
         {(books && books.totalItems !== 0)  &&        
            <div className={style.foundsRes}>
               {`Found ${books.totalItems} results`}
            </div> 
         }
         {books?.totalItems === 0 &&
            <div className={style.infoBlock}>
               <h1>Oops nothing found</h1>
               <img className={style.infoBlock_icon} src="/images/notFoundIcon.png" alt="" />
            </div>
         }
         {(isLoading && !books) && 
            <div className={style.infoBlock}>
               <Loader/>
            </div>
         }
         {error &&
            <div className={style.infoBlock}>
               <h1>{error}</h1>
               <img className={style.infoBlock_img} src="/images/serverError.jpg" alt="" />
            </div>
         }
         <div className={style.conteinerCards}>
            {  
               booksArray?.map(book => 
                  <div id={book.id} className={style.card} onClick={(e) => hadleCardClick(e, book)} key={`${book.id}${Math.random()}`}>
                     <div className={style.card_imgBlock}>
                        <img className={style.imgBlock_img} src={book.volumeInfo.imageLinks?.thumbnail ? book.volumeInfo.imageLinks?.thumbnail : '/images/bookImg.jpg'} alt=""/>  
                     </div>
                     <div className={style.card_description}>
                        <div className={style.description_category}>{book.volumeInfo.categories ? book.volumeInfo.categories[0] : ''}</div>
                        <div className={style.description_title}>{book.volumeInfo.title ? book.volumeInfo.title : ''}</div>
                        <div className={style.description_author}>
                           {book.volumeInfo.authors 
                              ?  book.volumeInfo.authors.map((author, i, arr) => 
                                    i === arr.length - 1 ? author : `${author}, `
                                 )
                              : ''
                           }
                        </div>
                     </div>
                  </div> 
               )
            }
         </div>
         {books?.items.length === 30 && 
            <Button className={style.moreBtn} onClick={handleMoreBtn}>
               {isLoading? <Loader className={style.loader}/> : 'More'}
            </Button>
         }
      </div>
   )
}

export default BooksList