import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const array = [...Array(100).keys()];
  console.log(array);

  const history = useHistory();

  const onClickDetailA = () => {
    return history.push("/page1/DetailA");
  };
  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to={{ pathname: "/Page1/detailA", state: array }}>DetailA</Link>
      <br />
      <Link to="/Page1/detailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
