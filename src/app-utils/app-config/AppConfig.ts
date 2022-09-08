interface AppConfig {
  baseUrl: string
}

const APP_CONFIG: AppConfig = {
  baseUrl: 'https://jsonplaceholder.typicode.com'
}

type ConfigCallback<ReturnType> = (config: AppConfig) => ReturnType

export function getAppConfig<ReturnType> (configCallback: ConfigCallback<ReturnType>): ReturnType {
  return configCallback(APP_CONFIG)
}
