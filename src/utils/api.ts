import { Enviroment } from './env/enviroment';

export const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
  const token = localStorage.getItem('access_token'); 
  
  const config: RequestInit = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  };

  const response = await fetch(`${Enviroment.API_URL}/${endpoint}`, config);
  
  if (!response.ok) {
    if (response.status === 401) {
      localStorage.removeItem('access_token'); 
      localStorage.removeItem('authUser');
      window.location.href = '/login';
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return response.json();
};