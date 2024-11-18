import { Button } from "@nextui-org/react";
import {
  AddUserIcon,
  CellProps,
  DeleteIcon,
  EyeIcon,
  Table,
  TableColumn,
} from "../../components";
import { AgentReferral } from "../../models";

const columns: TableColumn<AgentReferral>[] = [
  { field: "fullName", title: "NAMES" },
  { field: "username", title: "USERNAME" },
  { field: "phone", title: "PHONE" },
  { field: "status", title: "STATUS" },
  { title: "ACTIONS", cell: ActionCell },
];

interface ReferralTableProps {
  data: AgentReferral[];
  onDelete: (id: number) => void; 
}

export function ReferralTable({ data,onDelete }: ReferralTableProps) {
  return (
    <Table
      columns={columns}
      data={data}
      dataItemKey="id"
      // detail={}
    />
  );
}

function ActionCell(_: CellProps<AgentReferral>) {
  const handleView = () => {};

  const handleAdd = () => {};

  const handleDelete = async () => {
  
    try {
      const response = await fetch(`http://localhost:5000/api/agents/${data.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete agent");
      }

      onDelete(dataItem.id);
    } catch (error) {
      alert("Error deleting agent");
    }
  };

  return (
    <>
      <Button className="mr-2" variant="flat" isIconOnly onPress={handleView}>
        <EyeIcon />
      </Button>
      <Button className="mr-2" variant="flat" isIconOnly onPress={handleAdd}>
        <AddUserIcon />
      </Button>
      <Button variant="flat" isIconOnly onPress={handleDelete}>
        <DeleteIcon />
      </Button>
    </>
  );
}
