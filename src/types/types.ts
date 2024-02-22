// ------------ API
export interface IApiResponse {
    data: any;
    status: number;
    message: string;
}

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PUT' | 'PATCH';

// ------------ IconPack
export type IconProps = {
    color?: string | undefined;
    size?: number | undefined;
    className?: string | undefined;
}

// ------------ Vehicle List (Options)
export type Option = {
    id: number;
    name: string;
};