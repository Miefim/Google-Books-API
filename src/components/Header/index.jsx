import Search from '../Search'
import DropDown from '../DropDown'
import style from './index.module.css'

const Header = () => {
   return(
      <header className={style.header}>
         <h1 className={style.title}>Search for books</h1>
         <Search className={style.search} placeholder={'Search books'}/>
         <div className={style.sortsLine}>
            <div className={style.categoriesBlock}>
               Categories
               <DropDown>
                  <div>all</div>
                  <div>art</div>
                  <div>biography</div>
                  <div>computers</div>
                  <div>history</div>
                  <div>medical</div>
                  <div>poetry</div>
               </DropDown>
            </div>
            <div className={style.categoriesBlock}>
               Sorting by
               <DropDown>
                  <div>relevance</div>
                  <div>newest</div>
               </DropDown>
            </div>
         </div>
      </header>
   )
}

export default Header