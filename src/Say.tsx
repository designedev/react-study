import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("Hello!");
  const onClickLeave = () => setMessage("Bye!");
  return (
    <div>
      <button onClick={onClickEnter}>Enter!</button>
      <button onClick={onClickLeave}>Leave!</button>
      {message}
    </div>
  );
};

export default Say;
