import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer'

// Register fonts if needed
// Font.register({ family: 'Roboto', src: '...' })

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
    borderBottom: '2 solid #000',
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  storeInfo: {
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  storeText: {
    fontSize: 9,
    marginBottom: 2,
  },
  table: {
    marginTop: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottom: '1 solid #000',
    paddingBottom: 5,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottom: '1 solid #e0e0e0',
    paddingVertical: 8,
  },
  col1: { width: '5%' },
  col2: { width: '8%' },
  col3: { width: '45%' },
  col4: { width: '18%', textAlign: 'right' },
  col5: { width: '18%', textAlign: 'right' },
  totalRow: {
    flexDirection: 'row',
    marginTop: 10,
    paddingTop: 10,
    borderTop: '2 solid #000',
    fontWeight: 'bold',
  },
  totalLabel: {
    width: '76%',
    textAlign: 'right',
    fontSize: 12,
  },
  totalValue: {
    width: '18%',
    textAlign: 'right',
    fontSize: 12,
  },
  notFoundSection: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#fff3cd',
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  notFoundItem: {
    fontSize: 9,
    marginBottom: 3,
  },
  footer: {
    marginTop: 30,
    paddingTop: 20,
    borderTop: '1 solid #e0e0e0',
    fontSize: 8,
    color: '#666',
  },
})

interface ListPDFProps {
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

export function ListPDF({ list, matchedItems, notFoundItems, total }: ListPDFProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Casa e Lazer</Text>
          <Text style={styles.subtitle}>Orçamento - Lista de Materiais</Text>
          <Text style={{ fontSize: 10, marginTop: 5 }}>{list.title}</Text>
          {list.school && (
            <Text style={{ fontSize: 9, color: '#666' }}>{list.school.name}</Text>
          )}
          <Text style={{ fontSize: 8, color: '#999', marginTop: 5 }}>
            Data: {new Date().toLocaleDateString('pt-BR')}
          </Text>
        </View>

        {/* Store Info */}
        <View style={styles.storeInfo}>
          <Text style={styles.storeText}>📍 Endereço da Loja</Text>
          <Text style={styles.storeText}>📞 Telefone: (XX) XXXX-XXXX</Text>
          <Text style={styles.storeText}>⏰ Horário: Segunda a Sábado, 8h às 18h</Text>
        </View>

        {/* Products Table */}
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={styles.col1}>#</Text>
            <Text style={styles.col2}>Qtd</Text>
            <Text style={styles.col3}>Produto</Text>
            <Text style={styles.col4}>Preço Unit.</Text>
            <Text style={styles.col5}>Total</Text>
          </View>

          {matchedItems.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.col1}>{index + 1}</Text>
              <Text style={styles.col2}>{item.quantity}</Text>
              <Text style={styles.col3}>{item.product.name}</Text>
              <Text style={styles.col4}>R$ {item.product.price.toFixed(2)}</Text>
              <Text style={styles.col5}>
                R$ {(item.quantity * item.product.price).toFixed(2)}
              </Text>
            </View>
          ))}

          {/* Total */}
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>TOTAL ESTIMADO:</Text>
            <Text style={styles.totalValue}>R$ {total.toFixed(2)}</Text>
          </View>
        </View>

        {/* Not Found Items */}
        {notFoundItems.length > 0 && (
          <View style={styles.notFoundSection}>
            <Text style={styles.sectionTitle}>
              Itens não disponíveis em nosso catálogo:
            </Text>
            {notFoundItems.map((item, index) => (
              <Text key={index} style={styles.notFoundItem}>
                • {item.raw_text} (Qtd: {item.quantity})
              </Text>
            ))}
            <Text style={{ fontSize: 8, marginTop: 10, fontStyle: 'italic' }}>
              Entre em contato para consultar disponibilidade
            </Text>
          </View>
        )}

        {/* Footer */}
        <View style={styles.footer}>
          <Text>📱 WhatsApp: (XX) XXXXX-XXXX - Fale conosco!</Text>
          <Text style={{ marginTop: 5 }}>
            * Preços e disponibilidade sujeitos a alteração.
          </Text>
          <Text>Válido por 7 dias a partir da data de emissão.</Text>
        </View>
      </Page>
    </Document>
  )
}
