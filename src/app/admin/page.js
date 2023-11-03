'use client'
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Logout from "@/firebase/auth/signout";

function Page() {
    const { user } = useAuthContext()
    const router = useRouter()

    React.useEffect(() => {
        if (user == null) router.push("/")
    }, [user])

    return (
        <>
            <h1>Only logged in users can view this page</h1>
            <button onClick={Logout}>Sign out</button>
        </>
    );
}

export default Page;
