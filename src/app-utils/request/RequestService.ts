import {getAppConfig} from "../app-config/AppConfig";

export async function request<Response = any>(url?: string): Promise<Response> {
    const { baseUrl } = getAppConfig((config) => config)
    let fullUrl = baseUrl
    if (url) {
        `${fullUrl}/${url}`
    }
    return fetch(fullUrl) as Promise<Response>
}
