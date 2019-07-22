import { useState, useEffect } from 'react';

export const useHTTP = (url, dependencies) => {

    const [isLoading, setIsLoading] = useState(false);
    const [fetchDate, setFetchDate] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        console.log('sending http request URL'+ url);
        fetch(url)
        .then(response => {
            if (!response.ok) {
            throw new Error('Failed to fetch.');
            }
            return response.json();
        })
        .then(data => {
            setIsLoading(false);
            setFetchDate(data);
        })
        .catch(err => {
            setIsLoading(false);
            console.log(err);
        });         
    },dependencies)


    return [isLoading, fetchDate];
}
