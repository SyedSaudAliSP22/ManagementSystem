export const apiUrl = window.location.origin;

export const roles = { ADMIN: 1, PATIENT: 2, DOCTOR: 3 };

export function handleLogin(event) {
  event.preventDefault(); // Prevent form submission
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  //fetch api
}
