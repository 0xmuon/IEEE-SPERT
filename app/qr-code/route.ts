import { NextResponse } from "next/server"
import { readFile } from "fs/promises"
import path from "path"

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "qr-code.pdf")
    const fileBuffer = await readFile(filePath)
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=qr-code.pdf",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    })
  } catch (err) {
    return new NextResponse("QR code not found", { status: 404 })
  }
}


