//:==========================================================://
//:LPG_LODEPNG_TRANSCRIBED_TO_JAVASCRIPT:====================://    

    //:HUNGARIAN_NOTATION:===============================://
    //:                                                  ://
    //:  Usually I think of "systems hungarian" as       ://
    //:  stupid as hell and "apps hungrian" as           ://
    //:  very useful. But this current undertaking       ://
    //:  of transcribing C code to JS will rely on       ://
    //:  "systems hungarian" because we need to be       ://
    //:  very fucking careful if we want this to work.   ://
    //:  -KanjiCoder 2022_07_09                          ://
    //:                                                  ://
    //: - - - - - - - - - - - -- - - - - - - - - - - - - ://

        SYSTEMS :

            p_ : pointer. An integer into lpg_mem_dat
            
        APPS :

            i_ : Input
            o_ : Output

    //:===============================:HUNGARIAN_NOTATION://
    //:LPG_DATA:=========================================://

        const c_lpg_ptr_m_i =( 1024 - 1 );
        
        var lpg_mem     = null ; //:@MAL@   Memory Stores://        
        var lpg_mem_use = null ; //: Tracks Allocations  ://

    //:=========================================:LPG_DATA://
    
    const F_LPG_INI = function PRIVATE_F_LPG_INI( ){

        lpg_mem_use = new Uint32Array( c_lpg_ptr_m_i + 1 );
        lpg_mem     = new Array(       c_lpg_ptr_m_i + 1 );

        var  dex ;
        for( dex = 0 ; dex <=( c_lpg_ptr_m_i ) ; dex ++ ){

            lpg_mem    [ dex ]=( null );
            lpg_mem_use[ dex ]=(  0   );
        };;
    };;

    const F_LPG_MAL = function PRIVATE_F_LPG_MAL(

        i_nob /** Number Of Bytes To Malloc **/
    ){
        var o_p_mem =(0-1); //: Ouput , pointer , Memory ://        

        if( (!( i_nob >= 1 )) ){ ERR("[BAD_NOB]"); };
        
        var  fou =( 0 );
        var  dex ;
        for( dex = 0 ; dex <=( c_lpg_ptr_m_i ) ; dex ++ ){

            if( 0 === lpg_mem_use[ dex ] ){

                lpg_mem_use[ dex ]=(                i_nob );
                lpg_mem    [ dex ]= new Uint8Array( i_nob );
                fou =( 1 );
                break;
            }else
            if( 1  <= lpg_mem_use[ dex ] ){

                /** Skip, already used. **/
            }else{

                ERR("[INVALID_ALLOCATION_SIZE_FOUND]");
            };;
        };;

        if( 1 != fou ){ 

            YEL("[FIX:increase:c_lpg_ptr_m_i]");
            ERR("[out_of_memory]");
        };;

        for( dex = 0 ; dex <= ( i_nob-1 ) ; dex ++ ){

            lpg_mem[ dex ]=( 0 >>> 0 );
        };;

        o_p_mem =(  dex );
        return( o_p_mem );
    };;

    /** LPG_COMMENTS *************************************** ***

        @MAL@ : The word "malloc" or "malloced".
        @dex@ : An index accessor usually used in loop.
        @fou@ : Found?

    *** *************************************** LPG_COMMENTS **/

//:====================:LPG_LODEPNG_TRANSCRIBED_TO_JAVASCRIPT://    
//:==========================================================://