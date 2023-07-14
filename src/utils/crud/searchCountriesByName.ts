export default async function searchCountriesByName(name: string) {
  const options = { method: "GET", next: { revalidate: 30 } };
  return await fetch(
    `${process.env.apiAddress}/currency/${name}?fullText=true&fields=name,region,capital,population,flags,cca3`,
    options
  );
}
