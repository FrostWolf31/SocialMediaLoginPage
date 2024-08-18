import {Routes , Route } from "react-router-dom"
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import SigninForm from "./_auth/forms/SigninForm";
import SignUpForm from "./_auth/forms/SignUpForm";
import { Home, } from "./_root/pages";
import { AuthLayout } from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";


export const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
            {/*public */}
            <Route element={<AuthLayout/>}>
                <Route path ="/sign-in" element={<SigninForm />}/>
                <Route path ="/sign-up" element={<SignUpForm />}/>
            </Route>
    
            {/*private */}
            <Route element={<RootLayout/>}>
                <Route index element = {<Home />}/>
            </Route>
            
        </Routes>
        <Toaster/>
    </main>
  )
}

export default App