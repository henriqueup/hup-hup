import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { parseDisplayText, type Language } from "../../utils/displayValues";

type ReactPDFStyles = ReturnType<typeof StyleSheet.create>;
type Props = {
  baseStyles: ReactPDFStyles;
  language?: Language;
};

const displayText: Record<Language, string> = {
  en: `Bachelor's in Computer Science, with almost 4 years of professional experience in software development, having
  worked in a few projects and clients, some as tech lead and even architect, mostly with scrum and collaborating
  with PMs, SMs and designers. I consider myself to be a rational, sincere, flexible and meticulous person.`,
  pt: `Bacharel em Ciência da Computação, com quase 4 anos de experiência profissional em desenvolvimento de software,
  tendo trabalhado em alguns projetos e clientes, como tech lead e até arquiteto, na maioria utilizando scrum e colaborando
  com PMs, SMs e designers. Eu me considero uma pessoa racional, sincera, flexível e meticulosa.`,
};

const Intro = ({ baseStyles, language = "en" }: Props) => {
  const styles = buildStyles(baseStyles);

  return (
    <View style={[styles.section]}>
      <Text style={[styles.text, { marginTop: "32px" }]}>{parseDisplayText(displayText[language])}</Text>
    </View>
  );
};

const buildStyles = (baseStyles: ReactPDFStyles): ReactPDFStyles => ({
  ...baseStyles,
  ...StyleSheet.create({}),
});

export default Intro;
