import classNames from 'classnames';
import { ComponentProps, FC } from 'react';

export const Accordion: FC<ComponentProps<'div'>> = ({ className, children }) => {
  return <div className={classNames('border-b-0 border', className)}>{children}</div>;
};
