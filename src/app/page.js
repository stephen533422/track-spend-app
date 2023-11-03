"use client"
import styles from './page.module.css'
import Link from 'next/link'
import classNames from 'classnames'
import { useAuthContext } from '@/context/AuthContext';
import Logout from "@/firebase/auth/signout";

export default function Home() {
  const { user } = useAuthContext();
  // console.log(user);
  let Btn=() => {
    return (
      <>
        <div className={classNames(styles.container,styles.mt20)}>
          <Link href="/accounting"><button className={styles.btnw90}>點此開始</button></Link>
        </div>
        <div className={classNames(styles.container,styles.mt20)}>
          <button className={styles.btnw90} onClick={Logout}>登出</button>
        </div>
      </>
    );
  };
  if (user==null){
    Btn=()=>{
      return (
        <div className={classNames(styles.container,styles.mt20)}>
          <Link href="/signin"><button className={styles.btnw90}>登入</button></Link>
        </div>
      );
    }
  }
  return (
    <div className={styles.main}>
      <div className={styles.nav}>
        <h1>React 練習專案</h1>
      </div>
      <div className={styles.headline}>
        <p>歡迎光臨我的頁面</p>
      </div>
      <Btn />
    </div>
  )
}
