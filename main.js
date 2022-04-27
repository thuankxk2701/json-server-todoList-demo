
const express= require('express')

const path =require('path')

// Set default middlewares (logger, static, cors and no-cache)
const app=express()



app.use("/uploads", express.static(path.join(__dirname, "./uploads")));
const PORT = 8080;
app.listen(PORT, () => {
  console.log('JSON Server is running');
});
