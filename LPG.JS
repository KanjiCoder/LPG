//:==========================================================://[00001]
//:LPG_LODEPNG_TRANSCRIBED_TO_JAVASCRIPT:====================://[00002]    
                                                              // 00003 //
    //:ABOUT_THIS_FILE:==================================://  // 00004 // 
    //:                                                  ://  // 00005 //
    //: Transcribing This To JavaScript :                ://  // 00005 //
    //:                                                  ://  // 00005 //
    //: github.com/lvandeve/lodepng/                     ://  // 00005 //
    //:                         blob/master/lodepng.cpp  ://  // 00005 //
    //:                                                  ://  // 00005 //
    //:==================================:ABOUT_THIS_FILE://  // 00005 //
    //:HUNGARIAN_NOTATION:===============================://  // 00005 //
    //:                                                  ://  // 00005 //
    //:  Usually I think of "systems hungarian" as       ://  // 00005 //
    //:  stupid as hell and "apps hungrian" as           ://  // 00005 //
    //:  very useful. But this current undertaking       ://  // 00005 //
    //:  of transcribing C code to JS will rely on       ://  // 00005 //
    //:  "systems hungarian" because we need to be       ://  // 00005 //
    //:  very fucking careful if we want this to work.   ://  // 00005 //
    //:  -KanjiCoder 2022_07_09                          ://  // 00005 //
    //:                                                  ://  // 00005 //
    //: - - - - - - - - - - - -- - - - - - - - - - - - - ://  // 00005 //
    //:                                                  ://  // 00005 //
    //: SYSTEMS :                                        ://  // 00005 //
    //:                                                  ://  // 00005 //
    //:     p_ : pointer. An integer into lpg_mem_dat    ://  // 00005 //
    //:                                                  ://  // 00005 //
    //: APPS :                                           ://  // 00005 //
    //:                                                  ://  // 00005 //
    //:     i_ : Input                                   ://  // 00005 //
    //:     o_ : Output                                  ://  // 00005 //
    //:     c_ : Constant (like a macro)                 ://  // 00069 //
    //:                                                  ://  // 00005 //
    //:===============================:HUNGARIAN_NOTATION://  // 00005 //
    //:LPG_DATA:=========================================://  // 00006 //
                                                              // 00006 //
        const c_lpg_ptr_m_i =( 1024 - 1 );                    // 00006 //
                                                              // 00006 //
        var lpg_mem     = null ; //:@MAL@   Memory Stores://  // 00006 //   
        var lpg_mem_use = null ; //: Tracks Allocations  ://  // 00006 //
                                                              // 00006 //
        var lpg_ini =( 0 );                                   // 00006 //
                                                              // 00006 //
    //:=========================================:LPG_DATA://  // 00006 //
    //:LPG_FUNC:=========================================://  // 00007 //
                                                              // 00008 //
    const F_LPG_ERR = function PRIVATE_F_LPG_ERR(             // 00009 //
                                                              // 00009 //
       i_msg                                                  // 00009 //
    ){                                                        // 00009 //
        window.alert( "[LPG_ERR]:" + i_msg );                 // 00009 //
        throw(        "[LPG_ERR]:" + i_msg );                 // 00009 //
    };;                                                       // 00009 //
                                                              // ----- //
    const F_LPG_YEL = function PRIVATE_F_LPG_YEL(             // 00063 //
                                                              // 00064 //
        i_msg                                                 // 00065 //
    ){                                                        // 00066 //
        window.alert( "[LPG_YEL]:" + i_msg );                 // 00067 //
    };;                                                       // 00068 //
                                                              // ----- //
                                                              // 00010 //
    const F_LPG_INI = function PRIVATE_F_LPG_INI( ){          // 00011 //
                                                              // 00012 //
        if( lpg_ini >= 1 ){ F_LPG_ERR("[003]"); };            // 00013 //
                                                              // 00014 //
        lpg_mem_use = new Uint32Array( c_lpg_ptr_m_i + 1 );   // 00015 //
        lpg_mem     = new Array(       c_lpg_ptr_m_i + 1 );   // 00016 //
                                                              // 00017 //
        var  dex ;                                            // 00018 //
        for( dex = 0 ; dex <=( c_lpg_ptr_m_i ) ; dex ++ ){    // 00019 //
                                                              // 00020 //
            lpg_mem    [ dex ]=( null );                      // 00021 //
            lpg_mem_use[ dex ]=(  0   );                      // 00022 //
        };;                                                   // 00023 //
                                                              // 00024 //
        lpg_ini =( 1 );                                       // 00025 //
    };;                                                       // 00026 //
                                                              // 00027 //
    const F_LPG_MAL = function PRIVATE_F_LPG_MAL(             // 00028 //
                                                              // 00029 //
        i_nob /** Number Of Bytes To Malloc **/               // 00030 //
    ){                                                        // 00031 //
        var o_p_mem =(0-1); //: Ouput , pointer , Memory ://  // 00032 //        
                                                              // 00033 //
        if( (!( i_nob   >= 1 )) ){ F_LPG_ERR("[001]"); };     // 00034 //
        if( (!( lpg_ini >= 1 )) ){ F_LPG_ERR("[002]"); };     // 00035 //
                                                              // 00036 //
        var  fou =( 0 );                                      // 00037 //
        var  dex_arr ;                                        // 00038 //
        for( dex_arr = 0                                      // 00039 //
        ;    dex_arr <=( c_lpg_ptr_m_i )                      // 00040 //
        ;    dex_arr ++                                       // 00041 //
        ){                                                    // 00042 //                         
            if( 0 === lpg_mem_use[ dex_arr ] ){               // 00043 //
                                                              // 00044 //
                lpg_mem_use[ dex_arr ]=(               i_nob);// 00045 //
                lpg_mem[     dex_arr ]= new Uint8Array(i_nob);// 00046 //
                fou =( 1 );                                   // 00047 //
                break;                                        // 00048 //
            }else                                             // 00049 //
            if( 1 <= lpg_mem_use[ dex_arr ] ){                // 00050 //
                                                              // 00051 //
                /** Skip, already used. **/                   // 00052 //
            }else{                                            // 00053 //
                                                              // 00054 //
                F_LPG_ERR("[004][NEGMEM?]");                  // 00055 //
            };;                                               // 00056 //
        };;                                                   // 00057 //
                                                              // 00058 //
        if( 1 != fou ){                                       // 00059 //
                                                              // 00060 //
            F_LPG_YEL("[FIX:increase:c_lpg_ptr_m_i]");        // 00062 + 00061 //
            F_LPG_ERR("[005][OUTOFMEMORY]");
        };;
        { ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
            let  dex_u32 ;
            for( dex_u32  = (    0    )
            ;    dex_u32 <= ( i_nob-1 ) 
            ;    dex_u32 ++
            ){

                (lpg_mem[ dex_arr ])[ dex_u32 ]=( 0 >>> 0 );
            };;
        } ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

        o_p_mem =(  dex_arr );
        return(     o_p_mem );
    };;

    const F_LPG_FRE = function PRIVATE_F_LPG_FRE(

        p_mem
    ){
        if( 0 === lpg_mem_use[ p_mem ] ){

            F_LPG_ERR( "[006][DOUBLEFREE?]" );
        }else
        if( 1 <=  lpg_mem_use[ p_mem ] ){

            lpg_mem[     p_mem ]=( null  );
            lpg_mem_use[ p_mem ]=(   0   );
        }else{
            F_LPG_ERR("[007][NEGMEM?]");
        };;
    };;

    const F_LPG_UTM = function PRIVATE_F_LPG_UTM( ){

        var p_mem = F_LPG_MAL( 256 );
        for( var dex = 0 ; dex <=(256-1) ; dex++ ){
            lpg_mem[ p_mem ][ dex ]=( dex );
        };;
        F_LPG_FRE( p_mem );
    };;

    F_LPG_INI();
    F_LPG_UTM();

    //:=========================================:LPG_FUNC://    

    /** LPG_COMMENTS *************************************** ***

        @MAL@ : The word "malloc" or "malloced".
        @dex@ : An index accessor usually used in loop.
        @fou@ : Found?

        @LPG@ : Lode PNG Javascript ( Spelled: Gavascript )

    *** *************************************** LPG_COMMENTS **/

//:====================:LPG_LODEPNG_TRANSCRIBED_TO_JAVASCRIPT://    
//:==========================================================://