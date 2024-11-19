"use Client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";  

type UrlHookReturn = [string];
// for handling signin URL 
export const useSignInUrl = () : UrlHookReturn => {
    const searchParams = useSearchParams();
    const [callbackForDesktopApp, setCallbackForDesktopApp]= useState<string>('');

    useEffect(()=>{
        const callback:string = searchParams.get('callback') ?? '';
        setCallbackForDesktopApp(callback);
    },[searchParams]);

    const signinUrl:string = `/signin${callbackForDesktopApp? `?callback=${encodeURIComponent(callbackForDesktopApp)}`:''}`
    return [signinUrl]; 
}


// for handling signup URL 
export const useSignUpUrl = () : UrlHookReturn => {
    const searchParams = useSearchParams();
    const [callbackForDesktopApp, setCallbackForDesktopApp] = useState<string>('');

    useEffect(()=>{
        const callback:string = searchParams.get('callback') ?? '';
        setCallbackForDesktopApp(callback);
    },[searchParams]);
    const signupUrl:string = `/signup${callbackForDesktopApp? `?callback=${encodeURIComponent(callbackForDesktopApp)}`:''}`
    return [signupUrl]
}




