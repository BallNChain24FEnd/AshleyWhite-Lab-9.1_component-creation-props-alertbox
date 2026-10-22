
import type { AlertBoxProps } from "../../types";

// Create AlertBox component using props
export default function AlertBox({
  type,
  message,
  onClose,
  children
}: AlertBoxProps) {

  // Set colors for each alert type
  const alertStyles = {
    success: "green",
    error: "red",
    warning: "orange",
    info: "blue"
  };

  // Style alert based on type
  const style = {
    border: `3px solid ${alertStyles[type]}`,
    padding: "10px",
    margin: "10px"
  };

  // Display alert message and content
  return (
    <div role="alert" style={style}>
      <p>{message}</p>

      {/* Show close button if provided */}
      {onClose && (
        <button type="button" onClick={onClose}>
          Close
        </button>
      )}

      {/* Display additional content */}
      {children}
    </div>
  );
}
