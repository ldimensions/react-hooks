import { useState } from 'react';

export const useHTTP = (url) => {

    const [isLoading, setIsLoading] = useState(false);
    const [fetchDate, setFetchDate] = useState(false);

    //fetch('https://swapi.co/api/people')
    fetch(url)
    .then(response => {
        if (!response.ok) {
        throw new Error('Failed to fetch.');
        }
        return response.json();
    })
    .then(data => {
        // const selectedCharacters = charData.results.slice(0,5);
        // setIsLoading(false);
        // setLoadedCharacters(selectedCharacters.map((char, index) => ({
        //     name: char.name,
        //     id: index + 1
        // })))
        setIsLoading(false);
        setFetchDate(data);
    })
    .catch(err => {
        setIsLoading(false);
        console.log(err);
    }); 

    return [isLoading, fetchDate];
}
