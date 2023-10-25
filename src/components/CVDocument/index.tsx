import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import type { Language } from "../../utils/displayValues";
import Education from "./Education";
import Experience from "./Experience";
import Intro from "./Intro";
import Languages from "./Languages";
import Subtitle from "./Subtitle";

type Props = {
  isDarkmode?: boolean;
  language?: Language;
};

const CVDocument = ({ isDarkmode, language = "en" }: Props) => {
  const styles = buildStyles({ isDarkmode });

  return (
    <Document>
      <Page style={styles.page}>
        <View style={[styles.section, { textAlign: "center" }]}>
          <Text style={[styles.header, styles.h1]}>Henrique Urban Pessoa</Text>
        </View>
        <Subtitle baseStyles={styles} />
        <Intro baseStyles={styles} language={language} />
        <Experience baseStyles={styles} language={language} />
        <Education baseStyles={styles} language={language} />
        <Languages baseStyles={styles} language={language} />
      </Page>
    </Document>
  );
};

const buildStyles = ({ isDarkmode }) =>
  StyleSheet.create({
    page: {
      flexDirection: "column",
      backgroundColor: isDarkmode ? "hsl(240, 4%, 9%)" : "hsl(0 0% 100%)",
      color: isDarkmode ? "hsl(205 12% 88%)" : "hsl(210 10% 14%)",
      alignItems: "center",
      padding: "64px 48px",
      gap: "4px",
    },
    section: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
    },
    header: {
      color: isDarkmode ? "hsl(80, 69%, 58%)" : "hsl(80, 64%, 48%)",
      fontWeight: "bold",
    },
    h1: {
      fontSize: "24pt",
    },
    h2: {
      fontSize: "16pt",
    },
    h3: {
      fontSize: "12pt",
    },
    h4: {
      fontSize: "10pt",
    },
    text: {
      fontSize: "9pt",
    },
    drawing: {
      backgroundColor: isDarkmode ? "hsl(80, 69%, 58%)" : "hsl(80, 64%, 48%)",
    },
  });

export default CVDocument;
