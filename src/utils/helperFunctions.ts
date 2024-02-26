export const splitCoordinates = (coordinates: any) => {
    return `${coordinates[0]}, ${coordinates[1]}`;
};

export const isZeroZero = (value: any): boolean => {
    return value[0] === 0 && value[1] === 0;
};

export const getTextByActiveState = (activeState: number) => {
    switch (activeState) {
        case 0:
            return "ثبت مبدا"
        case 1:
            return "ثبت مقصد"
        case 2:
            return "ثبت درخواست"
        default:
            return "وضعیت نامشخص"
    }
}