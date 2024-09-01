const startProcess = async (orderId: string) => {
  const response = await fetch('http://localhost:8080/engine-rest/process-definition/key/orderProcess/start', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      variables: {
        orderId: { value: orderId, type: "String" },
      },
    }),
  });
  return response.json();
};
