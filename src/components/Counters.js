import React from 'react';

import useGlobal from '../store';

const Counters = () => {
  const [globalState, globalActions] = useGlobal();
  const { requests, success, fail } = globalState.counters;
  return (
    <p>
      {requests} Requests <br />{' '}
      <span className="success">{success} Success</span> and{' '}
      <span className="fail">{fail} Fails</span>
    </p>
  );
};

export default Counters;
