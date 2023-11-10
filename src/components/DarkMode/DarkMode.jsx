import React, {useContext} from 'react';
import {ThemeContext} from "@/context/ThemeContext";

const DarkMode = () => {
    const {toggle, mode} = useContext(ThemeContext)
    return (
        <div className="border-solid border-2 border-btn-blue flex items-center justify-between relative cursor-pointer rounded-xl"
             onClick={toggle}
        >
            <div className="text-xl">🌙</div>
            <div className="text-xl">🔆</div>
            <div className="w-[25px] h-[25px] bg-btn-blue rounded-[50%] absolute" style={mode === "dark" ? {left: "2px"} : {right: "2px"}}></div>
        </div>
    );
};

export default DarkMode;