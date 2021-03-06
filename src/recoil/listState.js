import { atom, selector } from 'recoil';

const defaultData = [
    {
        id: 1,
        content: 'Action 1',
        status: 'new',
    },
    {
        id: 2,
        content: 'Action 2',
        status: 'inprogress',
    }, {
        id: 3,
        content: 'Action 3  ',
        status: 'inprogress',
    },
];

export const listTodoState = atom({
    key: 'listTodo',
    default: defaultData,
});
