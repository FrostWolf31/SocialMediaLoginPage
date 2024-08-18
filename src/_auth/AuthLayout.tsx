import { Outlet, Navigate } from "react-router-dom"

export const AuthLayout = () => {
    const isAuthenticated = false;


  return (
     /** if  statement = if not logged in got to login*/
    <>
       
        {isAuthenticated ?(
            <Navigate to='/'/>
        ): (
            <>
            <section className = 'flex flex-1 justify-center items-center flex-col py-10'>
                <Outlet/>
            </section>

            <img
                src="/assets/images/underground.png"
                alt="logo"
                className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
            />
            </>
        )}
    </>
  )
}

export default AuthLayout
