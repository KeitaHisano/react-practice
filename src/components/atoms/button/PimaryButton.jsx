import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;

  return (
    <>
      <PButton>{children}</PButton>
    </>
  );
};

const PButton = styled(BaseButton)`
  background-color: #40514e;
`;
