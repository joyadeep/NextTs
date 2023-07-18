import { MouseEventHandler } from "react";

export interface ICustomButtonProps{
    title:string;
    styles?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
    btnType?:"button"| "submit" ;
}