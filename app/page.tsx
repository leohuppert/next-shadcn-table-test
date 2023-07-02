import { MOCK_USERS, User } from "@/lib/mock/users";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table/data-table";

async function getData(): Promise<User[]> {
  return MOCK_USERS;
}

export default async function UserHome() {
  const data = await getData();

  return (
    <div className="flex flex-col p-6">
      <div className="flex items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Hello!</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of all the users!
          </p>
        </div>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
