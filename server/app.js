import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 5000;
app.use(express.static('public'))
app.get('*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, './../client/index.html'));
})
app.listen(port, () => {
  console.log(`server running on ${port}`)
})
