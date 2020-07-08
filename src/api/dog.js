import fetcher from '@/util/fetcher'

export function fetchAllBreeds () {
  return fetcher({
    method: 'GET',
    url: '/api/breeds/list/all'
  })
}

export function fetchBreed ({ breed, amount }) {
  return fetcher({
    method: 'GET',
    url: `/api/breed/${breed}/images/random/${amount}`
  })
}

export function fetchRandom (amount) {
  return fetcher({
    method: 'GET',
    url: `/api/breeds/image/random/${amount}`
  })
}
