export async function makeApiCall<T>(
  url: string,
  method: string,
  data?: any,
  headers?: any,
  options?: any
): Promise<T> {
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(data),
    ...options,
  });
  const result = await response.json();
  return result as T;
}

// get client -- we get something, we want only information back from whatever information we GET
// get all - get everything requiring an object
// put client -- we only want to edit the information that we specifically ask for, we MAY end up sending it back to the client. Return the status
// put delete client - This is a soft-delete, you just tell the client "delete this", you don't care so much about the deletion as you do the status. Return the status
// delete client - delete something. Hard. It never lives again. If it works: 202, otherwise it doesn't matter
// post client -- We edit everything about an object. Let the client know about the entire new object as well as the ID
