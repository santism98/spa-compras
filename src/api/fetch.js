

export const consultation = async (url) => {

  try {

    const request = await fetch(url, {

      method: 'get',
      mode: 'cors',
      cache: 'force-cache'

    });

    if (request.ok){

      return await request.json();

    } else {

      throw new Error('Error while fetching api');

    }
        
  } catch (error) {

    console.log(error);
    throw new Error('Error while fetching API');

  }
};
