const getCompanyName = async (nip: string) => {
  const clean = nip.replace(/[\s-]/g, "");
  const date = new Date().toISOString().split("T")[0];
  const res = await fetch(
    `https://wl-api.mf.gov.pl/api/search/nip/${clean}?date=${date}`,
  );

  if (!res.ok) {
    throw new Error("API Failed");
  }

  const data = await res.json();

  return data?.result?.subject;
};
export default getCompanyName;
