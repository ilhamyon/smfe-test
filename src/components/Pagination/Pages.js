import { Link } from "react-router-dom";
import { PagesStyled } from "./Pages.style";

const Pages = ({ pages, currentPage, onClick }) => {
  return (
    <PagesStyled>
      {pages.map((page) => (
        <li key={page}>
          <Link
            className={page === currentPage ? "active" : ""}
            to="#"
            onClick={() => {
              onClick(page);
            }}
          >
            {page}
          </Link>
        </li>
      ))}
    </PagesStyled>
  );
};

export default Pages;
