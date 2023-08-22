import React from 'react'
import { useRouter } from 'next/navigation'

type Props = {}

const isAuth = <T extends {}>(Component: React.ComponentType<T>) => {
    return (props: T) => {
        // make a api call to check if user is authenticated
        // const { data, loading, error } = useMeQuery();
        const router = useRouter();
        const isAuthenticated = false;
        if(isAuthenticated===false)
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