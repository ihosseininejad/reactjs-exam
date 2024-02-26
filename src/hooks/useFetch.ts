import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { FetcherOptions, IApiResponse, Method, UseFetchResult } from '../types/hooks/usefetch.types';

const HEADER_BASE: AxiosRequestConfig['headers'] = {
    "content-type": "application/json",
    "Accept-Language": "fr-IR,fr;q=0.5",
    "Accept": "application/json",
};

const useFetch = <IApiResponse>(
    method: Method,
    { url, values, header, autoFetch }: FetcherOptions
): UseFetchResult<IApiResponse> => {

    const base = (!header) ? HEADER_BASE : header;
    const [response, setResponse] = useState<IApiResponse | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const options: AxiosRequestConfig = {
        method: method,
        headers: {
            ...base,
        },
        data: values,
        url: url,
    };

    const fetchHandler = async () => {
        setIsLoading(true);
        try {
            const response = await axios(options);
            setResponse(response.data);
        } catch (err: any) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const source = axios.CancelToken.source();
        options.cancelToken = source.token;

        if (url && autoFetch) {
            fetchHandler();
        }

        return () => {
            source.cancel("useFetch-UnMounted");
        };
    }, [url]);

    return [response, isLoading, error, fetchHandler];
};

export default useFetch;