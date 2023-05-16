// lib/auth0.ts
import { SessionStore, SessionStorePayload, initAuth0 } from '@auth0/nextjs-auth0';

class Store implements SessionStore {
  private store: KeyValueStoreLikeRedis<SessionStorePayload>;
  constructor() {
    // If you set the expiry accross the whole store use the session config,
    // for example `min(config.session.rollingDuration, config.session.absoluteDuration)`
    // the default is 24 hrs
    this.store = new KeyValueStoreLikeRedis();
  }
  async get(id) {
    const val = await this.store.get(id);
    return val;
  }
  async set(id, val) {    
    // Example for Redis: redis.set(id, val, { pxat: expiryMs });
    await this.store.set(id, val);
  }
  async delete(id) {
    await this.store.delete(id);
  }
}

let auth0;

export default () => {
  if (!auth0) {
    auth0 = initAuth0({
      session: {        
        store: new Store()
      }
    });
  }
  return auth0;
};


export interface KeyValueStore {    
  key: string;
  val: string;
}

export class KeyValueStoreLikeRedis<SessionStorePayload> {
constructor(){
this.cache = {} as SessionStorePayload
}

cache: SessionStorePayload;

set = async (key, val): Promise<void> => {
    this.cache[key] = val;
}

get = async (key: string): Promise<SessionStorePayload> => {
    return Promise.resolve(this.cache[key]);
}
delete = async (key: string): Promise<void> => {
  delete this.cache[key];
}

}