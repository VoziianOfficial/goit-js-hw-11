const apiKey = '43901454-2f0f1ad212df2deb6dd93021b';

const pixApi = query => {
  const searchParams = new URLSearchParams({
    key: apiKey,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error fetching data');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error fetching images', error);
      throw error;
    });
};

export default pixApi;
