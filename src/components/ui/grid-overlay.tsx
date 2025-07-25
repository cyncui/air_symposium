import clsx from "clsx";
import * as React from "react";

function GridOverlay({ className, ...props }: React.ComponentProps<"div">) {
  const [visible, setVisible] = React.useState(false);
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
      className={`fixed inset-0 z-100 pointer-events-none ${className}`}
      {...props}
    >
      <div className="subsection h-full mx-auto">
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            key={index}
            className={clsx(
              "h-full",
              visible ? "bg-foreground/10" : "bg-transparent"
            )}
          />
        ))}
      </div>
    </div>
  );
}
export { GridOverlay };
