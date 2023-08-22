import React from 'react'
import { useRouter } from 'next/navigation'

type Props = {}

const isAuth = <T extends {}>(Component: React.ComponentType<T>) => {
    return (props: T) => {
        // make a api call to check if user is authenticated
        // const { data, loading, error } = useMeQuery();
        const router = useRouter();
        const isAuthenticated = localStorage.getItem("portfolio")

        // if (loading) {
        //     return <div>Loading...</div>;
        // }

        // if (error || !data) {
        //     router.push('/login');
        // }
        if(! isAuthenticated)
        {
            router.push("/auth")
        }

        return (
            <>
                <Component {...props!} />
            </>
        );
    };
}

export default isAuth