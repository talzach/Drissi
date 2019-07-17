import axios from 'axios';

export const getAll = async (store, request = axios) => {
  store.actions.counter.addRequest();
  const status = 'LOADING';
  store.setState({ status });
  try {
    const products = [
      {
        id: 1,
        name: 'dress',
        user: 'tal',
        image: 'dress.jpg'
      },
      {
        id: 2,
        name: 'dress2',
        user: 'noa',
        image: 'dress.jpg'
      }
    ];
    const status = 'SUCCESS';
    store.setState({ products, status });
  } catch (error) {
    const isError404 = error.response && error.response.status === 404;
    const status = isError404 ? 'NOT_FOUND' : 'ERROR';
    store.setState({ status });
    store.actions.counter.addFail();
  }
};
