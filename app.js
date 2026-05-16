const cors = require("cors");

//Cors
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.get("/", (req, res) => {
    res.send("hello");
});

app.listen(4000, () => {
    console.log(`Server is listening on http://localhost:${4000}`);
});