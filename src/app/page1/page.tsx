import HWw from "@/features/page1/HelloWorld/HW";
import Link from "next/link";

const Page= () => {
    const name = "andrey"

    return(
        <>
            <Link href="/page1/Andrey" className={"btn"}>Andrey</Link>
            <div className="flex w-[500px] h-[500px] justify-center items-center bg-blue-700 text-white">
                <p>
                    <span>Za WARRRDO</span>
                    <HWw userName="ANDREY"/>
                    {name}

                </p>
            </div>
        </>
    )
}

export default Page;