const containerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  "&:before,&:after": {
    display: "table",
    content: '" "',
  },
  "&:after": {
    clear: "both",
  },
}

const container = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  "@media (min-width: 768px)": {
    width: "750px",
  },
  "@media (min-width: 992px)": {
    width: "970px",
  },
  "@media (min-width: 1200px)": {
    width: "1170px",
  },
  "&:before,&:after": {
    display: "table",
    content: '" "',
  },
  "&:after": {
    clear: "both",
  },
}

const blackColor = "#000"
const grayColor = [
  "#999",
  "#777",
  "#3C4858",
  "#AAAAAA",
  "#D2D2D2",
  "#DDD",
  "#555555",
  "#333",
  "#eee",
  "#ccc",
  "#e4e4e4",
  "#E5E5E5",
  "#f9f9f9",
  "#f5f5f5",
  "#495057",
  "#e7e7e7",
  "#212121",
  "#c8c8c8",
  "#505050",
]

const linkedinColor = "#0976b4"

const whiteColor = "#FFF"

export {
  containerFluid,
  container,
  grayColor,
  blackColor,
  linkedinColor,
  whiteColor,
}
