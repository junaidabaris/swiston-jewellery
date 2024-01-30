const CountrySelector = () => {
  const countries = [
    { label: "IND", code: "+91", value: "india" },
    { label: "PAK", code: "+92", value: "pakistan" },
    { label: "BAN", code: "+93", value: "bangladesh" },
    { label: "INDO", code: "+95", value: "indonesia" },
  ];
  return (
    <span>
      <select>
        {countries.map((country, index) => (
          <option key={index} value={country.value}>
            <strong>{country.label}</strong> {country.code}
          </option>
        ))}
      </select>
    </span>
  );
};

export default CountrySelector;
