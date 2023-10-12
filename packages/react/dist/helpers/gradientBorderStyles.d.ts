export interface GradientBorderStylesOptions {
    borderSize?: any;
    backgroundColor?: string;
    direction?: "top" | "right" | "bottom" | "left";
    startColor?: string;
    stopColor?: string;
}
export declare const gradientBorderStyles: ({ borderSize, backgroundColor: bg, direction: dir, startColor, stopColor, }?: GradientBorderStylesOptions) => {
    background: string;
    backgroundClip: string;
    padding: any;
};
