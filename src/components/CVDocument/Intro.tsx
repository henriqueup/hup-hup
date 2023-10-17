import { StyleSheet, Text, View } from "@react-pdf/renderer";

type ReactPDFStyles = ReturnType<typeof StyleSheet.create>;
type Props = {
  baseStyles: ReactPDFStyles;
};

const Intro = ({ baseStyles }: Props) => {
  const styles = buildStyles(baseStyles);

  return (
    <View style={[styles.section]}>
      <Text style={[styles.text, { marginTop: "32px" }]}>
        Bachelor's in Computer Science, with almost 4 years of professional experience in software development, having
        worked in a few projects and clients, some as tech lead and even architect, mostly with scrum, collaborating
        with PMs, SMs and designers. I consider myself to be a rational, sincere, flexible and meticulous person.
      </Text>
    </View>
  );
};

const buildStyles = (baseStyles: ReactPDFStyles): ReactPDFStyles => ({
  ...baseStyles,
  ...StyleSheet.create({}),
});

export default Intro;
