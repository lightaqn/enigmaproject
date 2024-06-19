import styled from "styled-components";

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
const Spin = styled.div`
  border-radius: 50%;
  height: 35px;
  width: 35px;
  border-color: #fff;
`;

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <Spin />
    </SpinnerWrapper>
  );
};

/* <div class="animate-spin rounded-full h-35 w-35 border-b-2 border-amber-700" /> */

export default Spinner;
