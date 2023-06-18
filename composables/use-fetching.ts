export default function (path: string, opts?: any) {
  const config = useRuntimeConfig()
  
  const url = config.public.apiUrl

  return useFetch(`${url}${path}`, {...opts})
}
