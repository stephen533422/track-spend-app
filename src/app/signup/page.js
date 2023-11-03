'use client'
import { useState } from "react";
import signUp from "@/firebase/auth/signup";
import { useRouter } from 'next/navigation';
import styles from '@/app/page.module.css';
import classNames from 'classnames'
import Link from "next/link";

export default function Page(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleForm = async (e) =>{
        e.preventDefault();

        const { result, error } = await signUp(email, password);

        if (error){
            return console.log(error);
        }

        console.log(result);
        return router.push("/accounting");
    }

    return (
        <div className={styles.main}>
        <div className={styles.nav}>
            <h1>React 練習專案</h1>
        </div>
        <form onSubmit={handleForm} className={styles.form}>
            <div className={styles.headline}>
                <h2>註冊</h2>
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
                <button className={styles.btnw90} type="submit">註冊</button>
            </div>
            <div className={classNames(styles.container,styles.mt20)}>
                <p>已有帳號，  
                    <Link href="/signin">點此登入</Link>
                </p>
            </div>
            <div className={classNames(styles.container, styles.mt20)}>
                <Link href="/"><button className={styles.btnw90}>返回首頁</button></Link>
            </div>
        </form>
    </div>
    );
}
