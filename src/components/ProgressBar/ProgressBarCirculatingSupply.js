import styled from "styled-components";

const Tracker = styled.div`
  height: 6px;
  border-radius: 3px;
  background: rgb(207, 214, 228);
`;

const ProgressBar = ({ percentage }) => {
  return <Tracker style={{ width: `${percentage}%` }}></Tracker>;
};

export default ProgressBar;
