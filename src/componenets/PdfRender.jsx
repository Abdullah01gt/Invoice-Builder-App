import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  heading: {
    fontSize: 18,
    marginBottom: 12,
  },
  section: {
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    borderBottom: "1px solid #e5e5e5",
    paddingVertical: 6,
  },
  headerRow: {
    flexDirection: "row",
    borderBottom: "1px solid #000",
    paddingVertical: 6,
    fontWeight: 700,
  },
  col1: {
    width: "50%",
  },
  col2: {
    width: "15%",
    textAlign: "center",
  },
  col3: {
    width: "15%",
    textAlign: "center",
  },
  col4: {
    width: "20%",
    textAlign: "right",
  },
  total: {
    marginTop: 20,
    textAlign: "right",
    fontSize: 14,
  },
  customerInfo: {
    fontWeight:500,
    fontSize:12
  },
});

const InvoiceDocument = ({ data }) => {
  const subtotal = data.items.reduce(
    (sum, item) => sum + item.invoiceQty * item.invoicePrice,
    0
  );

  const tax = subtotal*0.16
  const total = subtotal + tax;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.heading}>Invoice #{data.invoiceNo}</Text>
          <Text style={styles.customerInfo} >Date: {data.date}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.customerInfo}>Customer Name: {data.customer.name}</Text>
          <Text style={styles.customerInfo}>Customer Address: {data.customer.address}</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.headerRow}>
            <Text style={styles.col1}>Item</Text>
            <Text style={styles.col2}>Qty</Text>
            <Text style={styles.col3}> Unit Price (INR)</Text>
            <Text style={styles.col4}>Total Price (INR)</Text>
          </View>

          {data.items.map((item,index) => (
            <View style={styles.row} key={index}>
              <Text style={styles.col1}>{item.invoiceName}</Text>
              <Text style={styles.col2}>{item.invoiceQty}</Text>
              <Text style={styles.col3}> {item.invoicePrice} </Text>
              <Text style={styles.col4}> {item.invoiceTotal} </Text>
            </View>
          ))}
        </View>

        <Text style={styles.total}>Subtotal (INR):  {subtotal} </Text>
        <Text style={styles.total}>sGST: 6% </Text>
        <Text style={styles.total}>cGST: 10% </Text>
        <Text style={styles.total}>Tax Amount (INR): {tax}  </Text>
        <Text style={styles.total}>Total (INR): {total} </Text>
      </Page>
    </Document>
  );
};

const PdfRender = ({ data, fileName = "invoice.pdf" }) => {
  return (<div className="bg-sky-500 hover:bg-sky-700 text-white w-[100px] rounded-lg p-2 cursor-pointer disabled:bg-gray-300 
      disabled:cursor-not-allowed w-[130px]">
    <PDFDownloadLink
      document={<InvoiceDocument data={data} />}
      fileName={fileName}
    >
      {({ loading }) => (loading ? "Generating PDF..." : "Download Invoice")}
    </PDFDownloadLink>
   
  </div>);
};

export default PdfRender;