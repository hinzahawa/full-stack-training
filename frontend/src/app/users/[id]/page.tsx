
interface User {
    id: number;
    name: string;
    email: string;
}
async function getUsersById(id: string): Promise<User> {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id, {
        cache: 'no-store', // บังคับดึงข้อมูลสดใหม่ทุกครั้ง
    });
    if (!res.ok) throw new Error('Failed to fetch data');
    return res.json();
}

// app/users/[id]/page.tsx
export default async function UserDetailPage({
    params
}: {
    params: Promise<{ id: string }>
}) {

    const { id } = await params; // ดึงค่า id จาก URL เช่น /users/5 -> ได้ id เป็น "5"
    const user = await getUsersById(id)
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">user_id: {id}</h1>
            <h1 className="text-2xl font-bold">name: {user.name}</h1>
            <h1 className="text-2xl font-bold">email: {user.email}</h1>
        </div>
    );
}