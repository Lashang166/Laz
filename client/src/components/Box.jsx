import React from 'react'

const Box = ({children, color, checked}) => {
    return (
        <div style={{backgroundColor: color}} class={`w-9 h-9 ring-1 ${checked ? "ring-black" : "ring-gray-50"} text-xl bg-gray-400 flex items-center justify-center rounded-sm`}>
         {children}
        </div>

    )
}

export default Box
