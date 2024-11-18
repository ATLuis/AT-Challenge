import { User } from "../entities/user-entity";
import jwt from "jsonwebtoken";

export const userResolver = {
  Mutation: {
    async login(_: any, { username, password }: { username: string; password: string }) {
      try {
        const user = await User.findOneBy({ username });

        if (!user) {
          return { success: false, message: "Usuario no encontrado", token: null };
        }

        if (user.password !== password) {
          return { success: false, message: "Contraseña incorrecta", token: null };
        }
        
        if (!user.active) {
            user.active = true;
            await user.save();
          }
    
        const token = jwt.sign(
          { id: user.id, username: user.username },
          process.env.JWT_SECRET || "secret_key", 
          { expiresIn: "1h" }
        );

        return { success: true, message: "Login exitoso", token };
      } catch (error) {
        console.error("Error en el login:", error);
        return { success: false, message: "Error interno del servidor", token: null };
      }
    },
  },
};
