export const getBaseURL = () => {
  return (process.env.REACT_APP_ACCOUNT_LISTER_API_URI || (window as any)['_env_']?.ACCOUNT_LISTER_API_URI) as string | undefined;
};

export const getComposeEnhancers = () => process.env.NODE_ENV !== 'production' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
