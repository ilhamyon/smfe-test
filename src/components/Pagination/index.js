import { useEffect, useState } from "react";
import ArrowsMover from "./ArrowsMover";
import { PaginationStyled } from "./index.style";
import Pages from "./Pages";

const Pagination = ({ currentPage, start, end, onPageChange }) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    setPages(() => {
      let results = [];
      for (let i = start; i <= end; i++) {
        results.push(i);
      }

      return results;
    });
  }, [start, end]);

  const handleChangePage = (page) => {
    onPageChange(page);
  }

  return (
    <PaginationStyled>
      <ArrowsMover position="left" />
      <Pages pages={pages} currentPage={currentPage} onClick={handleChangePage}/>
      <ArrowsMover position="right" />
    </PaginationStyled>
  );
};

export default Pagination;
