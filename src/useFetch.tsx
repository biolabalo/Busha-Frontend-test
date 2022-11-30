import { useState, useEffect, useCallback } from "react";

export interface WalletType {
    id:              string;
    currency:        string;
    hold:            string;
    pending_balance: string;
    balance:         string;
    name:            string;
    type:            string;
    deposit:         boolean;
    payout:          boolean;
    imgURL:          string;
}

const useFetch = (url: string) => {
    const [data, setData] = useState<WalletType[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');
   
    const fetchWallets =  useCallback(async() => {
        try {
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            error instanceof Error && setErrorMsg(error.message);
        }
    }, [url])
    useEffect(() => {
        fetchWallets()
    }, [url, fetchWallets]);

    return [loading, data, errorMsg ,fetchWallets ];
};

export default useFetch;