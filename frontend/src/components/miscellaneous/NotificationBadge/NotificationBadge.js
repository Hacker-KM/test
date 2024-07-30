import React from "react";
import "./NotificationBadge.css";

const NotificationBadge = ({ notification = [] }) => {
  return (
    <div className="notification-container">
      {notification.length > 0 && (
        <div className="notification-badge">
          <span className="badge">{notification.length}</span>
        </div>
      )}
    </div>
  );
};

export default NotificationBadge;
