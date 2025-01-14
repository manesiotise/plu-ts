import { VoidIfEmpty } from ".";

export type Params<Fn extends ((...args: any[]) => any) | ( new (...args: any[]) => any ) > = 
    Fn extends ( ...args: infer FnArgs ) => any ? VoidIfEmpty<FnArgs> :
    Fn extends new ( ...args: infer CFnArgs ) => any ? VoidIfEmpty<CFnArgs> :
    never;

export type ReturnT<Fn extends ((...args: any[]) => any) | ( new (...args: any[]) => any ) > = 
    Fn extends ( ...args: any[] ) => infer RetT ? RetT :
    Fn extends new ( ...args: any[] ) => infer CRetT ? CRetT :
    never;
