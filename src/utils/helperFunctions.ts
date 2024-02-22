export const splitLatLng = (latlng: any) => {
    return `${latlng[0]}, ${latlng[1]}`;
};

export const isZeroZero = (value: any): boolean => {
    return value[0] == 0 && value[1] === 0;
};