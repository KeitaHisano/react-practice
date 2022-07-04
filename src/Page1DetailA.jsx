import { useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  const location = useLocation();
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <h1>Page1DetailAページです</h1>
      {state.map((value) => (
        <p key={value}>{value}</p>
      ))}
    </div>
  );
};
