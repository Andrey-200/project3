
const Page= () => {
    const people = ["123", "456", "789","A","B","C","D","E"]
    return(
        <>
            <ul>
                {people.map((item: string, index: number) =>
                    <li key={index}>
                        {item}
                    </li>
                )}
            </ul>
        </>
    )
}

export default Page;