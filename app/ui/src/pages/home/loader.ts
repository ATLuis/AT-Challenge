import svc  from '../../controllers/status-controller'
export async function homeLoader() {
  // TODO: get data from server
  const userId= localStorage.getItem("userId");
  var rs = await svc.listAgents(+(userId??0))
  return rs
}