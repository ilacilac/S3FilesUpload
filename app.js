const express = require("express");
const app = express();
const { upload } = require("./upload");

app.post("/upload/array", upload.array("file"), (req, res) => {
  let count = 0;
  console.log("Start : Upload Files");
  console.time("End : Upload Files");
  req.files.forEach((file) => {
    console.log("Upload : ", file.originalname);
    count++;
  });
  console.timeEnd("End : Upload Files");
  console.log(`${count}개 파일 업로드 완료했습니다.`);
});

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
