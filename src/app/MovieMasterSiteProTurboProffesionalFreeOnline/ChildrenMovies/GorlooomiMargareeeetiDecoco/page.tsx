
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
                <Image src="/TiZaMir.PNG" alt="ляшки такие вкусняшки" className="items-end" width={800}
                       height={400}/>
            </div>
            <div className="text-[20px]">
                Брутальный боевик, где трое итальянских киношников пытаются остановить войну изнутри тоталитарной системы. Этот фильм поднимает сложные этические и моральные проблемы, на что способен пойти человек ради достижения своей цели.
            </div>
            <div className="text-[40px] text-orange-400">IMDB: 6.7/10</div>
            <div className="flex items-center justify-center">
                <iframe src="https://vk.com/video_ext.php?oid=-229785519&id=456240088" width="1280" height="720"
                        frameBorder="0"
                        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
        </>
    )
}

export default Page;