"use client"
import {CaretLeft, CaretRight} from "@phosphor-icons/react/dist/ssr"
import {Button, IconButton} from ".."
import {useEffect, useState} from "react";

const disabledButtonClass = "disabled:cursor-not-allowed disabled:text-gray-20 disabled:border-gray-20 disabled:bg-white"
const Pagination = ({currentPage, totalPages, onPageChange}) => {
    const [page, setPage] = useState(currentPage);
    const handlePageClick = (page) => {
        setPage(page);
        onPageChange(page);
    };

    useEffect(() => {
        setPage(currentPage);
    }, [currentPage]);

    const RenderPageNumbers = () => {
        const maxVisiblePages = 5;
        let startPage, endPage;

        if (totalPages <= maxVisiblePages) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (page <= 3) {
                startPage = 1;
                endPage = 3;
            } else if (page >= totalPages - 2) {
                startPage = totalPages - 2;
                endPage = totalPages;
            } else {
                startPage = page;
                endPage = page;
            }
        }

        const pageNumbers = Array.from({length: endPage - startPage + 1}, (_, i) => startPage + i);

        return (
            <div className="flex space-x-2">
                {startPage > 1 && (
                    <>
                        <Button
                            key={1}
                            filled
                            variant="white"
                            className={`w-9 h-9 ${page !== 1 ? "border-0" : ""}`}
                            onClick={() => handlePageClick(1)}
                        >
                            1
                        </Button>
                        {startPage > 2 && <Button
                            filled
                            variant="white"
                            className="w-9 h-9 border-0"
                        >
                            ...
                        </Button>}
                    </>
                )}

                {pageNumbers.map((p) => (
                    <Button
                        key={p}
                        filled
                        variant="white"
                        className={`w-9 h-9 ${p !== page ? "border-0" : ""}`}
                        onClick={() => handlePageClick(p)}
                    >
                        {p}
                    </Button>
                ))}

                {endPage < totalPages && (
                    <>
                        {endPage < totalPages - 1 &&
                            <Button
                                filled
                                variant="white"
                                className="w-9 h-9 border-0"
                            >
                                ...
                            </Button>}
                        <Button
                            key={totalPages}
                            filled
                            variant="white"
                            className={`w-9 h-9 ${page !== totalPages ? "border-0" : ""}`}
                            onClick={() => handlePageClick(totalPages)}
                        >
                            {totalPages}
                        </Button>
                    </>
                )}
            </div>
        );
    };

    return (
        <div className="flex justify-between items-center md:px-6 pt-3 pb-4">
            <nav aria-label="Pagination" className="flex items-center justify-between gap-3 w-full">
                <Button
                    variant="white"
                    leftIcon={<CaretLeft weight="bold"/>}
                    size="sm"
                    filled
                    disabled={page === 1}
                    onClick={() => handlePageClick(page - 1)}
                    className={`hidden lg:flex ${page === 1 && disabledButtonClass}`}>
                    Previous
                </Button>

                <IconButton
                    className={`flex w-9 h-9 lg:hidden ${page === 1 && disabledButtonClass}`}
                    disabled={page === 1}
                    onClick={() => handlePageClick(page - 1)}>
                    <CaretLeft weight="bold"/>
                </IconButton>

                <div className="flex justify-center items-center gap-0.5">
                    <RenderPageNumbers/>
                </div>

                <IconButton
                    className={`flex w-9 h-9 lg:hidden ${page === totalPages && disabledButtonClass}`}
                    disabled={page === totalPages}
                    onClick={() => handlePageClick(page + 1)}>
                    <CaretRight weight="bold"/>
                </IconButton>

                <Button
                    variant="white"
                    rightIcon={<CaretRight weight="bold"/>}
                    size="sm"
                    filled
                    disabled={page === totalPages}
                    onClick={() => handlePageClick(page + 1)}
                    className={`hidden lg:flex ${page === totalPages && disabledButtonClass}`}>
                    Next
                </Button>
            </nav>
        </div>
    )
}

export default Pagination