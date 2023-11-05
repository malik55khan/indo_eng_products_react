export type EnvType = 'PROD'|'DEV'
export const ENV:EnvType = 'PROD'
export const ApiEndPoint = ENV === 'DEV'?'http://localhost:3000/api':'https://products.indoengineers.in/api'