import styles from './page.module.css'
import Link from 'next/link'
import classNames from 'classnames'

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.nav}>
        <h1>React 練習專案</h1>
      </div>
      <div className={styles.headline}>
        <p>歡迎光臨我的頁面</p>
      </div>
      <div className={classNames(styles.container,styles.mt20)}>
        <Link href="/accounting"><button className={styles.btnw90}>點此開始</button></Link>
      </div>
    </div>
  )
}
