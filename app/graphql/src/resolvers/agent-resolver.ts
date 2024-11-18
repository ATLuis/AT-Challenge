import { AppDataSource } from "../config/database";
import { signToken } from "../utils/jwt";
import { User } from "../entities/user-entity";
import bcrypt from "bcrypt";
import { stringify } from "querystring";
import { Query } from "typeorm/driver/Query";
const fetch = require('node-fetch');

interface AgentById {
  id: number;
}

interface AuthPayload {
  token: string | null;
  message: string;
}

interface AgentCreate {
  parentId:number,
  firstName:string,
  lastName:string,
  userName:string,
  phone:string,
  password:string,
}
interface Agent {
  parentId:number,
  id : number,
  firstName:string,
  lastName:string,
  userName:string,
  phone:string,
  password?:string,
}
const NET_URL = 'http://127.0.0.1:5000/api/values';

export const agentResolver = {
  Query:{
    async agent(_:unknown,args:AgentById) :Promise<Agent|null>{
      try{
        // Only authenticated users can fetch agents
        let rs = await fetch(`${NET_URL}/${args.id}`);
        console.log(await rs.json())
        return null;
      }catch(e){
        console.log(e)
        throw "User not found";
      }
    },
    async agentChilds(_:unknown,args:AgentById) :Promise<Agent[]>{
      try{
        // Only authenticated users can fetch agents
        let rs = await fetch(`${NET_URL}/child/${args.id}`);
        let ff =  await rs.json();
        // return ff.map(el=> {
        //   return {
        //   }
        // });
        return ff;
      }catch(e){
        console.log(e)
        return []
      }
    },
  },
  Mutation: {
    createAgent: async (_:unknown, args: AgentCreate):Promise<Agent|null> => {
      try{
        // Create agent (call to your .NET API)
        const userRepository = AppDataSource.getRepository(User);
        var nuser =userRepository.create({
          username:args.userName,
          password:args.password
        })
        let nreg =await userRepository.save(nuser)
        console.log('new user here',nreg)
        let rs = await fetch(`${NET_URL}/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            UserId:nreg.id,
            Firstname:args.firstName,
            LastName:args.lastName,
            Phone:args.phone,
            ParentId:args.parentId,
          }),
        });
        let txt = rs.text()
        if(txt=='true'){
          return {
            id:nreg.id,
            firstName:args.firstName,
            lastName:args.lastName,
            phone:args.phone,
            userName:args.userName,
            parentId:args.parentId,
            password:''
          }
        }
        return null
      }catch(e){
        console.log(e)
        return null
      }
    },
  },
};


