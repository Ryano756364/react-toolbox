import {useState} from 'react';

function Accordion({items}){
  const renderedItem = items.map((item) => {
    return (
      //dont forget key for top level element when displaying a list!!!
      <div key={item.id}>
        <div>
          {item.label}
        </div>
        <div>
          {item.content}
        </div>
      </div>
    )
  });

  return (
    <div>
      {renderedItem}
    </div>
  )
}

export default Accordion;
