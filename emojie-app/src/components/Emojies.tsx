import React, {useState, useEffect} from 'react';
import 'react-dom';
import classes from './Emojies.module.css';

import Card from './UI/Card';
import SearchBar from './UI/SearchBar';

const Emojies: React.FC = (props) => {

  const [emojies, setEmojies] = useState<{id: string, name: string, category: string, group: string, htmlCode: string, unicode: string}[]>([]);
  const [loading, setLoading] = useState(true);
  const [httpError, SetHttpError] = useState();

  useEffect(() => {
    const fetchEmojies = async () => {
      const response = await fetch('https://emojihub.yurace.pro/api/all');
      const responseData = await response.json();

      if (!response.ok){
        throw new Error("Doesn't show available emojies!")
      }
      const loadEmojies = [];
      for (const key in responseData){
        loadEmojies.push({
          id: key,
          name: responseData[key].name,
          category: responseData[key].category,
          group: responseData[key].group,
          htmlCode: responseData[key].htmlCode,
          unicode: responseData[key].unicode, 
        });
      }
      setEmojies(loadEmojies);
      setLoading(false);
    };
    fetchEmojies().catch((error) => {
      setLoading(false);
      SetHttpError(error.message);
    })
  }, []);

  const handleSearch = (searchQuery: string) => {
    console.log('Search query:', searchQuery);
    
    if (searchQuery.length !== 0){
      const filteredResults = emojies.filter((emoji) =>
      emoji.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
      setEmojies(filteredResults);
    }
    else{
      const fetchEmojies = async () => {
        const response = await fetch('https://emojihub.yurace.pro/api/all');
        const responseData = await response.json();
  
        if (!response.ok){
          throw new Error("Doesn't show available emojies!")
        }
        const loadEmojies = [];
        for (const key in responseData){
          loadEmojies.push({
            id: key,
            name: responseData[key].name,
            category: responseData[key].category,
            group: responseData[key].group,
            htmlCode: responseData[key].htmlCode,
            unicode: responseData[key].unicode, 
          });
        }
        setEmojies(loadEmojies);
        setLoading(false);
      };
      fetchEmojies().catch((error) => {
        setLoading(false);
        SetHttpError(error.message);
      })
    }
    
  };

  return <>
  <SearchBar onSearch={handleSearch} />
   {emojies.map((emoji) => (
        <Card key={emoji.id}>
          <div className='card-header'>
          <span className='card-name'>{emoji.name}</span>
          </div>
          <div className='card-image'>
          <span className='card-htmlcode' dangerouslySetInnerHTML={{ __html: emoji.htmlCode }}></span>
          </div>
          <div className='card-footer'>
          <p className='card-category'>{emoji.category}</p>
          <p className='card-group'>{emoji.group}</p>
          <p className='card-unicode'>{emoji.unicode}</p>
          </div>
        </Card>
   ))}

   {loading &&  <section>
        <p className='loading-page'>Loading...</p>
      </section>}
    
    {httpError && <section>
        <p className='error-page'>{httpError}</p>
      </section>}
  
  </>
}
export default Emojies;