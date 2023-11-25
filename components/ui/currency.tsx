"use client"

import { useEffect, useState } from "react";

export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'SAR',
});

interface CurrencyProps {
    value: String | Number;
}

const Currency:React.FC<CurrencyProps> = ({ value }) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (isMounted) null;

    return (
        <div>{formatter.format(Number(value))}</div>
    )
}

export default Currency