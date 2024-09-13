import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

import UserCard from "@/components/UserCard/UserCard";
import { NotFound } from "@/components/image";
import NotFoundData from "@/components/NotFoundData/NotFoundData";

export default function SearchResults() {
  const router = useRouter();
  const { query } = router.query;
  const [results, setResults] = useState([]);

  console.log("query", query);

  useEffect(() => {
    if (query) {
      axios
        .get(`/api/users?query=${query}`)
        .then((res) => setResults(res.data))
        .catch((err) => {
          console.error(err), setResults([]);
        });
    }
  }, [query]);

  console.log("query", query);
  console.log("results", results);



  return (
    <div className="flex flex-col items-center p-8 min-h-[100vh] bg-gradient-to-b from-white to-lightBlue">
      <div className="w-full mt-32 md:mt-24 xl:max-w-screen-xl gap-5 flex flex-col md:flex-row items-center justify-center flex-wrap">
        {results.length > 0 ? (
          results.map((user, index) => <UserCard user={user} index={index} />)
        ) : (
          <NotFoundData />
        )}
      </div>
    </div>
  );
}
