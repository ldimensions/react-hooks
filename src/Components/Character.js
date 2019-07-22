import React, { useEffect } from 'react';
import Summary from './Summary';
import { useHTTP } from '../hooks/http';

const Character = props => {

	const [isLoading, fetchDate] = useHTTP('https://swapi.co/api/people/' + props.selectedChar, [props.selectedChar]);

	let loadedCharacter = null;

	if(fetchDate){
		loadedCharacter = {
			id: props.selectedChar,
			name: fetchDate.name,
			height: fetchDate.height,
			colors: {
			  hair: fetchDate.hair_color,
			  skin: fetchDate.skin_color
			},
			gender: fetchDate.gender,
			movieCount: fetchDate.films.length
		};
	}

	useEffect(() => {
		return () => {
			console.log('ComponentDidUnmount...');
		}
	},[]);

    let content = <p>Loading Character...</p>;

    if (!isLoading && loadedCharacter) {
      content = (
        <Summary
          name={loadedCharacter.name}
          gender={loadedCharacter.gender}
          height={loadedCharacter.height}
          hairColor={loadedCharacter.colors.hair}
          skinColor={loadedCharacter.colors.skin}
          movieCount={loadedCharacter.movieCount}
        />
      );
    } else if (!isLoading && !loadedCharacter) {
      content = <p>Failed to fetch character.</p>;
    }

    return content;
}

export default React.memo(Character);