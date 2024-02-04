import classNames from "classnames";
import { StatusColors } from "@/types";
import { cva } from "class-variance-authority";

export const statusColorClassNames = (status?: StatusColors) =>
  cva([], {
    variants: {
      status: {
        off: "bg-gray-400 text-white",
        standby: "bg-blue-300 text-white",
        normal: "bg-green-500 text-white",
        caution: "bg-yellow-500 text-white",
        serious: "bg-orange-500 text-white",
        critical: "bg-red-500 text-white",
      },
    },
  });
