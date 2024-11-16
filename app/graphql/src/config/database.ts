import { DataSource } from "typeorm";
import { User } from "../entities/user-entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "postgres", // name of instance in compose file
  port: 5432,
  username: "postgres",
  password: "ATChal1enge!",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [User],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => console.error("Database connection error", error));
