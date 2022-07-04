import { SearchInput } from "./components/molecules/SearchInput";
import { PrimaryButton } from "./components/atoms/button/PimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { UserCard } from "./components/organisms/user/UserCard";

const user = {
  name: "たなか",
  image: "https://source.unsplash.com/1QsQRkxnU6I",
  email: "11111@aaa.com",
  phone: "0000-1111-2222",
  company: {
    name: "株式会社まるまる"
  },
  website: "company.com"
};

export const Atom = () => {
  return (
    <>
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>ボタン</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </>
  );
};
