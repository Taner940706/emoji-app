import React from 'react';
import classes from './Emojies.module.css';

import Card from 'components/UI/Card';

const Emojies: React.FC<{emojies: Emojies}> = (props) => {
  return <>
    <Card>
      <span>Name</span>
      <img src="" alt="" />
    </Card>
  </>
}

export default Emojies;