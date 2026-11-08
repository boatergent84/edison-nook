import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"Edison Nook | Northern Michigan Retreat",description:"A thoughtful Northern Michigan getaway. Discover Edison Nook near Petoskey and plan your stay."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>;}
