import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2ページです</h1>
      <Link to="/Page2/200">URL PARAMETER</Link>
      <br />
      <Link to="/Page2/200?name=hogehoge">QUERY PARAMETER</Link>
    </div>
  );
};
