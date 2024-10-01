

export const fieldBorderRadiusClassNames = (className: string) => {
  const hasRoundedClass = className.match(/rounded/);
  return hasRoundedClass ? "" : "rounded";
};
