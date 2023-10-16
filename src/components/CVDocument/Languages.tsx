import { StyleSheet, Text, View } from "@react-pdf/renderer";

type ReactPDFStyles = ReturnType<typeof StyleSheet.create>;
type Props = {
  baseStyles: ReactPDFStyles;
};

const Languages = ({ baseStyles }: Props) => {
  const styles = buildStyles(baseStyles);

  return (
    <View style={[styles.section]}>
      <Text style={[styles.header, styles.h2]}>Languages</Text>
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
        <View style={{ display: "flex", flexDirection: "row", alignItems: "flex-end" }}>
          <Text style={[styles.h4, { fontWeight: "bold" }]}>Portuguese: </Text>
          <Text style={[styles.text]}>Native</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", alignItems: "flex-end" }}>
          <Text style={[styles.h4, { fontWeight: "bold" }]}>English: </Text>
          <Text style={[styles.text]}>Fluent</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", alignItems: "flex-end" }}>
          <Text style={[styles.h4, { fontWeight: "bold" }]}>German: </Text>
          <Text style={[styles.text]}>Beginner</Text>
        </View>
      </View>
    </View>
  );
};

const buildStyles = (baseStyles: ReactPDFStyles): ReactPDFStyles => ({
  ...baseStyles,
  ...StyleSheet.create({}),
});

export default Languages;
