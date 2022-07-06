import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children, onClick } = props;

  return (
    <>
      <PButton onClick={onClick}>{children}</PButton>
    </>
  );
};

const PButton = styled(BaseButton)`
  background-color: #40514e;
`;
