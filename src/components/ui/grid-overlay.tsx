import clsx from "clsx";
import * as React from "react";

function GridOverlay({ className, ...props }: React.ComponentProps<"div">) {
  const [visible, setVisible] = React.useState(true);
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "G" && event.shiftKey) {
        setVisible((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div
      className={`fixed inset-0 pointer-events-none ${className}`}
      {...props}
    >
      <div className="container px-4 grid grid-cols-7 gap-x-1.5 h-full mx-auto">
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            key={index}
            className={clsx(visible ? "bg-gray-200/10" : "bg-transparent")}
          />
        ))}
      </div>
    </div>
  );
}
export { GridOverlay };
