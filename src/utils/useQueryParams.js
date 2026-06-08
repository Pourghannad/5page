import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const useQueryParams = () => {
  const { search } = useLocation();

  return useMemo(() => {
    const params = new URLSearchParams(search);
    const queryParams = {};
    let queryParamsAsArgs = '';

    params.forEach((value, key) => {
      queryParams[key] = value;
      queryParamsAsArgs += `/${key}/${decodeURIComponent(value)}`;
    });

    return { queryParams, queryParamsAsArgs };
  }, [search]);
};

export default useQueryParams;