import React from "react";
import Image from "next/image";


const WinText  = () => {
    return(
        <>
            <div className="flex gap-12 w-full bg-#FFE500 items-center justify-center text-[24px] font-bold">
                Сайт предназначен только для ознакомительного просмотра, для просмотра поставьте согласия:
            </div>

            <div className="w-full grid grid-cols-2">
                <div>
                    <ul>
                        <li>согласие на обработку персональных данных <input type="checkbox"/></li>
                        <li>согласие на добровольное рабство <input type="checkbox"/></li>
                        <li>согласие на работу поваром (не штурм) <input type="checkbox"/></li>
                    </ul>
                    <button type="submit" className="bg-cyan-300">confirm</button>
                </div>
                <div className="w-full">
                    <Image src="/brian-family-guy.gif" alt="ZoomerDead" className="items-end" width={400} height={400} />
                </div>
            </div>
        </>
    )
}

export default WinText;