import React from 'react';

const HOC = BaseComponent => ({teste, list}) => {
    let newList = list.filter(value => value < 2)
    return <BaseComponent teste={teste} list={newList} />
 }

export default HOC;