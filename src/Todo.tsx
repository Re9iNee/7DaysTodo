import { ListModel } from "../typings";

type Props = {
    list: ListModel[];
};
const Todo = ({ list }: Props) => {
    return (
        <div>
            <ul>
                {list.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
