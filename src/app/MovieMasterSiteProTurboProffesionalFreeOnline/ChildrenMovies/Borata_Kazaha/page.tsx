
import Hat from "@/features/movie/header/hat/hat";
import Image from "next/image";
import React from "react";


const Page= () => {
    return(
        <>
            <Hat>

            </Hat>
            <div className="text-[48px] font-bold">Описание</div>
            <div>
                <Image src="/Asashay2.jpg" alt="ляшки такие вкусняшки" className="items-end" width={400}
                       height={400}/>
            </div>
            <div className="text-[20px]">
                Простой Казахский журналист едет в США, чтобы перенять американскую культуру, но злые асашайцы не поняли мечту казахского зайчика
            </div>
            <div className="text-[40px] text-orange-400">IMDB: 🦅/10</div>
            <div className="flex items-center justify-center">
                <iframe src="https://vk.com/video_ext.php?oid=-221995703&id=456241317" width="1280" height="720"
                        frameBorder="0"
                        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
        </>
    )
}

export default Page;