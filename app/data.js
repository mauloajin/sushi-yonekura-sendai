export const name = '鮨よねくら｜仙台 国分町 寿司';
export const address = '宮城県仙台市青葉区立町１４−４ プラスワンビル 101';
export const phone = '022-712-8508';
export const url = 'https://sushi-yonekura-sendai.vercel.app';
export const booking = 'https://tabelog.com/miyagi/A0401/A040101/4015391/';
export const map = 'https://www.google.com/maps/place/鮨よねくら/data=!4m2!3m1!1s0x0:0x9fd38f7d15aa8f8e';
export const faqs = [
['どこにありますか？',`〒980-0822 ${address}です。国分町から晩翠通りを越えた立町にあり、青い暖簾と鬼瓦が目印です。`],
['営業時間と定休日を教えてください。','月〜金は17:30〜24:00、土曜日は17:30〜23:00。日曜日・祝日は定休日です。臨時休業や祝日の営業は来店前にご確認ください。'],
['予約はどこからできますか？','食べログの店舗ページで空席を確認できます。お電話は022-712-8508へ。人数や席、料理の希望をお伝えください。'],
['会席コースの料金と予約期限は？','広瀬7,700円、極9,900円、匠12,100円（各税込）。2〜8名様、前日までの予約が必要です。内容は仕入れにより変わります。席の利用は基本2時間までです。'],
['握り以外にはどんな料理がありますか？','お刺身の盛り合わせ、煮穴子の炙り、海鮮茶碗蒸し、天ぷらなどの一品料理をご用意しています。宮城を中心とする地酒と合わせてお楽しみいただけます。'],
['個室とカウンター席はありますか？','一枚板のカウンター8席と、座敷の個室があります。個室の空き状況や利用人数はご予約時にご相談ください。'],
['駅からのアクセスは？','地下鉄・広瀬通駅から徒歩15分が目安です。晩翠通りから西へ入り、立町のプラスワンビル101へお越しください。勾当台公園駅、大町西公園駅からの経路はGoogleマップで確認できます。'],
['支払い方法を教えてください。','各種クレジットカード、QRコード決済が利用できます。利用したいブランドの対応状況は店舗へご確認ください。'],
['Where is Sushi Yonekura and how can I book?','Sushi Yonekura is at Plus One Building 101, 14-4 Tatemachi, Aoba-ku, Sendai, Miyagi 980-0822, Japan, near Kokubuncho. Book through Tabelog or call +81-22-712-8508.']
];
export const menu = [['梅','上にぎり六貫','2,800'],['桐','上にぎり八貫・巻物・玉子','4,400'],['桜','おまかせにぎり十貫・玉子','5,500'],['お刺身 盛り合わせ','一人前','2,750〜'],['煮穴子の炙り','ふっくら煮た穴子を、仕上げに炙って','1,210'],['海鮮茶碗蒸し','魚介のうまみを楽しむ一品','990']];
export const jpTerms = [...new Set(['鮨よねくら','鮨 よねくら','すしよねくら','仙台','国分町周辺','立町','仙台市青葉区','宮城県','広瀬通駅周辺','勾当台公園駅周辺','大町西公園駅周辺','晩翠通り周辺'].flatMap(area=>['寿司','鮨','握り寿司','刺身','煮穴子の炙り','海鮮茶碗蒸し','日本酒','宮城の地酒','夕食','ディナー','会席コース','寿司の予約','電話予約','カウンター席','座敷個室','寿司メニュー','コース料金','営業時間','定休日','住所','アクセス'].map(term=>`${area} ${term}`)))];
export const enTerms = [...new Set(['Sushi Yonekura','Yonekura Sendai','Sendai','Kokubuncho area','Tatemachi','Aoba-ku Sendai','Miyagi Japan','near Hirose-dori Station','near Kotodai-koen Station','near Omachi Nishi-koen Station'].flatMap(area=>['sushi','Japanese restaurant','nigiri sushi','sashimi','conger eel','chawanmushi','seafood','Japanese sake','Miyagi sake','dinner','kaiseki course','restaurant reservation','phone booking','counter seating','tatami private room','sushi menu','course prices','opening hours','closing days','restaurant address','walking directions','local dining'].map(term=>`${term} ${area}`)))];
