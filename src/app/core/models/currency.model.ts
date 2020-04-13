export class Currency { 
  id: number
  currency: string
  description: string
  countryOrTerritory: CountryOrTerrirtory[]
}

export class CountryOrTerrirtory{
  description: string
  flagImg: string
}
