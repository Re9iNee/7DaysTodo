import { KeyboardEventHandler, useRef, useState } from "react";
import { v4 as uuid } from "uuid";

interface ListModel {
    id: string | number;
    title: string;
}

const Todo = () => {
    const [list, setList] = useState<ListModel[]>([
        {
            id: 1,
            title: "Go Shopping",
        },
        {
            id: 2,
            title: "Milking the cow",
        },
    ]);

    const inputRef = useRef<HTMLInputElement>(null);

    const onInputKeydown: KeyboardEventHandler = (ev) => {
        if (ev.key !== "Enter") return;

        const inputValue = inputRef.current?.value;
        if (!inputValue) return;

        setList((prev) => {
            return [...prev, { id: uuid(), title: inputValue }];
        });

        clearInput();
    };

    const clearInput = () => {
        if (inputRef.current) inputRef.current.value = "";
    };

    return (
        <div>
            <input
                type='text'
                ref={inputRef}
                name='todo-input'
                onKeyDown={onInputKeydown}
            />

            <ul>
                {list.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
