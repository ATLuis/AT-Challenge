export async function homeLoader() {
  // TODO: get data from server
  const response = await fetch("http://localhost:5000/api/agents", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch agents");
  }
  const agents = await response.json();
  return agents;
}