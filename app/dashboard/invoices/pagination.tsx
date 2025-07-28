import { usePathname } from "next/navigation";

export default function ({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = new URLSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page',pageNumber.toString())
    return `${pathname}?${params.toString()}`
  };
  return (
    <div className="inline-flex items-center justify-center">

    </div>
  )
}
