import { AxiosRequestConfig } from "axios";

export interface IApiResponse {
    data: any;
    status: number;
    message: string;
}

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PUT' | 'PATCH';

export type UseFetchResult<IApiResponse> = [IApiResponse | null, boolean, Error | null, () => Promise<void>];

export interface FetcherOptions {
    url: string;
    values?: any;
    header?: AxiosRequestConfig['headers'];
    autoFetch?: boolean
}