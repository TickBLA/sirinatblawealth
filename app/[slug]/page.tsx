import {notFound} from 'next/navigation';
import {getContent} from '../server';
import PageView from '../page-view';
export const dynamic='force-dynamic';
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const {content}=await getContent();const p=content.pages?.find((p:any)=>p.slug===slug&&p.published);return {title:p?p.title+' | '+content.brand:'ไม่พบหน้า',description:p?.description}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const {content}=await getContent();const page=content.pages?.find((p:any)=>p.slug===slug&&p.published);if(!page)notFound();return <PageView page={page} brand={content.brand}/>}
