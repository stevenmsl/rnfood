import {useEffect, useState} from 'react';
import {Business} from '../services/types';
import yelp from '../services/yelp';

/*
  - serve as a middleman between services (APIs) and the
    UI components
*/
export default () => {
  const [results, setResults] = useState<Business[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm: string) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'richmond bc',
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };
  /*
    - search for some term when the component is
      first loaded so it can show some results
      instead of just blank
    - use useEffect to make sure it only
      executes once
  */
  useEffect(() => {
    searchApi('pasta');
  }, []);

  /* TS notes
     - tuple vs object
     - can't achieve what useState can where when
       you destructure from the result the types
       are narrowed. In our case, every member
       will be a union type if we return a tuple
  */
  return {searchApi, results, errorMessage};
};
