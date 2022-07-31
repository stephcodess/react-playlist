import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import useSWR from "swr";
import AxiosCall from "../axios";
import ErrorHandler from "../error-handler";

/**
 * @function useFetchFaqs
 * @description fetches all the FAQs.
 * @returns [allFaqs]
 */
function useFetchTrendingSongs(props){
    const toast = useToast();
    
    const requestObj = {
        path: `${props.type}/limit=${props.limit}/json`, // the request path
        method: 'GET',  // the request method
    };
    const fetcher = async () => await AxiosCall(requestObj);
    const { data: topSongs, error } = useSWR(requestObj.path, fetcher, { suspense: true });
    useEffect(() => {
        if (error) {
            const errormessage = ErrorHandler(error);
            toast.closeAll();
            toast({
                title: errormessage,
                position: "top-right",
                status: "error",
                variant: "solid",
                isClosable: true,
            });
        }
    }, [error])

    return [topSongs]
}
export default useFetchTrendingSongs;