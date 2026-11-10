import {url} from './data';
export const dynamic='force-static';
export default function robots(){return {rules:{userAgent:'*',allow:'/'},sitemap:`${url}/sitemap.xml`}}
