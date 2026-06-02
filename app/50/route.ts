import { renderToBuffer } from '@react-pdf/renderer'
import { NextResponse } from 'next/server'
import React from 'react'
import ContractPDF from './ContractPDF'

export async function GET() {
  const buffer = await renderToBuffer(React.createElement(ContractPDF))

  return new NextResponse(new Uint8Array(buffer), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="wzor-umowy-miauseo.pdf"',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
