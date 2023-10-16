import { StyleSheet, Text, View } from "@react-pdf/renderer";
import Timeline from "./Timeline";

type ReactPDFStyles = ReturnType<typeof StyleSheet.create>;
type Props = {
  baseStyles: ReactPDFStyles;
};

const Education = ({ baseStyles }: Props) => {
  const styles = buildStyles(baseStyles);

  return (
    <View style={[styles.section]}>
      <Text style={[styles.header, styles.h2]}>Education</Text>
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
          title="Computer Science Bachelor's - UFMG"
          subtitle="2016 to 2021 - Belo Horizonte"
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
