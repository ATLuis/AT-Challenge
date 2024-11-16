import { Chip } from "@nextui-org/react";
import { useEffect, useState } from "react";
import statusController from "../controllers/status-controller";

type Status = "running" | "failed" | "loading";
type APIStatus = {
  dotNet: Status;
  grapqh: Status;
};

export function ApiStatus() {
  const [status, setStatus] = useState<APIStatus>({
    dotNet: "loading",
    grapqh: "loading",
  });

  useEffect(() => {
    const getStatus = async () => {
      const statusDotNet = await statusController.getStatusFromDotNet();
      const statusGraphql = await statusController.getStatusFromGraphql();

      setStatus({
        dotNet: statusDotNet !== "running" ? "failed" : "running",
        grapqh: statusGraphql !== "running" ? "failed" : "running",
      });
    };

    getStatus();
  }, []);

  const statusToColor = (status: Status) => {
    const colors = {
      running: "success",
      failed: "danger",
      loading: "warning",
    } as const;

    return colors[status];
  };

  return (
    <div className="flex gap-4">
      <Chip variant="dot" color={statusToColor(status.dotNet)}>
        dotnet
      </Chip>
      <Chip variant="dot" color={statusToColor(status.grapqh)}>
        grapqh
      </Chip>
    </div>
  );
}
