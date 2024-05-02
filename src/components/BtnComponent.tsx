import React from 'react'

interface Props {
    routeName: () => void;
}

const BtnComponent: React.FC<Props> = ({ routeName }) => {

    return (
        <button onClick={() => routeName()} > Click to get dynamic Route & Url number</button>
    )
}

export default BtnComponent