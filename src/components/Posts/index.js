import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import Header, {
  FILTER_TYPE_SHOW_PER_PAGE,
  FILTER_TYPE_SORT_BY,
  SORT_BY_NEWEST,
} from "./Header";
import PostList from "./PostList";

const apiUrl = "https://suitmedia-backend.suitdev.com/api/ideas";

const Posts = () => {
  const [posts, setPosts] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const [sortBy, setSortBy] = useState(SORT_BY_NEWEST);

  const totalPages = posts ? posts.meta.total : "loading..";

  const getPosts = async () => {
    const res = await axios.get(
      `${apiUrl}?page[number]=${currentPage}&page[size]=${postPerPage}&append[]=small_image&append[]=medium_image&sort=${
        sortBy === SORT_BY_NEWEST ? "-" : ""
      }published_at
          `
    );

    setPosts(res.data);
  };

  useEffect(() => {
    getPosts();
  }, [postPerPage, currentPage, sortBy]);

  const handleFilterChange = (value) => {
    switch (value.type) {
      case FILTER_TYPE_SHOW_PER_PAGE:
        setPostPerPage(value.value);
        break;

      case FILTER_TYPE_SORT_BY:
        setSortBy(value.value);
        break;

      default:
        throw new Error("type not found");
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section>
      <Header
        currentPage={currentPage}
        postPerPage={postPerPage}
        totalPages={totalPages}
        onFilterChange={handleFilterChange}
      />
      {posts && <PostList posts={posts.data} />}
      <Pagination
        currentPage={currentPage}
        start={1}
        end={5}
        onPageChange={handlePageChange}
      />
    </section>
  );
};

export default Posts;
