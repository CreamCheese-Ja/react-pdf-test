import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#d11fb6",
    color: "white",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
});

// Create Document Component
function BasicDocument() {
  return (
    <Document>
      {/*render a single page*/}
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Hello</Text>
        </View>
        <View style={styles.section}>
          <Text>World</Text>
        </View>
      </Page>
    </Document>
  );
}
export default BasicDocument;
