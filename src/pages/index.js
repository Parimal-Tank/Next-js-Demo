import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })


// In a Tag need to Wrap with link tag use legacyBehavior  
/*
otherwise use directly 
 <Link href='/blog'>
          Blog
</Link>
*/

function Home() {

  const router = useRouter();

  const handleClick = () => {
     console.log('Order Place Successfully');
     router.push('/products');
  }

  return (
    <>
       <h1>Home Page</h1>
       <Link  href='/blog'>
            Blog
       </Link>
       <Link  href='/products' className='mx-5'>
            Products
       </Link>
      <button onClick={handleClick} >Place Order</button>
    </>
  )
}

export default Home;