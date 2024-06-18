
import { Box, Typography } from "@mui/material";
import { formatDate } from "../utility/convertDate";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function ThirdNews({ news, authors}) {
  return (
      <Box sx={{ position: "relative" }}>
        {news[2] && (
          <Box
            sx={{
              textAlign: "center",
              backgroundColor: "#e53935",
              width: "7rem",
              height: "7rem",
              zIndex: 2,
              position: "absolute",
              top: {md: '630px', xs:'60vw'},
              left: {md: '50px', xs: '30px'},
              transform: "skewX(-10deg)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              component="h4"
              sx={{ color: "white", fontWeight: 700 }}
            >
              {formatDate(news[2].created_at).day}
            </Typography>
            <Typography variant="h5" component="h5" sx={{ color: "white" }}>
              {formatDate(news[2].created_at).month}
            </Typography>
            <ArrowDropDownIcon
              sx={{
                height: "4rem",
                width: "4rem",
                position: "absolute",
                bottom: -22,
                right: -22,
                transform: "rotate(-45deg)",
                fill: "white",
              }}
            />
          </Box>
        )}
        <Box sx={{ overflow: "hidden", maxHeight: "45rem" }}>
          {news[2] && (
            <>
              <img
                src={`./${news[2].image_url}`}
                alt="FirstImage"
                className="firstImage"
                loading="lazy"
              />
            </>
          )}
        </Box>
        <Box
          sx={{
            padding: 2,
            display: "flex",
            justifyContent: "flex-end",
            borderBottom: 1,
            alignItems: "center",
          }}
        >
          <ShareOutlinedIcon /> SHARE
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {news[2] && authors[0] && (
            <>
              <Typography
                variant="h6"
                component="h6"
                sx={{ fontWeight: "bold", color: "#e53935" }}
              >
                {authors[0].name}
              </Typography>
              <Typography
                variant="h3"
                component="h3"
                sx={{ fontWeight: "700" }}
              >
                {news[2].title}
              </Typography>
              <Typography
                variant="h6"
                component="h6"
                sx={{ fontWeight: "200", marginTop: "2rem" }}
              >
                {news[1].body}
              </Typography>

              <Typography
                variant="body1"
                component="body1"
                sx={{
                  fontWeight: "700",
                  marginTop: "2rem",
                  borderBottom: 1,
                  width: "fit-content",
                  borderWidth: 3,
                }}
              >
                READ ARTICLE
              </Typography>
            </>
          )}
        </Box>
      </Box>
  );
};

export default ThirdNews;
