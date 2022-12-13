import classNames from 'classnames';
import { ComponentProps, FC, useMemo } from 'react';

export const DrawerConfig = {
  top: {
    style: 'top-0 w-full',
    open: 'translate-y-0',
    close: '-translate-y-full',
  },
  left: {
    style: 'top-0 left-0 h-full',
    open: 'translate-x-0',
    close: '-translate-x-full',
  },
  right: {
    style: 'right-0 h-full',
    open: 'translate-x-0',
    close: 'translate-x-full',
  },
  bottom: {
    style: 'bottom-0 w-full',
    open: 'traslate-y-0',
    close: 'translate-y-full',
  },
};

const DrawerHeader = (props: { title: string }) => {
  const { title } = props;
  return <div>{title}</div>;
};

export const Drawer: FC<
  ComponentProps<'div'> & {
    title?: string;
    open: boolean;
    direction: keyof typeof DrawerConfig;
    mask?: boolean;
  }
> = ({ title, open, direction, mask = true, className, children, ...props }) => {
  return (
    <>
      {mask && (
        <div
          {...props}
          className={classNames(
            'absolute top-0 left-0 h-screen w-screen bg-gray-900 opacity-25',
            open ? 'block' : 'hidden',
          )}
        ></div>
      )}
      <section
        className={classNames(
          'absolute overflow-auto bg-white p-3',
          open ? DrawerConfig[direction].open : DrawerConfig[direction].close,
          'transition-all duration-300 ease-out',
          DrawerConfig[direction].style,
          className,
        )}
      >
        {title && useMemo(() => <DrawerHeader title={title} />, [title])}
        {children}
      </section>
    </>
  );
};
