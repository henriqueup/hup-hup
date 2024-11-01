import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { parseDisplayText, type Language } from "../../utils/displayValues";

type ReactPDFStyles = ReturnType<typeof StyleSheet.create>;
type Props = {
  baseStyles: ReactPDFStyles;
  language?: Language;
};

const displayValues = {
  en: {
    title: "Languages",
    values: [
      {
        key: "Portuguese",
        value: "Native",
      },
      {
        key: "English",
        value: "Fluent",
      },
      {
        key: "German",
        value: "Beginner",
      },
      {
        key: "Italian",
        value: "Beginner",
      },
    ],
  },
  pt: {
    title: "Idiomas",
    values: [
      {
        key: "Portugês",
        value: "Nativo",
      },
      {
        key: "Inglês",
        value: "Fluente",
      },
      {
        key: "Alemão",
        value: "Iniciante",
      },
      {
        key: "Italiano",
        value: "Iniciante",
      },
    ],
  },
} as const;

const Languages = ({ baseStyles, language = "en" }: Props) => {
  const styles = buildStyles(baseStyles);

  return (
    <View style={[styles.section]}>
      <Text style={[styles.header, styles.h2]}>{parseDisplayText(displayValues[language].title)}</Text>
      <View
        style={[
          styles.drawing,
          {
            width: "100%",
            height: "1px",
          },
        ]}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "12px 0px",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        {displayValues[language].values.map((v: { key: string; value: string }) => (
          <View style={{ display: "flex", flexDirection: "row", alignItems: "flex-end" }}>
            <Text style={[styles.h4, { fontWeight: "bold" }]}>{parseDisplayText(v.key)}: </Text>
            <Text style={[styles.text]}>{parseDisplayText(v.value)}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const buildStyles = (baseStyles: ReactPDFStyles): ReactPDFStyles => ({
  ...baseStyles,
  ...StyleSheet.create({}),
});

export default Languages;
