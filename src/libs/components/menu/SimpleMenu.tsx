import classNames from 'classnames';
import { ComponentProps, FC, ReactNode, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { RiArrowDownSLine, RiMenuFoldFill, RiMenuUnfoldFill } from 'react-icons/ri';
import { Drawer, DrawerConfig } from '@/libs';
import { CloseButton } from '../close-button';

export interface SimpleMenuItemProps {
  title: string;
  link: string;
  icon?: ReactNode;
  children?: SimpleMenuItemProps[];
}

const SimpleMenuItem = (props: { data: SimpleMenuItemProps }) => {
  const location = useLocation();
  const { title, link, children, icon } = props.data;
  const [open, setOpen] = useState(false);

  const liStyle = 'leading-5 text-gray-600 text-sm';
  const titleStyle = 'flex items-center rounded-lg py-2 gap-2 hover:bg-gray-200 hover:rounded-lg px-2';
  const activeStyle = 'bg-gray-300 font-medium';

  if (children) {
    return (
      <>
        <li className={liStyle}>
          <details className="cursor-pointer group" open={open}>
            <summary
              className={classNames(location.pathname.startsWith(link) && open && activeStyle, titleStyle)}
              onClick={() => setOpen(!open)}
            >
              {icon && <span> {icon}</span>}
              <span> {title}</span>
              <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
                <RiArrowDownSLine />
              </span>
            </summary>
            <ul className="pl-5 group">
              {children.map((it) => (
                <SimpleMenuItem data={it} key={it.title} />
              ))}
            </ul>
          </details>
        </li>
      </>
    );
  }

  return (
    <li className={`${liStyle} group-first:pt-2`}>
      <NavLink to={link} className={({ isActive }) => classNames(isActive && activeStyle, titleStyle)}>
        {icon && <span>{icon}</span>}
        <span>{title}</span>
      </NavLink>
    </li>
  );
};
export const SimpleDrawerMenu: FC<
  ComponentProps<'div'> & {
    dataSource: SimpleMenuItemProps[];
  }
> = ({ dataSource, className, ...props }) => {
  return (
    <div {...props} className={classNames('w-full h-full', className)}>
      <ul className="space-y-2 w-full h-full p-3">
        {dataSource.map((it) => (
          <SimpleMenuItem data={it} key={it.title} />
        ))}
      </ul>
    </div>
  );
};
