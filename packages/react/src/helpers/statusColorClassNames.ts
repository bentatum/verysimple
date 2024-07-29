import { StatusColors } from "@/types";

const statusClasses = {
  off: "bg-gray-400 text-white",
  standby: "bg-blue-300 text-white",
  normal: "bg-green-500 text-white",
  caution: "bg-yellow-500 text-white",
  serious: "bg-orange-500 text-white",
  critical: "bg-red-500 text-white",
};

export const statusColorClassNames = (status?: StatusColors) =>
  status ? statusClasses[status] : "";
