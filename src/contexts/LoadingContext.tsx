import { createContext, useState } from 'react';

export const LoadingProvider = (props: any): any => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={[loading, setLoading]}>
      {loading && <div className="loading">Loading&#8230;</div>}

      {props.children}
    </LoadingContext.Provider>
  );
};

export const LoadingContext = createContext<any>(false);
