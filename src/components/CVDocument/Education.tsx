import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { parseDisplayText, type Language } from "../../utils/displayValues";
import Timeline from "./Timeline";

type ReactPDFStyles = ReturnType<typeof StyleSheet.create>;
type Props = {
  baseStyles: ReactPDFStyles;
  language?: Language;
};

const displayValues = {
  en: {
    title: "Education",
    values: [
      {
        title: "Computer Science Bachelor's - UFMG",
        subtitle: "2016 to 2021 - Belo Horizonte",
      },
    ],
  },
  pt: {
    title: "Educação",
    values: [
      {
        title: "Bacharel em Ciência da Computação - UFMG",
        subtitle: "2016 até 2021 - Belo Horizonte",
      },
    ],
  },
} as const;

const Education = ({ baseStyles, language = "en" }: Props) => {
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
      <View style={[styles.section, { margin: "12px 0px" }]}>
        <Timeline
          baseStyles={styles}
          title={parseDisplayText(displayValues[language].values[0].title)}
          subtitle={parseDisplayText(displayValues[language].values[0].subtitle)}
          isLastItem
        />
      </View>
    </View>
  );
};

const buildStyles = (baseStyles: ReactPDFStyles): ReactPDFStyles => ({
  ...baseStyles,
  ...StyleSheet.create({}),
});

export default Education;
