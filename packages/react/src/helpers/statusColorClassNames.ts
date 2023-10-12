import classNames from "classnames";
import { Status } from "@/types";

export const statusColorClassNames = (status?: Status) =>
  classNames({
    "bg-blue-500 text-white": status === "standby",
    "bg-green-500 text-white": status === "normal",
    "bg-zinc-400 text-white": status === "off",
    "bg-red-500 text-white": status === "critical",
  });
