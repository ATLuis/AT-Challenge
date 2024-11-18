import { DataSource } from "typeorm";
import { User } from "../entities/user-entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "postgres", // name of instance in compose file
  port: 5432,
  username: "at",
  password: "ATChal1enge!",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [User],
});

AppDataSource.initialize()
  .then(async () => {
    const userCount = await User.count();
    if (userCount === 0) {
      console.log("usuario por defecto...");
      const defaultUser = User.create({
        username: "admin",
        password: "admin123", 
        email: "admin@example.com",
      });
      await defaultUser.save();
      console.log("Usuario por defecto creado: ", defaultUser);
    } else {
      console.log(`Usuarios existentes encontrados: ${userCount}`);
    }
  })
  .catch((error) => console.error("Error al conectar a la base de datos:", error));