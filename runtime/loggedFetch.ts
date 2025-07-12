console.log('is this getting run');

setTimeout(() => {
  window.postMessage(
    [
      {
        source: 'react-events',
        type: 'fetch',
        payload: {
          url: 'https://api.example.com',
          duration: 148.7,
          status: 200,
        },
      },
      {
        source: 'react-events',
        type: 'setTimeout',
        payload: {
          url: 'https://api.example.com',
          duration: 150,
          status: 200,
        },
      },
      {
        source: 'react-events',
        type: 'useEffect',
        payload: {
          url: 'https://api.example.com',
          duration: 100,
          status: 200,
        },
      },
    ],
    '*'
  );
}, 1000);
