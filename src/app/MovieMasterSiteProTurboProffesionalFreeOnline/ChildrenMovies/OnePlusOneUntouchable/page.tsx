
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
                <Image src="/1+7_touchable.jpg" alt="ляшки такие вкусняшки" className="items-end" width={400}
                       height={400}/>
            </div>
            <div className="text-[20px]">
                Это удивительнаяя, захватывающая комедия о том как бедый аристократ приютил черного парня с улиц и этот
                негр делал с ним всякое. Позднее у них завязалась настоящая мужская дружба на долгие годы и об этом
                сняли фильм
            </div>
            <div className="text-[40px] text-orange-400">IMDB: 8.8/10</div>
            <div className="flex items-center justify-center">
                <iframe src="https://vk.com/video_ext.php?oid=-220018529&id=456243240&hash=..." width="1280" height="720"
                        frameBorder="0"
                        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
        </>
    )
}

export default Page;