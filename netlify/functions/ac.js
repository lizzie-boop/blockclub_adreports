const AC_KEY = 'b6d21baa780b844ad8958eb94572d6e949784e43d07d9fd353fdfc2015c59f2c49a02c57';
const AC_URL = 'https://blockclubchi.api-us1.com';

exports.handler = async function(event) {
  const path = (event.queryStringParameters || {}).path;
  if (!path) {
    return { statusCode: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }, body: JSON.stringify({ error: 'Missing path' }) };
  }
  try {
    const res = await fetch(AC_URL + '/api/3/' + path, {
      headers: { 'Api-Token': AC_KEY, 'Accept': 'application/json' }
    });
    const text = await res.text();
    return { statusCode: res.status, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }, body: text };
  } catch(e) {
    return { statusCode: 500, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }, body: JSON.stringify({ error: e.message }) };
  }
};
