import { useEffect } from "react";
import { usePage } from "../context/pageContext";
import "./NotFound.css"

const NotFound = () => {
  const { page, setPage } = usePage();

  useEffect(() => {
    setPage('Not Found')
  }, [])
  
  return <main className="notfound">{page && <h2>404 Page Not Found..</h2>}</main>;
};

export default NotFound;
