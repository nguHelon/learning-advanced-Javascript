import { useEffect, useState } from "react"

interface User {
  id: number,
  username: string,
}

const App = () => {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    console.log('mounting')
    console.log('Users: ', users)

    return () => console.log('unmounting')
  }, [users])

  return (
    <div className="App">
      
    </div>
  )
}

export default App