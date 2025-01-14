import { isCloneable } from "../../../types/interfaces/Cloneable";
import UPLCTerm from "../../UPLC/UPLCTerm";
import PType from "../PType";


export default class Term<A extends PType>
{
    /**
     * in most cases it will never be used
     * 
     * it's solely purpose is to allow typescript to rise errors (at type level)
     * when the type arguments don't match
     */
    private _pInstance: A;
    get pInstance(): A { return isCloneable( this._pInstance ) ? this._pInstance.clone() : this._pInstance; }

    private _toUPLC: ( deBruijnLevel: bigint ) => UPLCTerm
    get toUPLC(): ( deBruijnLevel: bigint | number ) => UPLCTerm
    {
        return ( deBruijnLevel: bigint | number ) =>
        {
            if( typeof deBruijnLevel !== "bigint" ) deBruijnLevel = BigInt( deBruijnLevel );
            return this._toUPLC( deBruijnLevel );
        } 
    };

    constructor( toUPLC: ( dbn: bigint ) => UPLCTerm, pInstance: A )
    {
        this._toUPLC = toUPLC;
        this._pInstance = pInstance;
    }
}
