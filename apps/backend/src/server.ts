import app from './app';

const port = process.env.PORT || 5432;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});