import React from 'react';
import useGlobalHook from 'use-global-hook';

import * as actions from './actions';

const initialState = {
  counters: {
    requests: 0,
    success: 0,
    fail: 0
  },
  status: 'INITIAL',
  repos: [],
  products: []
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
