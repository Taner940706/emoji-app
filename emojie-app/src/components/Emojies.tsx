import React, {useState, useEffect} from 'react';
import 'react-dom';
import classes from './Emojies.module.css';

import Card from './UI/Card';

const Emojies: React.FC = (props) => {

  const [emojies, setEmojies] = useState<{id: string, name: string, category: string, group: string, htmlCode: string, unicode: string}[]>([]);

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
    };
  }, []);

  const allemojies = emojies;
  console.log(allemojies.map(emojie => console.log(emojie.name)));
  return <>

   {allemojies.map(emoji =>{
    <Card>
    <p>{emoji.id}</p>
    <p>{emoji.name}</p>
    </Card>
   })}

  
  </>
}

export default Emojies;