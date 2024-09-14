import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {

}

const Button:React.FC<ButtonProps> = ({...rest}) => {
    return (
        <>
            <button className="bg-gradient-to-bl from-blue-400 to-green-400 text-white py-1 px-2 rounded-full" {...rest}>
                Request Invite
            </button>
        </>
    );
};

export default Button;
