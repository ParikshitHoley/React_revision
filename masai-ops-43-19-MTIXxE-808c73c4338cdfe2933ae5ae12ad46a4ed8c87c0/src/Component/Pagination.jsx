function Pagination({page,totalpage,HandleChange}) {
  const prev = (
    <button
      data-testid="prev-page"
      disabled={page===1 ? true : false}
      onClick={()=>{
        HandleChange(-1);
      }}
    >
      Prev
    </button>
  );
  const currentPage = <button data-testid="current-page">{page}</button>;
  const next = (
    <button
      data-testid="next-page"
      disabled={page===totalpage ? true : false}
      
      onClick={()=>{
        HandleChange(1);
      }}
    >
      Next
    </button>
  );
  return (
  <div data-testid="page-container">
      <div>
      {prev}
      {currentPage}
      {next}
      </div>
      <div>
        Total Pages: <b data-testid="total-pages">{totalpage}</b>
      </div>
    </div>
  );
}

export default Pagination;
