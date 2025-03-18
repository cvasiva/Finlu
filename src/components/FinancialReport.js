import React, { useRef } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const FinancialReport = () => {
  const captureAndShare = async () => {
    console.log('Save as Image function can be implemented here.');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.companyName}>Finlu</Text>
        <Text style={styles.companyInfo}>#51, Tata Silk Farm, Bengaluru, KA</Text>
        <Text style={styles.companyInfo}>PH: 9345367453</Text>
      </View>

      {/* Report Title */}
      <View style={styles.reportHeader}>
        <Text style={styles.reportTitle}>Name & Reg. No.: Umesh | KAR9334</Text>
        <Text style={styles.reportDate}>Report As on: 15/01/2025 | 19:23</Text>
      </View>

      {/* Payables Summary */}
      <View style={styles.payableCard}>
        <Text style={styles.payableText}>Total Payable: ₹9,630</Text>
      </View>

      {/* Payables Table */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Payables</Text>
        {renderTableHeader()}
        {renderTransactionRow(1, '10.12.2024', 'Sagar', '₹2000')}
        {renderTransactionRow(2, '10.12.2024', 'Venkat', '₹3000')}
        {renderTransactionRow(3, '11.12.2024', 'Amit', '₹4000')}
        {renderTransactionRow(4, '12.12.2024', 'Rahul', '₹600')}
      </View>

      {/* Receivables Summary */}
      <View style={styles.receivableCard}>
        <Text style={styles.receivableText}>Total Receivables: ₹12,630</Text>
      </View>

      {/* Receivables Table */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Receivables</Text>
        {renderTableHeader()}
        {renderTransactionRow(1, '10.12.2024', 'Suresh', '₹5000')}
        {renderTransactionRow(2, '11.12.2024', 'Praveen', '₹3000')}
        {renderTransactionRow(3, '12.12.2024', 'Manoj', '₹2000')}
        {renderTransactionRow(4, '13.12.2024', 'Ramesh', '₹2630')}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          This is a system-generated report and hence no signature required
        </Text>
        <Text style={styles.footerText}>Thank you Umesh</Text>
        <Text style={styles.footerNote}>
          NOTE: These financial arrangements are solely between the involved parties, and Finlu has no obligation regarding any receivables.
        </Text>
      </View>

      {/* Capture Button */}
      <TouchableOpacity style={styles.button} onPress={captureAndShare}>
        <Text style={styles.buttonText}>Save as Image</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Table Header
const renderTableHeader = () => (
  <View style={styles.tableRowHeader}>
    <Text style={styles.tableCellHeader}>SI No.</Text>
    <Text style={styles.tableCellHeader}>Date</Text>
    <Text style={styles.tableCellHeader}>Name of Person</Text>
    <Text style={styles.tableCellHeader}>Amount</Text>
    <Text style={styles.tableCellHeader}> Payable</Text>
  </View>
);

// Table Row
const renderTransactionRow = (index, date, name, amount) => (
  <View style={styles.tableRow}>
    <Text style={styles.tableCell}>{index}</Text>
    <Text style={styles.tableCell}>{date}</Text>
    <Text style={styles.tableCell}>{name}</Text>
    <Text style={styles.tableCell}>{amount}</Text>
    <Text style={styles.tableCell}>{amount}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 15,
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 10,
  },
  companyName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#C2185B',
  },
  companyInfo: {
    fontSize: 12,
    color: '#555',
  },
  reportHeader: {
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
  },
  reportTitle: { fontWeight: 'bold' },
  reportDate: { color: '#555' },
  payableCard: { padding: 10, backgroundColor: '#f8d7da' },
  payableText: { color: '#C2185B', fontWeight: 'bold', textAlign: 'right' },
  receivableCard: { padding: 10, backgroundColor: '#d4edda' },
  receivableText: { color: '#155724', fontWeight: 'bold', textAlign: 'right' },
  card: { padding: 10, backgroundColor: '#fff', marginBottom: 10 },
  sectionTitle: { fontWeight: 'bold', marginBottom: 5 },
  footer: { padding: 10, backgroundColor: '#e9ecef', alignItems: 'center' },
  footerText: { fontWeight: 'bold' },
  footerNote: { fontSize: 12, textAlign: 'center', marginTop: 5 },
  button: {
    backgroundColor: '#C2185B',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: { color: 'white', fontWeight: 'bold' },

  // Table Styles
  tableRowHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 5,
    backgroundColor: '#f1f1f1',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingVertical: 5,
  },
  tableCellHeader: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 5,
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    paddingVertical: 5,
  },
});

export default FinancialReport;
