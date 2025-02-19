"use client";
import Image from "next/image";

interface ButtonProps {
    link?: string;
    text: string;
    fontSize: string;
    textColour: string;
    fontWeight: String;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    link,
    text,
    fontSize,
    textColour,
    fontWeight,
    onClick,
}) => {
    return (
        <a
            href={link}
            onClick={onClick}
            className={`group flex items-end leading-4 ${fontSize} ${textColour} ${fontWeight}`}
        >
            {text}
            <Image
                className="ml-2 duration-300 transition-transform relative top-[-2px] group-hover:translate-x-1 group-hover:-translate-y-1"
                src="/arrow.svg"
                alt="Arrow Icon"
                width={12}
                height={12}
            />
        </a>
    );
};

export default Button;
