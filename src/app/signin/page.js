'use client'
import React from "react";
import signIn from "@/firebase/auth/signin";
import { useRouter } from 'next/navigation';
import styles from '@/app/page.module.css';
import classNames from 'classnames'
import Link from "next/link";

export default function Page() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()

    const handleForm = async (event) => {
        event.preventDefault()

        const { result, error } = await signIn(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/accounting")
    }

    return (
        <div className={styles.main}>
            <div className={styles.nav}>
                <h1>React 練習專案</h1>
            </div>
            <form onSubmit={handleForm} className={styles.form}>
                <div className={styles.headline}>
                    <h2>登入</h2>
                        <label className={styles.mt20} htmlFor="email">
                            <p>Email</p>
                            <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
                        </label>
                        <label className={styles.mt20} htmlFor="password">
                            <p>Password</p>
                            <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
                        </label>
                </div>
                <div className={classNames(styles.container,styles.mt20)}>
                    <button className={styles.btnw90} type="submit">登入</button>
                </div>
                <div className={classNames(styles.container,styles.mt20)}>
                    <p>還沒有帳號， 
                    <Link href="/signup">點此註冊</Link>
                    </p>
                </div>
                <div className={classNames(styles.container, styles.mt20)}>
                    <Link href="/"><button className={styles.btnw90}>返回首頁</button></Link>
                </div>
            </form>
        </div>
    );
}
