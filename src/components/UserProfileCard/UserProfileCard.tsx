
import type { UserProfileCardProps } from "../../types";

// Create user profile component
export default function UserProfileCard({
  user,
  showEmail = true,
  showRole = true,
  onEdit,
  children
}: UserProfileCardProps) {

  // Style profile card
  const style = {
    border: "2px solid gray",
    padding: "15px",
    margin: "10px",
    borderRadius: "8px"
  };

  // Display user information
  return (
    <div style={style}>

      {/* Show avatar if provided */}
      {user.avatarUrl && (
        <img
          src={user.avatarUrl}
          alt={user.name}
          width="100"
        />
      )}

      {/* Display user name */}
      <h2>{user.name}</h2>

      {/* Show email if enabled */}
      {showEmail && (
        <p>Email: {user.email}</p>
      )}

      {/* Show role if enabled */}
      {showRole && (
        <p>Role: {user.role}</p>
      )}

      {/* Show edit button if provided */}
      {onEdit && (
        <button
          type="button"
          onClick={() => onEdit(user.id)}
        >
          Edit Profile
        </button>
      )}

      {/* Display additional content */}
      {children}
    </div>
  );
}
