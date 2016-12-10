import express from 'express';
import path from 'path';
import open from 'open';

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.listen(PORT, (err) => {
  if (err) {
    console.log('err: ', err);
  } else {
    console.info('===> Listening on port %s.', PORT);
    open(`http://localhost:${PORT}`)
  }
});
