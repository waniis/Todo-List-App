import React from "react";
import {
  useMutation,
  gql,
} from "@apollo/client";




const ADD_TASK = gql`
mutation ($addTaskTitle: String!) {
    addTask(title: $addTaskTitle) {
      _id,
      title
      items {
        _id,
        title
      }
    }
  }
`;

// Component for adding a to-do item
function CreateList() {
  let input;
  const [addTodo] = useMutation(ADD_TASK, {
    update(
      cache,
      {
        data: { addTodo }
      }
    ) {
      cache.modify({
        fields: {
          todos(existingTodos = []) {
            const newTodoRef = cache.writeFragment({
              data: addTodo,
              fragment: gql`
                fragment addTask on Todo {
                  _id
                  title
                  items
                }
              `
            });
            return existingTodos.concat(newTodoRef);
          }
        }
      });
    }
  });

  return (
    <div>
        <section>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo({
            variables: { addTaskTitle: input.value },

            // Optimistically add the Todo to the locally cached
            // list before the server responds
            optimisticResponse: {
                addTask: {
                _id: 'temp-id',
                title: input.value,
                items :[]
              }
            }
          });
          input.value = "";
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Create List</button>
      </form>
      </section>
    </div>
  );
}

export default CreateList