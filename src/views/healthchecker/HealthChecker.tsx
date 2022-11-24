import api from '@/utils/http';
import { useEffect } from 'react';

const HealthChecker = () => {
  useEffect(() => {
    api
      .get('/api/healthchecker')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return <div>HealthChecker</div>;
};
export default HealthChecker;
