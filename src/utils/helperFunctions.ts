export const splitCoordinates = (coordinates: any) => {
    return `${coordinates[0]}, ${coordinates[1]}`;
};

export const isZeroZero = (value: any): boolean => {
    return value[0] == 0 && value[1] === 0;
};