import axios from "axios";

import { PrimaryButton } from "../atoms/button/PimaryButton";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

export const Api = () => {
  const onClickUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onClickUser1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <PrimaryButton onClick={onClickUsers}>users</PrimaryButton>
      <SecondaryButton onClick={onClickUser1}>id1のuser</SecondaryButton>
    </>
  );
};
