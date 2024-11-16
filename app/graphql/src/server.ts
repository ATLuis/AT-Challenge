import app from "./app";
import { API_PORT } from "./constants";

app.listen(API_PORT, () => {
  console.log(`Server running on port ${API_PORT}`);
});
