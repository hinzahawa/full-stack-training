export default async function UsersPage() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const users = await response.json();

  return (
    <main>
      <h1>Users</h1>

      {users.map((user: { id: number; name: string }) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </main>
  );
}