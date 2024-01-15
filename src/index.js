import PDFMerger from "pdf-merger-js";
import Express from "express";

const merger = new PDFMerger();

const app = Express();

const port = 3000;

const concatPDF = async () => {
  const merger = new PDFMerger();
  await merger.add("src/assets/sample.pdf");
  await merger.add("src/assets/sample-2.pdf");
  await merger.save("src/assets/merged.pdf");
};

app.get("/concat", (_, res) => {
  concatPDF();
  res.json({ success: "?" });
});

app.get("/", (req, res) => {
  res.json({ success: true });
});

app.listen(port, () => {
  console.log("Listening on port ", port);
});
