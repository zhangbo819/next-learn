import { FC, ReactNode } from "react";

const Layout: FC<{ children?: ReactNode }> = ({ children }) => {
    return <div>
        Layout
        {children}
    </div>
}

export default Layout

// import useSWR from 'swr'
// import Navbar from './navbar'
// import Footer from './footer'
 
// export default function Layout({ children }) {
//   const { data, error } = useSWR('/api/navigation', fetcher)
 
//   if (error) return <div>Failed to load</div>
//   if (!data) return <div>Loading...</div>
 
//   return (
//     <>
//       <Navbar links={data.links} />
//       <main>{children}</main>
//       <Footer />
//     </>
//   )
// }