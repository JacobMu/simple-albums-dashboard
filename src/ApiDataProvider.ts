import jsonServerProvider from 'ra-data-json-server'
import { getAppConfig } from './app-utils/app-config/AppConfig'
import { DataProvider } from 'react-admin'

export function createDataProvider(): DataProvider<string> {
  return jsonServerProvider(getAppConfig((config) => config.baseUrl))
}
