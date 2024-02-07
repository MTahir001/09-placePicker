import { useEffect, useState } from "react";
const TIMER = 3000;
export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [timeRemaining, setTimeRemaining] = useState(TIMER);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prev) => (prev -= 10));
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("from timer");
      onConfirm();
    }, 3000);

    return () => {
      console.log("from clear");
      clearTimeout(timer);
    };
  }, []);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={timeRemaining} max={TIMER} />
    </div>
  );
}
