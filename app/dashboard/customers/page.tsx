import CustomersTable from "@/app/ui/customers/table";
import { CreateCustomer } from "@/app/ui/invoices/buttons";
import Search from "@/app/ui/search";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="w-full">
      <div>
        <h1 className="text-2xl">Customers</h1>
      </div>
      <div className="flex items-center  justify-center gap-2 pr-3 md:mt-8 mt-4">
        <Search placeholder="Search customers ..." />
        <CreateCustomer/>
      </div>
      <Suspense>
     {/* <CustomersTable customers="d"/> */}
      </Suspense>
    </div>
  );
}
