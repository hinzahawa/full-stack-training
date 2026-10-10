// app/create/page.tsx
'use client';

import { createUser } from '@/app/actions';
import { useState } from 'react';

export default function CreatePage() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // ใช้ onSubmit ดักจับเหตุการณ์ตอนกด submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // ป้องกันไม่ให้เว็บรีโหลดหน้าใหม่เอง
    
    setLoading(true);
    setMessage('กำลังบันทึก...');

    // แปลงข้อมูลจาก Form เป็น FormData ส่งให้ Server Action
    const formData = new FormData(e.currentTarget);
    const result = await createUser(formData);

    // อัปเดต State ข้อความและสถานะโหลด
    setMessage(result.message);
    setLoading(false);
  };

  return (
    <div className="p-8 max-w-sm mx-auto">
      {/* เปลี่ยนจาก action={...} มาเป็น onSubmit={...} */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" 
          name="name" 
          placeholder="กรอกชื่อ..." 
          required
          className="border p-2 w-full rounded"
        />
        <button 
          type="submit" 
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full disabled:bg-gray-400 cursor-pointer disabled:cursor-not-allowed"
        >
          {loading ? 'กำลังโหลด...' : 'บันทึกข้อมูล'}
        </button>
      </form>

      {message && <p className="mt-4 text-green-600 font-medium">{message}</p>}
    </div>
  );
}