import { App } from './app';

const PORT = process.env.APP_PORT || 5432;

new App().start(PORT);
