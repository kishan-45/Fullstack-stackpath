import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Stackpath | Your full stack journey',description:'Learn frontend, backend, databases and deployment with a practical full stack roadmap.'};
export default function Layout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
