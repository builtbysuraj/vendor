import { useState } from 'react';

export function usePatch() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const patchData = async (input, id) => {
    try {
      const response = await fetch(`https://vendor-react.onrender.com/vendors/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input),
      });

      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
    }
  };

  return { data, error, patchData };
}
