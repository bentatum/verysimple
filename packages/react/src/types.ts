export type StatusColors =
  | "off"
  | "standby"
  | "normal"
  | "caution"
  | "serious"
  | "critical";

export type $ElementProps<T> = T extends React.ComponentType<infer Props>
  ? Props extends object
    ? Props
    : never
  : never;

export type ButtonColor = "primary" | "neutral" | "destructive";

export type ElementSize = "xs" | "sm" | "md" | "lg";
export type ButtonSize = ElementSize;
export type InputSize = ElementSize;
export type ChipSize = ElementSize;
