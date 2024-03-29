import { IconProps } from "../types/icon.types"

export const HomeMarker = ({ color, size, className }: IconProps) => {
    return (
        <svg className={className} width={size || "70"} height={size || "70"} viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M140.085 221.895C180.516 199.905 214.109 160.723 218.75 114.583C218.75 62.8066 176.777 20.8333 125 20.8333C73.2233 20.8333 31.25 62.8066 31.25 114.583C35.9281 161.089 66.0644 200.526 109.67 222.415C119.279 227.238 130.64 227.032 140.085 221.895ZM166.667 114.583C166.667 137.595 148.012 156.25 125 156.25C101.988 156.25 83.3333 137.595 83.3333 114.583C83.3333 91.5715 101.988 72.9166 125 72.9166C148.012 72.9166 166.667 91.5715 166.667 114.583Z" fill={color || "#EF5D2F"} />
            <path fillRule="evenodd" clipRule="evenodd" d="M118.15 89.9096L102.611 102.341C99.5095 104.822 97.9923 108.787 98.6453 112.705L101.543 130.092C102.424 135.379 106.999 139.254 112.359 139.254H137.641C143.001 139.254 147.576 135.379 148.457 130.092L151.355 112.705C152.008 108.787 150.49 104.822 147.389 102.341L131.85 89.9096C127.845 86.7059 122.155 86.7059 118.15 89.9096ZM122.094 122.383L120.106 125.166C118.419 127.528 120.108 130.809 123.011 130.809H126.985C129.888 130.809 131.577 127.528 129.89 125.166L127.902 122.383C126.479 120.391 123.517 120.391 122.094 122.383Z" fill={color || "#EF5D2F"} />
        </svg>
    )
}
export const DestinationMarker = ({ color, size, className }: IconProps) => {
    return (
        <svg className={className} width={size || "70"} height={size || "70"} viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M54.6875 208.333C54.6875 212.648 58.1853 216.146 62.5 216.146C66.8147 216.146 70.3125 212.648 70.3125 208.333L70.3125 125H173.929C184.236 125 188.283 111.633 179.708 105.916L158.834 92.0006C152.65 87.8775 152.65 78.7893 158.834 74.6662L179.707 60.7518C188.282 55.0349 184.235 41.6678 173.929 41.6678H70.3125C70.3125 37.3531 66.8147 33.8542 62.5 33.8542C58.1853 33.8542 54.6875 37.352 54.6875 41.6667V208.333Z" fill={color || "#54A139"} />
        </svg>
    )
}

export const OpenEye = ({ color, size, className }: IconProps) => {
    return (
        <svg className={className} width={size || "20"} height={size || "16"} viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1218 5.87999C13.2928 7.05099 13.2928 8.95199 12.1218 10.125C10.9508 11.296 9.04979 11.296 7.87679 10.125C6.70579 8.95399 6.70579 7.05299 7.87679 5.87999C9.04979 4.70699 10.9498 4.70699 12.1218 5.87999" stroke={color || "#83909D"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M1 8C1 7.341 1.152 6.689 1.446 6.088V6.088C2.961 2.991 6.309 1 10 1C13.691 1 17.039 2.991 18.554 6.088V6.088C18.848 6.689 19 7.341 19 8C19 8.659 18.848 9.311 18.554 9.912V9.912C17.039 13.009 13.691 15 10 15C6.309 15 2.961 13.009 1.446 9.912V9.912C1.152 9.311 1 8.659 1 8Z" stroke={color || "#83909D"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const CloseEye = ({ color, size, className }: IconProps) => {
    return (
        <svg className={className} width={size || "24"} height={size || "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5582 13.5577C13.9186 14.6361 12.6764 15.2036 11.4426 14.9811C10.2087 14.7585 9.24301 13.7928 9.02048 12.559C8.79795 11.3251 9.36544 10.0829 10.4438 9.44336" stroke={color || "#83909D"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.9969 16.9962C16.2721 18.3044 14.1651 19.0095 12.0003 19.0029C8.41322 19.0668 5.09886 17.0954 3.44275 13.9128C2.84786 12.707 2.84786 11.293 3.44275 10.0872C4.271 8.43785 5.5913 7.08659 7.22105 6.22034" stroke={color || "#83909D"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.4272 14.1345C20.4674 14.0585 20.5196 13.9903 20.5576 13.9128C21.1524 12.707 21.1524 11.293 20.5576 10.0872C18.9015 6.90465 15.5871 4.93323 12 4.99711C11.7751 4.99711 11.5565 5.02712 11.3345 5.04175" stroke={color || "#83909D"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21.0037 20.0033L3.99658 2.99622" stroke={color || "#83909D"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

