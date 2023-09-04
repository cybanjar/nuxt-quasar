export default async function (path: string, opts?: any) {
  const config = useRuntimeConfig()

  const url = config.public.apiUrl

  return await useFetch(`${url}${path}`, { ...opts })
}
