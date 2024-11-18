import { URI_DOTNET } from "../../constants";

export async function homeLoader() {
  // TODO: get data from server
  const data= await fetch(`${URI_DOTNET}/Agent/All`,
  {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }
  );

  //map data and create fullName value for each agent
  const agents = await data.json();
  agents.forEach((agent: any) => {
    agent.fullName = `${agent.firstname} ${agent.lastname}`;
  });
  
  return agents;
}