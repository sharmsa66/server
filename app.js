const express = require("express");
const data = require("./data/templates.json");
const cors = require('cors');
const paginate = require("./utils/utils");

const app = express();

const port = 3001;

app.use(cors({}));

app.use("/api/v1/templates", (req, res) => {
  const { pageNum, pageSize } = req.query;
  let sliceData = [];

  if (pageNum) {
    sliceData = paginate(data, pageSize, pageNum);
    return res.json(sliceData);
  }

  return res.json(data);
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
