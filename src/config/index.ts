import axios from 'axios';
const config = require('./config.json');

export function getEnvArray() {
    return Object.keys(config.environment);
}

export function getCurrentEnv(): string {
    const env = localStorage.getItem('env');
    return env ? env : 'prod';
}

export function getBaseUrl(): string {
    const currentEnv = getCurrentEnv();
    const baseUrl = config.environment[currentEnv];
    return baseUrl ? baseUrl : 'http://localhost:8088/';
}

export function getNameSpaces(): string[] {
    return Object.keys(config.namespaces);
}

export function getMicroServiceNames(namespace: string): string[] {
    const microServices = config.namespaces[namespace];
    return microServices ? microServices : [];
}

export function getAxiosInstance() {
    return axios.create({
        baseURL: getBaseUrl()
      });
}