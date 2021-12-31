import "./ProgressBarCirculatingSupply.scss";

const ProgressBar = ({ percentage }) => {
  return (
    <div className="ProgressBar" style={{ width: `${percentage}%` }}></div>
  );
};

export default ProgressBar;
