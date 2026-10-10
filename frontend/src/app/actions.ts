// app/actions.ts
'use server'; // บ่งบอกว่าฟังก์ชันนี้รันบน Server เท่านั้น

export async function createUser(formData: FormData) {
    const name = formData.get('name');

    // จำลองเวลาหน่วง 2 วินาที
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    console.log('กำลังบันทึกชื่อลง Database:', name);
    await delay(2000);

    // ส่งข้อความกลับไปให้ฝั่ง Client เอาไปแสดงผล
    return { success: true, message: `บันทึกชื่อ ${name} สำเร็จ!` };
}