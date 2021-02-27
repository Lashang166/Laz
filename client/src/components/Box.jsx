import React from 'react'

const Box = ({children, color, checked}) => {
    return (
        <div  
            // style={{
            //     border: `1px solid ${checked ? "" : ""}`
            // }}
            className={`min-w-max px-3 py-1 w-9 h-9 ring-1 ${checked ? "ring-primary-400" : "ring-gray-400"} text-xl bg-white ${checked ? "text-primary-200" : "text-black"} flex items-center justify-center rounded-sm`}>
         {children}
        </div>

    )
}
//${checked ? "ring-black" : "ring-gray-50"}
export default Box
