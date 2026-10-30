import {publicContent} from './content-model';
import HomeView from './home-view';
import {getContent} from './server';
export const dynamic='force-dynamic';
export default async function Page(){const {content}=await getContent();return <HomeView content={publicContent(content)}/>}
