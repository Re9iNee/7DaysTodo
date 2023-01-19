import style from "./App.module.css";
import List from "./Todo";
import { v4 as uuid } from "uuid";
import listData from "./constants/listData";
import { KeyboardEventHandler, useRef, useState } from "react";

import { ListModel } from "../typings";

function App() {
    const [list, setList] = useState<ListModel[]>(listData);
    const inputRef = useRef<HTMLInputElement>(null);

    const onInputKeydown: KeyboardEventHandler = (ev) => {
        if (ev.key !== "Enter") return;

        addNewTodo();
    };
    const clearInput = () => {
        if (inputRef.current) inputRef.current.value = "";
    };

    const addNewTodo = () => {
        const inputValue = inputRef.current?.value;
        if (!inputValue) return;

        setList((prev) => {
            return [...prev, { id: uuid(), title: inputValue }];
        });

        clearInput();
    };

    return (
        <div className={style.container}>
            <div className={style.head}>
                <input
                    type='text'
                    ref={inputRef}
                    data-testid='input'
                    id='new-todo-input'
                    onKeyDown={onInputKeydown}
                    placeholder='تسک جدید را وارد کنید'
                />
                <button data-testid='submit-btn' onClick={addNewTodo}>
                    ثبت
                </button>
            </div>

            <List list={list} />
        </div>
    );
}

export default App;
