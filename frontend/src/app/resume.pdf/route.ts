const resumeLines = [
  "Mervarick HiNz",
  "Full Stack Developer - Bangkok, Thailand",
  "",
  "Summary",
  "I build practical web products across frontend, backend, and deployment layers.",
  "",
  "Experience",
  "2024 - Present  Full Stack Developer, Product Engineering",
  "- Built dashboards with Next.js, React, TypeScript, and API-driven workflows.",
  "- Designed backend services and database models for product features.",
  "- Improved release confidence with Dockerized environments and checks.",
  "",
  "2022 - 2024  Frontend Developer, Web Platforms",
  "- Shipped responsive interfaces, reusable components, and design-system patterns.",
  "- Integrated REST APIs, auth flows, form validation, and state management.",
  "",
  "2020 - 2022  Junior Developer, Internal Tools",
  "- Created CRUD tools, reporting pages, and workflow automation scripts.",
  "- Maintained SQL queries, bug fixes, and deployment support.",
  "",
  "Stack",
  "Next.js, React, TypeScript, Tailwind CSS, Node.js, Express, PostgreSQL,",
  "Prisma, Docker, AWS, GitHub Actions, Linux, CI/CD",
  "",
  "Contact",
  "mervarick@example.com | +66 00 000 0000",
];

function escapePdfText(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function createTextLine(text: string, x: number, y: number, size: number) {
  return `BT /F1 ${size} Tf ${x} ${y} Td (${escapePdfText(text)}) Tj ET`;
}

function buildPdf() {
  const content = resumeLines
    .map((line, index) => {
      const size = index === 0 ? 26 : 11;
      return line === ""
        ? ""
        : createTextLine(line, 72, 730 - index * 24, size);
    })
    .join("\n");

  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>",
    `<< /Length ${content.length} >>\nstream\n${content}\nendstream`,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = [0];

  objects.forEach((object, index) => {
    offsets[index + 1] = pdf.length;
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";
  offsets.slice(1).forEach((offset) => {
    pdf += `${offset.toString().padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\n`;
  pdf += `startxref\n${xrefOffset}\n%%EOF`;

  return pdf;
}

export const dynamic = "force-static";

export async function GET() {
  return new Response(new TextEncoder().encode(buildPdf()), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="mervarick-resume.pdf"',
      "Cache-Control": "public, max-age=0",
    },
  });
}
