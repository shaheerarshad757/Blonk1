export async function login(email, password) {

  const url = 'https://api.staging.jumpsoftware.com/v1/signin';

  const requestConfig = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password,
    }),
  };

  const response = await fetch(url, requestConfig);

  const data = response.json();

  if (response.status === 200) {
    return data;
  }

  // throw - to be implemented
}
