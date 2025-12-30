import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const PagePagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const nextPage = () => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  };

  const prevPage = () => {
    onPageChange(Math.max(currentPage - 1, 1));
  };
  return (
    <div className=" pr-20 pl-20 pt-5 pb-5 ">
      <Pagination className="flex justify-end ">
        <PaginationContent>
          <PaginationItem>
            <Button
              variant="outline"
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              Previous <ChevronLeft />
            </Button>
          </PaginationItem>
          {currentPage - 1 > 2 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {currentPage > 1 && (
            <PaginationItem>
              <Button variant="outline" onClick={prevPage}>
                {currentPage - 1}
              </Button>
            </PaginationItem>
          )}

          <PaginationItem>
            <Button variant="default">{currentPage}</Button>
          </PaginationItem>
          {currentPage + 1 < totalPages && (
            <PaginationItem>
              <Button variant="outline" onClick={nextPage}>
                {currentPage + 1}
              </Button>
            </PaginationItem>
          )}
          {currentPage + 1 > totalPages ||
            (currentPage > 3 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            ))}
          {currentPage + 1 < 5 ||
            (currentPage < totalPages - 1 && (
              <PaginationItem>
                <Button variant="outline">{totalPages}</Button>
              </PaginationItem>
            ))}

          <PaginationItem>
            <Button
              variant="outline"
              onClick={nextPage}
              disabled={currentPage === totalPages}
            >
              Next <ChevronRight />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
// type PaginationProps = {
//   totalPages: number;
//   currentPage: number;
//   onPageChange: (page: number) => void;
// };

// export const PagePagination = ({
//   totalPages,
//   currentPage,
//   onPageChange,
// }: PaginationProps) => {
//   const nextPage = () => {
//     onPageChange(Math.min(currentPage + 1, totalPages));
//   };

//   const prevPage = () => {
//     onPageChange(Math.max(currentPage - 1, 1));
//   };

//   return (
//     <div className="px-20 py-5 flex justify-end">
//       <Button onClick={prevPage} disabled={currentPage === 1}>
//         Previous
//       </Button>

//       <span className="px-4">
//         {currentPage} / {totalPages}
//       </span>

//       <Button onClick={nextPage} disabled={currentPage === totalPages}>
//         Next
//       </Button>
//     </div>
//   );
// };
