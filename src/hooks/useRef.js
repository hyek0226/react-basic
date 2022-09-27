import { useRef } from "react";

const Click = () => {
  const input = useRef();
  setTimeout(() => input.current.focus(), 1000);
  return (
    <div>
      <input ref={input} placeholder="click me" />
    </div>
  );
};
export default Click;
