import { useState } from "react";
import toast from "react-hot-toast";


export default function CopyToClipBaord(){
    const [isCopied, setIsCopied] = useState(false);
    function handleCopy(text){
        if(!navigator.clipboard){
            return toast.error("unable to copy");
        }
        navigator.clipboard.writeText(text).then(
            function(){
                toast.success("Copied")
                setIsCopied(true);
            },
            function(err){
                setIsCopied(false)
                toast.error("Could not copy");
            }
        )
    }
    return [isCopied, handleCopy];
}