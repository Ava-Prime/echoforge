import pino from 'pino';

export const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  transport:
    process.env.NODE_ENV === 'development'
      ? { target: 'pino-pretty' }
      : undefined,
  base: {
    service: process.env.SERVICE_NAME || 'unknown',
    version: process.env.npm_package_version,
  },
});
