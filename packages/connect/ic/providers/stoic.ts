import { Actor, HttpAgent } from '@dfinity/agent';
import { IDL } from '@dfinity/candid';
import { err, ok } from 'neverthrow';

// @ts-expect-ignore
import stoicLogoLight from '../images/stoic.png';
// @ts-expect-ignore
import stoicLogoDark from '../images/stoic.png';
import { StoicIdentity } from './ic-stoic-identity';
import type { IConnector } from './types';
import { ConnectError, CreateActorError, DisconnectError, InitError } from './types';

export class CustomStoicWallet implements IConnector {
    public meta = {
        features: [],
        icon: {
            light: stoicLogoLight,
            dark: stoicLogoDark,
        },
        id: 'stoic',
        name: 'Stoic Wallet',
    };

    #config: {
        whitelist: string[];
        providerUrl: string;
        host: string;
        dev: boolean;
    };
    #identity?: any;
    #principal?: string;

    get identity() {
        return this.#identity;
    }

    get principal() {
        return this.#principal;
    }

    constructor(userConfig = {}) {
        this.#config = {
            whitelist: [],
            // host: window.location.origin,
            host: 'https://icp-api.io',
            providerUrl: 'https://www.stoicwallet.com',
            dev: false,
            ...userConfig,
        };
    }

    set config(config) {
        this.#config = { ...this.#config, ...config };
    }

    get config() {
        return this.#config;
    }

    async init() {
        try {
            const identity: any = await StoicIdentity.load(this.#config.providerUrl);
            const isConnected = !!identity;
            if (isConnected) {
                this.#identity = identity;
                this.#principal = identity.getPrincipal().toText();
            }
            return ok({ isConnected });
        } catch (e) {
            console.error(e);
            return err({ kind: InitError.InitFailed });
        }
    }

    async createActor<Service>(canisterId: string, idlFactory: IDL.InterfaceFactory) {
        try {
            // TODO: allow passing identity?
            const agent = HttpAgent.createSync({
                ...this.#config,
                identity: this.#identity,
            });

            if (this.#config.dev) {
                // Fetch root key for certificate validation during development
                const res = await agent
                    .fetchRootKey()
                    .then(() => ok(true))
                    .catch(() => err({ kind: CreateActorError.FetchRootKeyFailed }));
                if (res.isErr()) {
                    return res;
                }
            }
            // TODO: add actorOptions?
            const actor = Actor.createActor<Service>(idlFactory, {
                agent,
                canisterId,
            });
            return ok(actor);
        } catch (e) {
            console.error(e);
            return err({ kind: CreateActorError.CreateActorFailed });
        }
    }

    async isConnected() {
        try {
            const identity = await StoicIdentity.load();
            return !!identity;
        } catch (e) {
            console.error(e);
            return false;
        }
    }

    async connect() {
        try {
            this.#identity = await StoicIdentity.connect();
            this.#principal = this.#identity.getPrincipal().toText();
            return ok(true);
        } catch (e) {
            console.error(e);
            return err({ kind: ConnectError.ConnectFailed });
        }
    }

    async disconnect() {
        try {
            await StoicIdentity.disconnect();
            return ok(true);
        } catch (e) {
            console.error(e);
            return err({ kind: DisconnectError.DisconnectFailed });
        }
    }
}
