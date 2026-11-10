import './globals.css';
import {name,url} from './data';
export const metadata = {metadataBase:new URL(url),title:name,description:'仙台・国分町周辺、青葉区立町の鮨よねくら。握り、刺身、煮穴子の炙り、海鮮茶碗蒸しと宮城の地酒。会席コース、カウンター・座敷個室、営業時間、電話・オンライン予約、アクセスをご案内します。',alternates:{canonical:'/'},robots:{index:true,follow:true},openGraph:{title:name,description:'立町で味わう、旬の鮨と地酒。料理・会席・予約・アクセスのご案内。',url,locale:'ja_JP',type:'website',images:[{url:'/og.svg',width:1200,height:630,alt:name}]},twitter:{card:'summary_large_image'}};
export default function Layout({children}){return <html lang="ja"><body>{children}</body></html>}
