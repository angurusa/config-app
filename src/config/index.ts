const config = require('./config.json');

export function getEnvArray() {
    return Object.keys(config.environment);
}

export function getCurrentEnv() {
    const env = localStorage.getItem('env');
    return env ? env : 'prod';
}

export function getBaseUrl(env: string) {
    return config.environment[env];
}