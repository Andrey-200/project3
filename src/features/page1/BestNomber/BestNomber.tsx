import React from "react";

interface Props{
    userName: string,
    number: number
}

const Nom = ({userName, number}: Props) => {
    return(
        <span>
            {userName}{"'"}s best nomber is {number}
        </span>
    )
}

export default Nom;