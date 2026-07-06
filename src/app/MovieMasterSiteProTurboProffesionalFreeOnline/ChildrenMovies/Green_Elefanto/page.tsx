
import Hat from "@/features/movie/header/hat/hat";
import Image from "next/image";
import React from "react";


const Page= () => {
    return(
        <div className="min-h-screen pb-20">
            <Hat>

            </Hat>
            <div className="text-[48px] font-bold">Описание</div>
            <div>
                <Image src="/Bratishka.jpeg" alt="ляшки такие вкусняшки" className="items-end" width={400}
                       height={400}/>
            </div>
            <div className="text-[20px]">
                Культовый поучительный фильм 90ых о человеческой жестокости, братской дружбе и влияние общества на человека. Фильм особенно стоит посмотреть детям в младших классах для воспитательных целей.
            </div>
            <div className="text-[40px] text-orange-400">IMDB: 6.9/10</div>
            <div className="flex items-center justify-center">
                <iframe src="https://vk.com/video_ext.php?oid=-94705031&id=456247827" width="1280" height="720"
                        frameBorder="0"
                        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
        </div>
    )
}

export default Page;