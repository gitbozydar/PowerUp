import axios from "axios";

export function graphAPI(token, payload) {
  return axios.post(
    "https://graph.microsoft.com/v1.0/users/kontakt@gopowerup.pl/sendMail",
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
  );
}
