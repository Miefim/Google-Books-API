import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { booksSelector } from '../../redux/slices/booksSlice'
import Button from '../../UI/Button'
import style from './index.module.css'

const BookItem: React.FC = () => {
   const nav = useNavigate()
   const { selectedBook } = useSelector(booksSelector)

   useEffect(() => {
      if(!selectedBook){
         nav('/')
      }
   },[])

   if(selectedBook){
      return(
         <div className={style.bookItem}>
            <Button className={style.backBtn} onClick={() => nav('/')}>
               <img className={style.backBtn_icon} src="/images/leftArrow.png" alt="" />
            </Button>
            <div className={style.imgBlock}>
               <img className={style.imgBlock_img} src={selectedBook.volumeInfo.imageLinks?.thumbnail ? selectedBook.volumeInfo.imageLinks?.thumbnail : '/images/bookImg.jpg'} alt=""/>
            </div>
            <div className={style.descriptionBlock}>
               <div className={style.descriptionBlock_category}>
                  {selectedBook.volumeInfo.categories 
                     ?  selectedBook.volumeInfo.categories.map((category, i, arr) => 
                           i === arr.length - 1 ? category : `${category}/`
                        )
                     : ''
                  }
               </div>
               <h1 className={style.descriptionBlock_title}>
                  {selectedBook.volumeInfo.title ? selectedBook.volumeInfo.title : ''}
               </h1>
               <div className={style.descriptionBlock_author}>
                  {selectedBook.volumeInfo.authors 
                     ?  selectedBook.volumeInfo.authors.map((author, i, arr) => 
                           i === arr.length - 1 ? author : `${author}, `
                        )
                     : ''
                  }
               </div>
               <div className={style.descriptionBlock_description}>
                  {selectedBook.volumeInfo.description ? selectedBook.volumeInfo.description : 'No data'}
               </div>
            </div>
         </div>
      )
   }
   else{
      return <></>
   } 
}

export default BookItem