import classNames from 'classnames';
import { ComponentProps, FC } from 'react';

export const CloseButton: FC<ComponentProps<'div'>> = ({ className, ...props }) => {
  return (
    <div {...props} className={classNames('relative m-auto w-14 h-14 cursor-pointer group', className)}>
      <div className="w-14 h-1 absolute mt-6 bg-gray-600 rounded rotate-45 transition duration-300 ease-in group-hover:-rotate-45"></div>
      <div className="h-1 w-14 absolute mt-6 bg-gray-600 rounded -rotate-45 transition duration-300 ease-in group-hover:rotate-45"></div>
    </div>
  );
};
