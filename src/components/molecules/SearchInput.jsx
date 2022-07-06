import { PrimaryButton } from "../atoms/button/PimaryButton";
import { Input } from "../atoms/input/Input";

import styled from "styled-components";
import { memo } from "react";

export const SearchInput = memo(() => {
  console.log("serchInput");
  return (
    <>
      <Scontainer>
        <Input type="text" placeholder="検索条件を入力" />
        <SButtonWrapper>
          <PrimaryButton>検索</PrimaryButton>
        </SButtonWrapper>
      </Scontainer>
    </>
  );
});

const Scontainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
