import React from "react";

type Props = {
    title: string;
    Id: number;
    name: string;
}

const Pro=({ title="no title", Id, name



}: Props) => {
    return (
        <div>
            <h1>{Id}</h1>
            <img src={name} alt="Image" />
            <p>{title}</p>
        </div>
    );
}

export default Pro;
