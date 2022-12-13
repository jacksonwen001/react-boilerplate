import classNames from 'classnames';
import { ComponentProps, FC } from 'react';
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';
import { DOTS, usePagination } from './usePagination';

export interface PaginationProps {
  current: number;
  size: number;
  total: number;
  siblingCount?: number;
  onPageChange: (v: any) => void;
}
const Pagination: FC<ComponentProps<'div'> & PaginationProps> = ({
  current,
  size,
  siblingCount,
  total,
  onPageChange,
  className,
  ...props
}) => {
  const paginationRange = usePagination({
    current,
    size,
    total,
    siblingCount: siblingCount || 1,
  });

  if (current === 0 || paginationRange.length < 2) {
    return null;
  }
  const onNext = () => {
    if (current != lastPage) {
      onPageChange(current + 1);
    }
  };

  const onPre = () => {
    if (current !== 1) onPageChange(current - 1);
  };
  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div {...props} className={classNames('flex gap-2 text-xs text-gray-600', className)}>
      <a
        onClick={onPre}
        className={classNames(
          'inline-flex rounded justify-center items-center p-2 w-10  border-solid border border-gray-400 cursor-pointer',
          current === 1 && 'cursor-not-allowed opacity-50',
        )}
      >
        <RiArrowLeftLine />
      </a>

      {paginationRange.map((value, index) => (
        <div key={index}>
          {value === DOTS ? (
            <a>...</a>
          ) : (
            <a
              className={
                current == value
                  ? `cursor-pointer rounded bg-gray-500 inline-flex items-center justify-center border-solid border border-gray-400 p-2  w-10 text-gray-100`
                  : 'inline-flex rounded items-center justify-center border-solid border border-gray-400 p-2  w-10 cursor-pointer'
              }
              onClick={() => onPageChange(value)}
            >
              {value}
            </a>
          )}
        </div>
      ))}

      <a
        onClick={onNext}
        className={classNames(
          'inline-flex justify-center rounded items-center p-2 w-10  border-solid border border-gray-400 cursor-pointer',
          current === lastPage && 'cursor-not-allowed opacity-50',
        )}
      >
        <RiArrowRightLine />
      </a>
    </div>
  );
};

export default Pagination;
