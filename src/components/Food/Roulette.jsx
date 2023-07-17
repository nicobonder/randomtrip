import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { BiTrash, BiGridVertical, BiPlus } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";
import Food from "./Food";
import './Food.css'
import Tooltip from "../../common/Tooltip/Tooltip";

const DraggeableForm = () => {
  const [inputList, setInputList] = useState([
    {
      id: uuidv4(),
      text: "China"
    },
    {
      id: uuidv4(),
      text: "Mexicana"
    },
    {
      id: uuidv4(),
      text: "Italiana"
    },
    {
      id: uuidv4(),
      text: "Fast food"
    },
    {
      id: uuidv4(),
      text: "Libre"
    },
    {
      id: uuidv4(),
      text: "Local"
    },
    {
        id: uuidv4(),
        text: "China"
      },
      {
        id: uuidv4(),
        text: "Mexicana"
      },
      {
        id: uuidv4(),
        text: "Italiana"
      },
      {
        id: uuidv4(),
        text: "Fast food"
      },
      {
        id: uuidv4(),
        text: "Libre"
      },
      {
        id: uuidv4(),
        text: "Local"
      },
  ]);
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { text: "", id: uuidv4() }]);
  };

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(inputList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setInputList(items);
  }

  return (
    <section className="containerFood">
      <Tooltip
        title = "¿Qué vas a comer?"
        content = "El resultado debería servirte como excusa para buscar un lugar donde comer que tenga platos lo más parecido posible a la opción que te tocó"
        divColor = "#fff"
        borderColor = "#fff"
        // top = "-5px"
        // left = "135%"
      />
    <div className="main-form">
      
      <Food data={inputList} />
      <h3>Elegí tus opciones</h3>
      <DragDropContext  onDragEnd={handleOnDragEnd}>
        <Droppable className='roulette' droppableId="items">
          {(provided) => (
            <ul
              className="items"
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ listStyle: "none" }}
            >
              {inputList.map((x, index) => {
                return (
                  <Draggable key={x.id} draggableId={x.id} index={index}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="list-item"
                      >
                        <div className="item">
                          <BiGridVertical />
                          <input
                            name="text"
                            placeholder="Escribí una categoría de comida"
                            value={x.text}
                            onChange={(e) => handleInputChange(e, index)}
                            className="input"
                          />
                          <div className="btn-box">
                            {inputList.length !== 1 && (
                              <button
                                className="button"
                                onClick={() => handleRemoveClick(index)}
                              >
                                <BiTrash />
                              </button>
                            )}
                          </div>
                        </div>
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
      <button
        onClick={handleAddClick}
        style={{ marginLeft: "2.1rem" }}
        className="buttonAdd"
      >
        <BiPlus />
      </button>
    </div>
    </section>
  );
};

export default DraggeableForm;
