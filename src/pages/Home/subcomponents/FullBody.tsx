/**
 * 
 * @returns {React.ReactElement}
 */

import React from "react";

export default function FullBody({children}:{children:React.ReactElement}):React.ReactElement{
    return <div className="w-full h-full max-w-full max-h-full bg-violet-600">
        {children}
    </div>
}