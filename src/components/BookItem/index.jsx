import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../../UI/Button'
import style from './index.module.css'

const BookItem = () => {
   const nav = useNavigate()
   const book = useSelector(state => state.booksSlice.selectedBook)

   useEffect(() => {
      if(!book){
         nav('/')
      }
   },[])

   if(book){
      return(
         <div className={style.bookItem}>
            <Button className={style.backBtn} onClick={() => nav('/')}>
               <img className={style.backBtn_icon} src="/images/leftArrow.png" alt="" />
            </Button>
            <div className={style.imgBlock}>
               <img className={style.imgBlock_img} src={book.volumeInfo.imageLinks?.thumbnail ? book.volumeInfo.imageLinks?.thumbnail : '/images/bookImg.jpg'} alt=""/>
            </div>
            <div className={style.descriptionBlock}>
               <div className={style.descriptionBlock_category}>
                  {book.volumeInfo.categories 
                     ?  book.volumeInfo.categories.map((category, i, arr) => 
                           i === arr.length - 1 ? category : `${category}/`
                        )
                     : ''
                  }
               </div>
               <h1 className={style.descriptionBlock_title}>
                  {book.volumeInfo.title ? book.volumeInfo.title : ''}
               </h1>
               <div className={style.descriptionBlock_author}>
                  {book.volumeInfo.authors 
                     ?  book.volumeInfo.authors.map((author, i, arr) => 
                           i === arr.length - 1 ? author : `${author}, `
                        )
                     : ''
                  }
               </div>
               <div className={style.descriptionBlock_description}>
                  {book.volumeInfo.description ? book.volumeInfo.description : 'No data'}
               </div>
            </div>
         </div>
      )
   } 
}

export default BookItem