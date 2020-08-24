import React, {useState} from 'react';
import CategoryPage from 'AdminPanel/components/templates/CategoryPage/new';
import Input from "AdminPanel/components/atoms/Input";
import {observer} from "mobx-react";

const Log = observer(() => {
  const [username, setUserName] = useState('');
  const [IP, setIP] = useState('');
  const [action, setAction] = useState('');
  const [comment, setComment] = useState('');

  return (
    <CategoryPage
      inputRows={[
        {
          name: 'Логин',
          innerComponent: <Input value={username} setValue={setUserName} />
        },
        {
          name: 'IP',
          innerComponent: <Input value={IP} setValue={setIP} />
        },
        {
          name: 'Действие',
          innerComponent: <Input value={action} setValue={setAction} />
        },
        {
          name: 'Комментарий',
          innerComponent: <Input value={comment} setValue={setComment} />
        },
      ]}
      searchTableProps={{
        headers: ['Дата и время', 'IP', 'Логин', 'Действие', 'Комментарий'],
        searchResultsItems: [],
        maxPage: 0,
        currentPage: 0,
        goToNextPage: () => {},
        goToPrevPage: () => {},
        search: () => {}
      }}
    />
  );
});

export default Log;