const Listings = ({ dataPrice }) => {
  return (
    <div>
      {dataPrice.data.map((crypto, id) => {
        return <div key={id}>{crypto.name}</div>;
      })}
    </div>
  );
};
export default Listings;
