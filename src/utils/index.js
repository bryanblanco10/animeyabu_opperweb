const PRIVATE_KEY = process.env.VUE_APP_PRIVATE_KEY;
const PUBLIC_KEY = process.env.VUE_APP_PUBLIC_KEY;
const HORA_ACTUAL = new Date().toISOString();


export const generateHash = async () => {
  console.log(PRIVATE_KEY)
  console.log(PUBLIC_KEY)
  console.log(HORA_ACTUAL)
  const data = PRIVATE_KEY + "," + PUBLIC_KEY + "," + HORA_ACTUAL;
  console.log(data)

  const encoder = new TextEncoder();
  const signature = encoder.encode(data);

  const hashBuffer = await window.crypto.subtle.digest('SHA-256', signature);

  const hashArray = Array.from(new Uint8Array(hashBuffer));

  const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');

  return hashHex;
}