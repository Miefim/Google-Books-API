import { useNavigate } from 'react-router-dom'

import style from './index.module.css'

const BooksList = () => {
   const nav = useNavigate()

   const hadleCardClick = (e) => {
      nav(`/${e.currentTarget.id}`)
   }  

   return(
      <div className={style.booksList}>
         <div className={style.foundsRes}>Found 446 results</div>
         <div className={style.conteinerCards}>
            <div id='1' className={style.card} onClick={hadleCardClick}>
               <div className={style.card_imgBlock}>
                  <img className={style.imgBlock_img} src="/images/bookImg.jpg" alt=""/>  
               </div>
               <div className={style.card_description}>
                  <div className={style.description_category}>Computers</div>
                  <div className={style.description_title}>titledfb</div>
                  <div className={style.description_author}>author author author author author author author author</div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BooksList