import classNames from 'classnames';
import { ComponentProps, FC } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

export interface PaneProps extends ComponentProps<'div'> {
  title: string;
}
export const Pane: FC<PaneProps> = ({ className, children, title }) => {
  return (
    <details className="group cursor-pointer">
      <summary className={classNames('flex items-center justify-center p-3 border-b', className)}>
        <span>{title}</span>
        <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
          <RiArrowDownSLine />
        </span>
      </summary>
      <div className="min-w-min min-h-min py-4 px-5 border-b">{children}</div>
    </details>
  );
};
