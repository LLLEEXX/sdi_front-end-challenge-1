import { useState, useEffect } from "react";
import "./styles/App.css";
import { Box, Stack } from "@mui/material";
import FirstNews from "./components/FirstNews";
import SecondNews from "./components/SecondNews";
import ThirdNews from "./components/ThirdNews";

function App() {
  const [news, setNews] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchNews = fetch(
      "https://tmsph-sdi-challenges.pages.dev/challenges/news.json"
    ).then((response) => response.json());
    const fetchAuthors = fetch(
      "https://tmsph-sdi-challenges.pages.dev/challenges/authors.json"
    ).then((response) => response.json());

    Promise.all([fetchNews, fetchAuthors])
      .then(([newsData, authorsData]) => {
        setNews(newsData);
        setAuthors(authorsData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Box sx={{ height: "100vh", fontFamily: "Roboto"}}>
      <Stack direction="column" spacing={15}>
        <Box>
          <FirstNews news={news} authors={authors} />
        </Box>
        <Box>
          <SecondNews news={news} authors={authors} />
        </Box>
        <Box>
          <ThirdNews news={news} authors={authors} />
        </Box>
      </Stack>
    </Box>
  );
}

export default App;
