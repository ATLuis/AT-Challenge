import { NavBar, Page } from "../../components";
import { ReferralTable } from "./referral-table";
import { AddReferralModal } from "./add_referral_modal";
import { useLoaderData } from "react-router-dom";
import type { AgentReferral } from "../../models";
import { useEffect, useState } from "react";

export function HomePage() {
  const data = useLoaderData() as AgentReferral[];
  const [agents, setAgents] = useState(data);

  useEffect(()=>{
    setAgents(data.map(agent => ({
      ...agent,
      fullName: `${agent!.firstName} ${agent.lastName}`,
    })))
  },[])
  const handleLogout = () => {}

  return (
    <Page className="p-8">
      <NavBar onLogout={handleLogout} />

      <div className="flex justify-end">
        <AddReferralModal />
      </div>

      <div className="grow">
        <ReferralTable data={agents}  />
      </div>
    </Page>
  );
}
