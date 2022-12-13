import { Alerts } from '@/libs/components/alerts/Alerts';

export const AlertPage = () => {
  return (
    <div>
      <Alerts type={'info'} message={'Test it'} />
      <Alerts type={'warning'} message={'Test it'} />

      <Alerts type={'pass'} message={'Test it'} />
      <Alerts type={'error'} message={'Test it'} />
    </div>
  );
};
