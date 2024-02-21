import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

const HEADER_BASE: AxiosRequestConfig['headers'] = {
    "content-type": "application/json",
    "Accept-Language": "fr-IR,fr;q=0.5",
    "Accept": "application/json",
};

export interface MyResponse {
    data: any;
    status: number;
    message: string;
}

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PUT' | 'PATCH';

type UseFetchResult<MyResponse> = [MyResponse | null, boolean, Error | null, () => Promise<void>];

const useFetch = <MyResponse>(
    method: Method,
    { url, values, header, autoFetch }: { 
        url: string; 
        values?: any; 
        header?: AxiosRequestConfig['headers']; 
        autoFetch?: boolean
    }
): UseFetchResult<MyResponse> => {
    const base = (!header) ? HEADER_BASE : header;
    const [response, setResponse] = useState<MyResponse | null>(null);
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

    const handlerApi = async () => {
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
            handlerApi();
        }

        return () => {
            source.cancel("useFetch-UnMounted");
        };
    }, [url]);

    return [response, isLoading, error, handlerApi];
};

export default useFetch;
