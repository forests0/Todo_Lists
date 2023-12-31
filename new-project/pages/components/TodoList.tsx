import React from "react";
import styled from "styled-components";
import palette from "../../styles/palette";
import { TodoType } from "../types/todo";

const Container = styled.div`
  width: 100%;

  .todo-list-header {
    padding: 12px;
    border-bottom: 1px solid ${palette.gray};

    .todo-list-last-todo {
      font-size: 14px;
      span {
        margin-left: 8px;
      }
    }
  }
`;

interface IProps {
    todos: TodoType[];
}

// TodoList는 리액트 함수형 컴포넌트 타입이고 props로 IProps 타입의 프로퍼티를 전달 받습니다.
const TodoList: React.FC<IProps> = ({ todos }) => {
    return (
        <Container>
            <div className="todo-list-header">
                <p className="todo-list-last-todo">
                    남은 TODO<span>{todos.length}개</span>
                </p>
            </div>
        </Container>
    );
};

export default TodoList;