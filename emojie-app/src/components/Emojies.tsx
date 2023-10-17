import React, {useState, useEffect} from 'react';
import 'react-dom';
import classes from './Emojies.module.css';

import Card from './UI/Card';
import SearchBar from './UI/SearchBar';

const Emojies: React.FC = () => {

  const [emojies, setEmojies] = useState<{id: string, name: string, category: string, group: string, htmlCode: string, unicode: string}[]>([]);
  const [loading, setLoading] = useState(true);
  const [httpError, SetHttpError] = useState();
  const [isFind, setIsFind] = useState(false);

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
    const filteredResults = emojies.filter((emoji) =>
      emoji.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredResults.length === 0){
      setIsFind(true);
    }
     
    if (searchQuery.length !== 0){
      
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
          <div className={classes['card-header']}>
          <span className={classes['card-name']}>{emoji.name}</span>
          </div>
          <div className={classes['card-image']}>
          <span className={classes['card-htmlcode']} dangerouslySetInnerHTML={{ __html: emoji.htmlCode }}></span>
          </div>
          <div className={classes['card-footer']}>
          <p className={classes['card-category']}>{emoji.category}</p>
          <p className={classes['card-group']}>{emoji.group}</p>
          <p className={classes['card-unicode']}>{emoji.unicode}</p>
          </div>
        </Card>
   ))}

   {loading &&  <section className={classes['loading-page']}>
        <p>Loading...</p>
      </section>}
    
    {httpError && <section className={classes['error-page']}>
        <p>{httpError}</p>
      </section>}

      {isFind && <section className={classes['empty-page']}>
        <h1>Result is empty!</h1>
        </section>}
  
  </>
}
export default Emojies;