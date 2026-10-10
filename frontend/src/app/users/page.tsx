// app/page.tsx
interface User {
  id: number;
  name: string;
  email: string;
}

// ฟังก์ชันดึงข้อมูลแบบ Server-side
async function getUsers(): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store', // บังคับดึงข้อมูลสดใหม่ทุกครั้ง
  });
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">รายชื่อผู้ใช้งาน (Next.js SSR)</h1>
      <ul className="space-y-4">
        {users.map((user) => (
          <li key={user.id} className="p-4 border rounded-lg shadow-sm bg-white">
            <h2 className="font-semibold text-lg text-black">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}