import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


import './App.css';




const finalSpaceCharacters = [
  {
    id: '1',
    name: 'dnd 1',
    
  },
  {
    id: '2',
    name: 'dnd 2',
    
  },
  {
    id: '3',
    name: 'dnd 3',
    
  },
  {
    id: '4',
    name: 'dnd 4',
    
  },
  {
    id: '5',
    name: 'dnd 5',
    
  }
]

function App() {
  const [characters, updateCharacters] = useState(finalSpaceCharacters);
  

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Drag n Drop</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map(({id, name, thumb}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <p>
                            { name }
                          </p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
        {/* <div>
      <ResizableBox width={300} height={300} className="box">
        <ReplaceOnOverflow orientation="horizontal" short="no horizontal space">
          <ReplaceOnOverflow orientation="vertical" short="no vertical space">
            <div className="content-wrap">
              <span className="content">
                I'm hiding if there is
                <br />
                no space for me
              </span>
            </div>
          </ReplaceOnOverflow>
        </ReplaceOnOverflow>
      </ResizableBox>
    </div> */}
        
      
    
 

      </header>
      
    </div>
    
    
  );
}

export default App;