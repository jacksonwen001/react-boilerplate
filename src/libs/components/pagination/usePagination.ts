import { useMemo } from 'react';

export const DOTS = '...';

function range(start: number, end: number) {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
}

export const usePagination = (props: { current: number; size: number; total: number; siblingCount: number }) => {
  const { current, size, total, siblingCount } = props;

  const paginationRange = useMemo(() => {
    const defaultPageRange: number[] = [];

    const totalPageCount = Math.ceil(total / size);
    const totalPageNumber = siblingCount + 5;

    if (totalPageNumber >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(current - siblingCount, 1);
    const rightSiblingIndex = Math.min(current + siblingCount, totalPageCount);
    const showLeftDots = leftSiblingIndex > 2;
    const showRightDots = rightSiblingIndex < totalPageCount - 2;
    const firstPageIndex = 1;
    const lastPage = totalPageCount;

    if (showLeftDots && !showRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (!showLeftDots && showRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, totalPageCount];
    }

    if (showLeftDots && showRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, '...', ...middleRange, '...', lastPage];
    }

    return defaultPageRange;
  }, [current, size, total]);

  return paginationRange;
};
