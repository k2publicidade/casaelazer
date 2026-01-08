import ExcelJS from 'exceljs'

interface ExcelData {
  list: {
    title: string
    school?: { name: string }
  }
  matchedItems: Array<{
    raw_text: string
    quantity: number
    product: {
      name: string
      price: number
    }
  }>
  notFoundItems: Array<{
    raw_text: string
    quantity: number
  }>
  total: number
}

export async function generateExcel(data: ExcelData): Promise<Buffer> {
  const workbook = new ExcelJS.Workbook()
  const worksheet = workbook.addWorksheet('Orçamento')

  // Configure page
  worksheet.pageSetup.paperSize = 9 // A4
  worksheet.pageSetup.orientation = 'portrait'

  // Header
  worksheet.mergeCells('A1:E1')
  const headerCell = worksheet.getCell('A1')
  headerCell.value = 'Casa e Lazer - Orçamento de Materiais'
  headerCell.font = { size: 16, bold: true }
  headerCell.alignment = { horizontal: 'center' }

  // List info
  worksheet.getCell('A3').value = `Lista: ${data.list.title}`
  if (data.list.school) {
    worksheet.getCell('A4').value = `Escola: ${data.list.school.name}`
  }
  worksheet.getCell('A5').value = `Data: ${new Date().toLocaleDateString('pt-BR')}`

  // Table header
  const headerRow = worksheet.getRow(7)
  headerRow.values = ['#', 'Quantidade', 'Produto', 'Preço Unit.', 'Total']
  headerRow.font = { bold: true }
  headerRow.fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FFE0E0E0' },
  }

  // Data rows
  let currentRow = 8
  data.matchedItems.forEach((item, index) => {
    const row = worksheet.getRow(currentRow)
    row.values = [
      index + 1,
      item.quantity,
      item.product.name,
      item.product.price,
      item.quantity * item.product.price,
    ]

    // Format currency
    row.getCell(4).numFmt = 'R$ #,##0.00'
    row.getCell(5).numFmt = 'R$ #,##0.00'

    currentRow++
  })

  // Total row
  const totalRow = worksheet.getRow(currentRow + 1)
  totalRow.values = ['', '', '', 'TOTAL:', data.total]
  totalRow.font = { bold: true }
  totalRow.getCell(5).numFmt = 'R$ #,##0.00'
  totalRow.fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FFFFD700' },
  }

  // Not found items (new sheet if any)
  if (data.notFoundItems.length > 0) {
    const notFoundSheet = workbook.addWorksheet('Não Encontrados')
    notFoundSheet.getCell('A1').value = 'Itens não disponíveis:'
    notFoundSheet.getCell('A1').font = { bold: true, size: 12 }

    notFoundSheet.getRow(2).values = ['Item', 'Quantidade']
    notFoundSheet.getRow(2).font = { bold: true }

    data.notFoundItems.forEach((item, index) => {
      notFoundSheet.getRow(index + 3).values = [item.raw_text, item.quantity]
    })

    notFoundSheet.columns = [{ width: 50 }, { width: 15 }]
  }

  // Store info
  const infoRow = worksheet.getRow(currentRow + 4)
  infoRow.values = [
    'Casa e Lazer',
    'Endereço',
    'Tel: (XX) XXXX-XXXX',
    'WhatsApp: (XX) XXXXX-XXXX',
  ]
  infoRow.font = { size: 9, color: { argb: 'FF666666' } }

  // Adjust columns
  worksheet.columns = [
    { width: 5 },   // #
    { width: 12 },  // Quantity
    { width: 40 },  // Product
    { width: 15 },  // Price
    { width: 15 },  // Total
  ]

  // Generate buffer
  const buffer = await workbook.xlsx.writeBuffer()
  return Buffer.from(buffer)
}
