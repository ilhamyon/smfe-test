import Filter from "./Filter";
import { HeaderStyled, ShowingPostCount, Filters } from "./Header.style";

export const SORT_BY_NEWEST = "0",
  SORT_BY_OLDEST = "1",
  FILTER_TYPE_SHOW_PER_PAGE = "0",
  FILTER_TYPE_SORT_BY = "1";

const showPerPageValues = [
  { text: "10", value: 10 },
  { text: "20", value: 20 },
  { text: "50", value: 50 },
];

const sortByValues = [
  { text: "Newest", value: SORT_BY_NEWEST },
  { text: "Oldest", value: SORT_BY_OLDEST },
];

const Header = ({ currentPage, postPerPage, totalPages, onFilterChange }) => {
  const handleFilterChange = (value) => {
    onFilterChange(value);
  };

  return (
    <HeaderStyled className="text-s mb-5">
      <ShowingPostCount>
        <span>
          Showing {currentPage} - {postPerPage} of {totalPages}
        </span>
      </ShowingPostCount>

      <Filters>
        <Filter
          label="Show per page"
          items={showPerPageValues}
          onChange={(value) => {
            handleFilterChange({ ...value, type: FILTER_TYPE_SHOW_PER_PAGE });
          }}
        />

        <Filter
          label="Sort by"
          items={sortByValues}
          onChange={(value) => {
            handleFilterChange({ ...value, type: FILTER_TYPE_SORT_BY });
          }}
        />
      </Filters>
    </HeaderStyled>
  );
};

export default Header;
