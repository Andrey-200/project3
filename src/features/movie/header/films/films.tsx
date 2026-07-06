import React from "react";
import Link from "next/link";


const Films  = () => {
    return(
        <ul className="flex gap-10 w-fit bg-[#FFF326] items-center justify-center font-bold text-[20px] text-orange-400">
            <Link href="/MovieMasterSiteProTurboProffesionalFreeOnline">Main</Link>
            <Link href="/MovieMasterSiteProTurboProffesionalFreeOnline/ChildrenMovies/Green_Elefanto">Green_Elefanto</Link>
            <Link href="/MovieMasterSiteProTurboProffesionalFreeOnline/ChildrenMovies/GorlooomiMargareeeetiDecoco">GorlooomiMargareeeetiDecoco</Link>
            <Link href="/MovieMasterSiteProTurboProffesionalFreeOnline/ChildrenMovies/Borata_Kazaha">Borata_Kazaha</Link>
            <Link href="/MovieMasterSiteProTurboProffesionalFreeOnline/ChildrenMovies/OnePlusOneUntouchable">1+1_Untouchable</Link>
        </ul>
    )
}

export default Films;