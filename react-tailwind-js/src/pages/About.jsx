import { useUserQuery } from "@/services/query/Example"

export const About = () => {
  const { data } = useUserQuery()

  return (
    <div className="bg-black text-white flex justify-center items-center flex-col h-screen">
      <h1>Contents of this Package</h1>

      <h4>React</h4>
      <h4>Tanstack Query</h4>
      <h3>React router dom</h3>
      <h3>EsLint Setup</h3>
      <h3>Husky</h3>

      <div className="mt-6 border rounded-sm p-2">
        <h1>React Query Example User</h1>

        <ul>
          {data?.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
