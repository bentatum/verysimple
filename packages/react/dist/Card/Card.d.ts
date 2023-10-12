import { ComponentPropsWithRef, ElementType, PropsWithChildren } from "react";
export interface CardProps extends PropsWithChildren, ComponentPropsWithRef<"div"> {
    as?: ElementType;
}
export declare const Card: import("react").ForwardRefExoticComponent<Omit<CardProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export default Card;
