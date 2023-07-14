import Link from "next/link";
import CountryDetail from "~/ui/Country/Detail/CountryDetail";
import getCountry from "~/utils/crud/getCountry";

export default async function Detail({ params }: { params: { slug: string } }) {
  const country = await getCountry(params.slug);

  return (
    <div className="flex flex-col gap-y-16">
      <div>
        <Link href="/" className="w-fit flex items-center gap-2 bg-app-paper shadow-sm pl-2 pr-3 py-2.5 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="app-icon">
            <path d="M480-160 160-480l320-320 42 42-248 248h526v60H274l248 248-42 42Z" />
          </svg>
          Back
        </Link>
      </div>

      <main>
        <CountryDetail
          flag={{ src: country.flags.svg, alt: country.flags.alt }}
          name={country.name.common}
          population={country.population}
          region={country.region}
          subregion={country.subregion}
          capital={country.capital}
          currencies={country.currencies}
          languages={country.languages}
          borders={country.borders}
        />
      </main>
    </div>
  );
}
