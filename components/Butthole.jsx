import { useState } from "react"

function Butthole({ onClick, children, className,theme }) {
    const theme_set = {
        light: 'bg-[#eee] hover:[#fff] text-[#333]',
        dark: 'bg-[#333] hover:bg-[#444] text-[#eee]'
    }

    return (
        <div
            className={`${theme_set[theme]} rounded-[5px] cursor-pointer select-none ${className ?? ''}`}
            onClick={onClick}>
            {children}
        </div>
    )
    }
    export default Butthole