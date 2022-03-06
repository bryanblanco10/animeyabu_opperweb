const PRIVATE_KEY = process.env.VUE_APP_PRIVATE_KEY;
const PUBLIC_KEY = process.env.VUE_APP_PUBLIC_KEY;
const HORA_ACTUAL = new Date().toISOString();
import Swal from 'sweetalert2'

export const generateHash = async () => {
  const data = PRIVATE_KEY + "," + PUBLIC_KEY + "," + HORA_ACTUAL;

  const encoder = new TextEncoder();
  const signature = encoder.encode(data);

  const hashBuffer = await window.crypto.subtle.digest('SHA-256', signature);

  const hashArray = Array.from(new Uint8Array(hashBuffer));

  const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');

  return hashHex;
}

export const messageSweetAlert = (icon, title) => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000,
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast'
    },
    timerProgressBar: true
  });
  Toast.fire({
    icon: icon,
    title: title,
  })
}

export const TestToken = () => {
  return  {
    "token": `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvdGV4eHQudGtcL2FwaVwvdjFcL2
      xvZ2luIiwiaWF0IjoxNjQ2MzQ5NjI0LCJleHAiOjE2NDYzNTMyMjQsIm5iZiI6MTY0NjM0OTYyNCwianRpIjoi
      UjF3THNWMFNyY0pxenRhSCIsInN1YiI6MiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAw
      ODcyZGI3YTU5NzZmNyJ9.G5xLiXILLYhx1MNCaFOF2u3NUgrJqY1kZbDsZtYf4JM`
  }
}