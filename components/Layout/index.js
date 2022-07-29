import Header from '../Header'
import styles from './layout.module.scss'
import CategoriesBar from '../Categories'


const name = 'Luka'
export const siteTitle = 'My first nextjs app'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        <div className={styles.main}>
          {!home && <CategoriesBar />}
          {children}
        </div>
      </div>
    </div>
  );
}