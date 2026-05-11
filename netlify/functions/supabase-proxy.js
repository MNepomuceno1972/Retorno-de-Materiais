exports.handler = async (event) => {
  try {
    const table = event.queryStringParameters?.table || 'retornos';
    const limit = event.queryStringParameters?.limit || 2000;

    const url = `https://kccmnkgqmwxxepzwzeue.supabase.co/rest/v1/${table}?select=*&limit=${limit}`;
    const key = 'sb_publishable_GAjGbS49fft9xrpk2HhgmA_Wr5XF418';

    const response = await fetch(url, {
      headers: {
        'apikey': key,
        'Authorization': `Bearer ${key}`
      }
    });

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
