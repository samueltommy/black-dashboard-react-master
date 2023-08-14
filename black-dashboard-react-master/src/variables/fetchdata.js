import React, { useState, useEffect } from "react";
import { useSignIn } from 'react-auth-kit';

function FetchChartData() {
  const [data, setData] = useState([]);
  const signIn = useSignIn();
  const [initialAuthDone, setInitialAuthDone] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchdata = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        console.error('Access token not found. Please login first.');
        return;
      }

      var config = {
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${accessToken}`
        }
      };

      const response = await fetch('https://staging-antro.srv.kirei.co.id/monitoring', config);
      const responseData = await response.json();
      console.log('Data fetched:', responseData);

      setData(responseData.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error('An error occurred during API call.', error);
    }
  };

  useEffect(() => {
    if (!initialAuthDone) {
      fetchdata();
      setInitialAuthDone(true);
    }
  }, [initialAuthDone]);

  const bodyHeightData = data.map(item => item.body_height);

  return {
    labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    datasets: [
      // ... your datasets here
    ],
  };
}

export default FetchChartData;
