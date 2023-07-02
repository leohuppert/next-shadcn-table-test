import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Column } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ChevronDown } from "lucide-react";
import { Button } from "../button";
import { Input } from "../input";

interface Props<TData, TValue> {
  column: Column<TData, TValue>;
  title: string;
  enableSorting: boolean;
}

export function FilterableColumnHeader<TData, TValue>({
  column,
  title,
  enableSorting = true,
}: Props<TData, TValue>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          {title}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className="flex flex-col space-y-4 p-4">
          <Input
            placeholder="Filter name ..."
            value={(column.getFilterValue() as string) ?? ""}
            onChange={(event) => column.setFilterValue(event.target.value)}
            className="max-w-sm"
          />
          {enableSorting && (
            <>
              <h2 className="text-xs font-light text-slate-600">SORT BY</h2>
              <div className="flex flex-col space-y-2 text-sm font-light text-slate-600">
                <div
                  className="flex items-center cursor-pointer hover:text-slate-400"
                  onClick={() => column.toggleSorting(false)}
                >
                  <ArrowUp className="h-4 w-4 mr-2" /> Ascending
                </div>
                <div
                  className="flex items-center cursor-pointer hover:text-slate-400"
                  onClick={() => column.toggleSorting(true)}
                >
                  <ArrowDown className="h-4 w-4 mr-2" /> Descending
                </div>
              </div>
            </>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
