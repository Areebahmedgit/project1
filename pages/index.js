import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Signn from './auth/Signup'
import Blogs from './[Allblog]'
import Heade from './component/Head'
import MyBlogs from './Dashboard'
import Profile from './profile'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    {/* <Signn /> */}
    {/* <Heade/> */}
    {/* <MyBlogs/> */}
    <Blogs/>
    {/* <Profile/> */}
    </>
  )
}
