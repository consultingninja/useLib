
import { pb , mongo, authClient} from './lib/server';

export const handle = async ({ event, resolve }) => {
    event.locals.pb = pb;
    event.locals.mongo = mongo;
    event.locals.authClient = authClient; 
    const response = await resolve(event);
    return response;
};