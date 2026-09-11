import { groq } from 'next-sanity'

export const getPackagesQuery = groq`*[_type == "package"]`

export const getPackageByIdQuery = groq`*[_type == "package" && _id == $id][0]`

export const getTopDestinationsQuery = groq`*[_type == "package" && showInTopDestinations == true]`

export const getInternationalPackagesQuery = groq`*[_type == "package" && showInInternationalPackages == true]`

export const getDomesticPackagesQuery = groq`*[_type == "package" && showInDomesticPackages == true]`
