import classNames from 'classnames';
import { ComponentProps, FC } from 'react';

export const Avatar: FC<ComponentProps<'img'>> = ({ className, ...props }) => {
  return <img alt="avatar" className={classNames('rounded-3xl border', className)} {...props} />;
};
