import { PublicKey, Transaction, SendOptions } from '@solana/web3.js';

interface ConnectOpts {
    onlyIfTrusted: boolean;
}

type PhantomRequestMethod =
    | 'connect'
    | 'disconnect'
    | 'signAndSendTransaction'
    | 'signTransaction'
    | 'signAllTransactions'
    | 'signMessage';

type PhantomEvent = 'connect' | 'disconnect' | 'accountChanged';
type DisplayEncoding = 'utf8' | 'hex';

interface PhantomProvider {
    publicKey: PublicKey | null;
    isConnected: boolean | null;
    signAndSendTransaction: (
        transaction: Transaction,
        opts?: SendOptions
    ) => Promise<{ signature: string; publicKey: PublicKey }>;
    signTransaction: (transaction: Transaction) => Promise<Transaction>;
    signAllTransactions: (transactions: Transaction[]) => Promise<Transaction[]>;
    signMessage: (message: Uint8Array | string, display?: DisplayEncoding) => Promise<any>;
    connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
    disconnect: () => Promise<void>;
    on: (event: PhantomEvent, handler: (args: any) => void) => void;
    request: (method: PhantomRequestMethod, params: any) => Promise<unknown>;
}

const getProvider = (): PhantomProvider | undefined => {
    if ('phantom' in window) {
        const anyWindow: any = window;
        const provider = anyWindow.phantom?.solana;

        if (provider?.isPhantom) {
            return provider;
        }
        else {
            // Attempt to reconnect to Phantom
            provider?.connect().catch((error) => {
                console.log('error: ', error)
                // Handle connection failure
            })
        }
    }

    window.open('https://phantom.app/', '_blank');
};

export default getProvider;

export type Status = 'success' | 'warning' | 'error' | 'info';

export interface TLog {
    status: Status;
    method?: PhantomRequestMethod | Extract<PhantomEvent, 'accountChanged'>;
    message: string;
    messageTwo?: string;
}