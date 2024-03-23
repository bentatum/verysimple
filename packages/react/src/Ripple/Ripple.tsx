import React, {
  useState,
  useRef,
  useEffect,
  cloneElement,
  ReactElement,
  Fragment,
} from "react";

const rippleSize = 100;

interface RippleProps {
  children: ReactElement; // Expecting a single React element
}

const Ripple = React.forwardRef<HTMLDivElement, RippleProps>(
  ({ children }, ref) => {
    const [coords, setCoords] = useState({ x: -1, y: -1 });
    const [rippleKey, setRippleKey] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const createRipple = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
      const x = e.clientX - rect.left - rippleSize / 2;
      const y = e.clientY - rect.top - rippleSize / 2;

      setCoords({ x, y });
      setRippleKey(Date.now());

      timeoutRef.current = setTimeout(() => {
        setCoords({ x: -1, y: -1 });
      }, 400); // Adjust the timeout to match your animation duration
    };

    useEffect(() => {
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, []);

    // Clone the child element to inject props and include the ripple span as a child
    const childWithProps = cloneElement(
      children,
      {
        ref: ref,
        onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          createRipple(e); // Call the ripple effect function
          if (children.props.onClick) {
            children.props.onClick(e); // Call the original click handler if it exists
          }
        },
        style: { position: "relative", ...children.props.style },
      },
      [
        children.props.children,
        coords.x !== -1 && (
          <span
            key={rippleKey}
            className="absolute -z-10 bg-gray-200/50 rounded-full w-20 h-20 animate-ripple opacity-20"
            style={{
              left: coords.x,
              top: coords.y,
              position: "absolute", // Ensure the ripple effect is positioned absolutely within the parent
            }}
          />
        ),
      ]
    );

    // Wrap the cloned child and the ripple effect in a Fragment to return a single element
    return <Fragment>{childWithProps}</Fragment>;
  }
);

export default Ripple;
