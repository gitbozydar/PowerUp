import { API_URL } from "@/lib/api";

const getCompanyName = async (nip: string) => {
  const res = await fetch(`${API_URL}/api/company`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nip }),
  });

  if (!res.ok) {
    throw new Error("API error");
  }

  return res.json();
};
export default getCompanyName;
