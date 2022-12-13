import classNames from 'classnames';
import { ComponentProps, FC, useEffect, useState } from 'react';

const AlertConfigs = {
  info: 'bg-blue-100  text-blue-700 ',
  warning: 'bg-yellow-100 text-yellow-700',
  error: 'bg-red-100 text-red-700',
  pass: 'bg-teal-100 text-teal-700',
};

export interface AlertProps extends ComponentProps<'div'> {
  type: keyof typeof AlertConfigs;
  message: string;
}

export const Alerts: FC<AlertProps> = ({ type, className, message, ...props }) => {
  const [isOpacity, setIsOpacity] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsOpacity(true);
    }, 3000);
  }, [message]);
  return (
    <div
      {...props}
      className={classNames(
        AlertConfigs[type],
        'transition-opactiy duration-300 ease-linear min-w-min rounded-lg py-5 px-6 text-base mb-3',
        isOpacity && 'opacity-0',
        className,
      )}
    >
      {message}
    </div>
  );
};
