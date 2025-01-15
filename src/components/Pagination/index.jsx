"use client";
import {CaretLeft, CaretRight} from "@phosphor-icons/react/dist/ssr";
import {Button, IconButton} from "..";
import {useEffect, useState} from "react";

const disabledButtonClass = "disabled:cursor-not-allowed disabled:text-gray-20 disabled:border-gray-20 disabled:bg-white";

const {floor, min, max} = Math;
const range = (lo, hi) => Array.from({length: hi - lo}, (_, i) => i + lo);
const calculatePagination = (count, ellipsis = "…") => (page, total, isMobile) => {
    let start;
    let end;
    if (isMobile) {
        start = max(1, min(page - floor((count - 3) / 2), total - count + 2));
        end = min(total, max(page + floor((count - 4 + 2 * (count % 2)) / 2), count))
        return [
            ...(start > 2 ? [1, "..."] : start === 1 ? [] : [1]),
            ...range(start, start > 3 ? end + 1 : end),
            ...(end < total - 1 ? ["...", total] : end < total ? [total] : []),
        ];
    }

    start = max(1, min(page - floor((count - 3) / 2), total - count + 2));
    end = min(total, max(page + floor((count - 4 + 2 * (count % 2)) / 2), count - 1))
    return [
        ...(start > 2 ? [1, ellipsis] : start > 1 ? [1] : []),
        ...range(start > 2 && page < total - 3 ? start + 1 : start, end + 1),
        ...(end < total - 1 ? [ellipsis, total] : end < total ? [total] : []),
    ];
};
const Pagination = ({currentPage, totalPages, onPageChange}) => {
    const [page, setPage] = useState(currentPage);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
    const handlePageClick = (page) => {
        setPage(page);
        onPageChange(page);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        setPage(currentPage);
    }, [currentPage]);

    const RenderPageNumbers = () => {
        const maxVisibleButtons = isMobile ? 4 : 7;
        const paginationLogic = calculatePagination(maxVisibleButtons);

        const buttons = paginationLogic(page, totalPages, isMobile);
        console.log(buttons)
        return (
            <div className="flex space-x-2">
                {buttons.map((btn, index) =>
                    typeof btn === "number" ? (
                        <Button
                            key={index}
                            filled
                            variant="white"
                            className={`w-9 h-9 transition-all duration-300 ${btn !== page ? "border-0" : ""}`}
                            onClick={() => handlePageClick(btn)}
                        >
                            {btn}
                        </Button>
                    ) : (
                        <Button
                            key={index}
                            filled
                            variant="white"
                            className="w-9 h-9 border-0"
                        >
                            {btn}
                        </Button>
                    )
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
                    className={`hidden lg:flex ${page === 1 && disabledButtonClass}`}
                >
                    Previous
                </Button>

                <IconButton
                    className={`flex w-9 h-9 lg:hidden ${page === 1 && disabledButtonClass}`}
                    disabled={page === 1}
                    onClick={() => handlePageClick(page - 1)}
                >
                    <CaretLeft weight="bold"/>
                </IconButton>

                <div className="flex justify-center items-center gap-0.5">
                    <RenderPageNumbers/>
                </div>

                <IconButton
                    className={`flex w-9 h-9 lg:hidden ${page === totalPages && disabledButtonClass}`}
                    disabled={page === totalPages}
                    onClick={() => handlePageClick(page + 1)}
                >
                    <CaretRight weight="bold"/>
                </IconButton>

                <Button
                    variant="white"
                    rightIcon={<CaretRight weight="bold"/>}
                    size="sm"
                    filled
                    disabled={page === totalPages}
                    onClick={() => handlePageClick(page + 1)}
                    className={`hidden lg:flex ${page === totalPages && disabledButtonClass}`}
                >
                    Next
                </Button>
            </nav>
        </div>
    );
};

export default Pagination;
