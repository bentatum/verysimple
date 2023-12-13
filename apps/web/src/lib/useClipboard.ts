import { useState, useCallback } from "react";

const useClipboard = () => {
  const [isCopied, setCopied] = useState(false);

  const handleCopy = useCallback((text: any) => {
    if (typeof window === "undefined") return;

    try {
      window.navigator.clipboard.writeText(text);
      setCopied(true);
    } catch (err) {
      setCopied(false);
    }
  }, []);

  const handleReset = useCallback(() => setCopied(false), []);

  return { isCopied, onCopy: handleCopy, onReset: handleReset };
};

export default useClipboard;
