import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useQueryParams = () => {
	const [queryParams, setQueryParams] = useState({});
	const [queryParamsAsArgs, setQueryParamsAsArgs] = useState('');
	const { search } = useLocation();

	useEffect(() => {
		const qs = {};
		let qsArgs = '';
		const params = search.replace('?', '');
		const paramsArray = params.split('&');
		paramsArray.forEach((param) => {
			const [key = '', value = ''] = param.split('=');
			qs[key] = value;
			qsArgs += `/${key}/${decodeURIComponent(value)}`;
		});
		setQueryParams(qs);
		setQueryParamsAsArgs(qsArgs);
	}, [search]);

	return { queryParams, queryParamsAsArgs };
};

export default useQueryParams;
