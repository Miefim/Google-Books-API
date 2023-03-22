import { useNavigate } from 'react-router-dom'

import Button from '../../UI/Button'
import style from './index.module.css'

const BookItem = () => {
   const nav = useNavigate()
   return(
      <div className={style.bookItem}>
         <Button className={style.backBtn} onClick={() => nav('/')}>
            <img className={style.backBtn_icon} src="/images/leftArrow.png" alt="" />
         </Button>
         <div className={style.imgBlock}>
            <img className={style.imgBlock_img} src="/images/bookImg.jpg" alt=""/>
         </div>
         <div className={style.descriptionBlock}>
            <div className={style.descriptionBlock_category}>
               Art/General
            </div>
            <h1 className={style.descriptionBlock_title}>
               titasdasd
            </h1>
            <div className={style.descriptionBlock_author}>
               Author
            </div>
            <div className={style.descriptionBlock_description}>
               sdsfdsdf
            </div>
         </div>
      </div>
   )
}

export default BookItem