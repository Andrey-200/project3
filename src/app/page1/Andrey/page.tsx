import Header from "@/features/page1/Header/Header";
import Link from "next/link";
import Nom from "@/features/page1/BestNomber/BestNomber";


const Page= () => {
    const name = "Reader"
    const number = 67

    return(
        <>

            <Header>

            </Header>
            <Link href="/page1" className={"btn"}>return</Link>
            <Nom userName = {name} number={number}></Nom>
            <div className="flex w-[500px] h-[500px] justify-center items-center bg-blue-700 text-white">
                andrey

            </div>

        </>
    )
}

export default Page;