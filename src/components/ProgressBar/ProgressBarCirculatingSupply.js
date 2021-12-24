import styled from "styled-components";

const Tracker = styled.div`
  height: 6px;
  border-radius: 3px;
  background: rgb(207, 214, 228);
  width: 145px;
`;

const ProgressBar = () => {
  return <Tracker></Tracker>;
};

export default ProgressBar;
