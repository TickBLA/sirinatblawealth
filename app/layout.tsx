import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'ประกันชีวิตอุ่นใจ by ติ๊ก',description:'วางแผนความอุ่นใจไปด้วยกัน กับสิรินาถ กลับดี (ติ๊ก)'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="th"><body>{children}</body></html>}
