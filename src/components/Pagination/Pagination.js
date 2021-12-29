// Scss
import "./Pagination.scss";

const pagination = ({
  dataCryptocurrencyListingsLatest,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(dataCryptocurrencyListingsLatest.data.length / postsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }
  const paginate = (pageNumbers) => setCurrentPage(pageNumbers);

  console.log(dataCryptocurrencyListingsLatest);

  return (
    <div className="page-number-container">
      <p className="text-pagination">
        Showing {currentPage * postsPerPage - (postsPerPage - 1)} -{" "}
        {currentPage * postsPerPage} out of{" "}
        {dataCryptocurrencyListingsLatest.data.length}
      </p>

      <div className="pagination-container">
        {/* we perform a .map to display the number of pages */}
        {pageNumbers.map((number) => (
          <div
            key={number}
            className="page-numbers"
            onClick={() => paginate(number)}
          >
            <a>{number}</a>
          </div>
        ))}
      </div>

      <div className="show-rows">
        <p>Show rows</p>
        <div>{postsPerPage}</div>
      </div>
    </div>
  );
};

export default pagination;
