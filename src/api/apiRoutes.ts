export const BASE_URL = "https://exam.pishgamanasia.com"
export const MAP_BASE_URL = "https://map.pishgamanasia.com"

// Authentication
export const AUTH_ROUTE = `${BASE_URL}/register`

// Map Section
export const SEARCH_VEHICLE = (searchTerm: string, userToken: string) => `${BASE_URL}/webapi/Request/GetVehicleUsers?SearchTerm=${searchTerm}&UserToken=${userToken}`;
export const ACCEPT_REQUEST_ROUTE = `${BASE_URL}/webapi/Request/SendRequest`
export const MAP_ROUTE = `${MAP_BASE_URL}/tile/{z}/{x}/{y}.png`;