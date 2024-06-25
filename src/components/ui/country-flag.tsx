import React from 'react';
import ReactCountryFlag from 'react-country-flag';

function CountryFlag({ nationality }) {
  const getCountryCode = (nationality) => {
    switch (nationality.toLowerCase()) {
      case 'brazilian':
        return 'BR';
      case 'american':
        return 'US';
      case 'german':
        return 'DE';
      case 'french':
        return 'FR';
      case 'japanese':
        return 'JP';
      case 'chinese':
        return 'CN';
      case 'indian':
        return 'IN';
      case 'russian':
        return 'RU';
      case 'british':
        return 'GB';
      case 'canadian':
        return 'CA';
      case 'italian':
        return 'IT';
      case 'spanish':
        return 'ES';
      case 'australian':
        return 'AU';
      case 'mexican':
        return 'MX';
      case 'dutch':
        return 'NL';
      case 'belgian':
        return 'BE';
      case 'austrian':
        return 'AT';
      case 'portuguese':
        return 'PT';
      case 'monacan':
        return 'MC';
      case 'azerbaijani':
        return 'AZ';
      case 'saudi':
        return 'SA';
      case 'qatari':
        return 'QA';
      case 'danish':
        return 'DK';
      case 'thai':
        return 'TH';
      case 'monegasque':
        return 'MC';
      case 'finnish':
        return 'FI';
      case 'swiss':
        return 'CH';
      default:
        return null;
    }
  };

  const countryCode = getCountryCode(nationality);

  if (!countryCode) {
    return null; 
  }

  return (
    <ReactCountryFlag
      countryCode={countryCode}
      svg
      style={{ width: '2em', height: '2em' }}
      title={nationality} 
    />
  );
}

export default CountryFlag;
