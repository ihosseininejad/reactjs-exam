import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const HEADER_BASE: AxiosRequestConfig['headers'] = {
    "content-type": "application/json",
    "Accept-Language": "fr-IR,fr;q=0.5",
    "Accept": "application/json",
};

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PUT' | 'PATCH';

type UseFetchResult<Data> = [Data | null, boolean, Error | null, () => Promise<void>];

const useFetch = <Data>(
    method: Method,
    { url, values, header, autoFetch }: { 
        url: string; 
        values?: any; 
        header?: AxiosRequestConfig['headers']; 
        autoFetch?: boolean
    }
): UseFetchResult<Data> => {
    const base = (!header) ? HEADER_BASE : header;
    const [data, setData] = useState<Data | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const options: AxiosRequestConfig = {
        method: method,
        headers: {
            ...base,
        },
        data: values,
        url: url,
    };

    const handlerApi = async () => {
        setIsLoading(true);
        try {
            const response = await axios(options);
            const str = JSON.stringify(response.data);
            const responseData = JSON.parse(str) as Data;
            setData(responseData);
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
            handlerApi();
        }

        return () => {
            source.cancel("useFetch-UnMounted");
        };
    }, [url]);

    return [data, isLoading, error, handlerApi];
};

export default useFetch;
