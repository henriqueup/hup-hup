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
    title: "Experience",
    values: [
      {
        title: "Full Stack Software Engineer at Quorum",
        subtitle: "since Feb/2024 - .NET, MSSQL, VB, JS, HTML",
        content: `Since joining Quorum, I've experienced a novel business in my career, working with a Government Relations product.
        Not only that, but the product itself is almost 30 years old, meaning I've been learning a lot about legacy system maintenance
        and conciliating generational paradigm shifts.`,
      },
      {
        title: "Full Stack Software Engineer at dti digital",
        subtitle: "Mar/2021 to Feb/2024",
        content: [
          {
            title: "Architect with an international telecommunications client",
            subtitle: "May/2023 to Feb/2024 - React, Next.js, Node.js, Oracle",
            content: `Working as the architect / senior full stack engineer for a client in the telecommunication market, I
            was able to quickly pickup their Node.js and Oracle backend stack, proposing many improvements and a new
            API structure;`,
          },
          {
            title: "Architect's right hand with a client in the refractory industry",
            subtitle: "Sep/2022 to May/2023 - React, .NET, EntityFramework, Azure & ARM/YAML",
            content: `Having had the chance to be mentored for the architect role, I was able to manage cloud resources,
            implement IaC and automate CI/CD, while also participating in a complete infrastructure migration in
            Azure, creating a complete IaC with cloud components maintained by a Cloud Center of Excellence team;`,
          },
          {
            title: "Tech lead with a client in the fertilizer business",
            subtitle: "Sep/2021 to Aug/2022 - React, .NET, SQL, Azure AD (B2B and B2C)",
            content: `In the first product I worked on this client, there was a complete, 5 sprint feature for an existing
            market analysis system, which included the rework of the B2B authentication flow to a multi-tenant
            B2B/B2C context. Then I went to another team in this same client, with a fleet management product, which
            we were able to majorly expand, overhauling it's UI and delivering major new features, including change tracking;`,
          },
          {
            title: "Full Stack Software Engineer",
            subtitle: "Feb/2020 to Aug/2021 - React, .NET, SQL",
            content: `When I acquired experience with the React, .NET and SQL stack, working mostly with existing products of
            a client in the health business, delivering new features. In this time I was able to quickly learn
            coding best practices and principles and by the end I was acting as the tech lead's right hand.`,
          },
        ],
      },
      {
        title: "Software Engineer intern at dti digital",
        subtitle: "from 02/03/2020 to 03/15/2021",
      },
    ],
  },
  pt: {
    title: "Experiência",
    values: [
      {
        title: "Full Stack Software Engineer na Quorum",
        subtitle: "desde Fev/2024 - .NET, MSSQL, VB, JS, HTML",
        content: `Dese me juntar à Quorum, tenho passado por uma área de negócio nova na minha carreira, trabalhando com um produto de
        Relações Governamentais. Além disso, mas o produto também tem quase 30 anos, ou seja, tenho aprendido bastante sobre manutenção
        de sistemas legado e como conciliar mudanças de paradigmas entre gerações.`,
      },
      {
        title: "Full Stack Software Engineer na dti digital",
        subtitle: "Mar/2021 até Fev/2024",
        content: [
          {
            title: "Arquiteto com um cliente internacional de telecomunicações",
            subtitle: "Mai/2023 até Fev/2024 - React, Next.js, Node.js, Oracle",
            content: `Trabalhando como arquiteto / senior full stack engineer para um cliente no mercado de telecomunicações,
            fui capaz de rapidamente me adapatar ao seu stack backed com Node.js e Oracle, propondo muitas melhorias
            e uma nova estrutura de APIs;`,
          },
          {
            title: "Braço direito de arquiteto com um cliente na indústria de refratários",
            subtitle: "Set/2022 até Mai/2023 - React, .NET, EntityFramework, Azure & ARM/YAML",
            content: `Tendo a chance de ser mentorado para o cargo de arquiteto, fui capaz de gerir recursos cloud,
            implementando IaC e automatizando o CI/CD, além de participar de uma migração completa de infraestrutura
            com Azure, criando uma IaC completa com componentes cloud geridos por uma equipe de Cloud Center of Excellence;`,
          },
          {
            title: "Tech lead com um cliente no ramo de fertilizantes",
            subtitle: "Set/2021 até Ago/2022 - React, .NET, SQL, Azure AD (B2B and B2C)",
            content: `No primeiro produto que trabalhei nesse cliente, houve uma feature completa, de 5 sprints
            para um sistema existente de análise de mercado, que incluiu a alteração do fluxo de autenticação B2B para
            um contexto B2B/B2C multi-tenant. Em seguida, fui para outra equipe no mesmo cliente, com um produto de
            gestão de frotas, o qual expandimos bastante, revigorando sua UI e entregando novas features essenciais,
            incluindo histórico de mudanças;`,
          },
          {
            title: "Full Stack Software Engineer",
            subtitle: "Fev/2020 até Ago/2021 - React, .NET, SQL",
            content: `Período em que adquiri experiência com o stack de React, .NET e SQL, trabalhando majoritariamente
            em produtos de um cliente do ramo de saúde, entregando novas features. Durante esse tempo, fui capaz de
            rapidamente aprender boas práticas e princípios, já atuando como braço direito de tech lead nos útlimos meses.`,
          },
        ],
      },
      {
        title: "Estágio como Software Engineer na dti digital",
        subtitle: "from 02/03/2020 to 03/15/2021",
      },
    ],
  },
} as const;

const Experience = ({ baseStyles, language = "en" }: Props) => {
  const styles = buildStyles(baseStyles);

  return (
    <View style={[styles.section]}>
      <Text style={[styles.header, styles.h2, { marginTop: "12px" }]}>
        {parseDisplayText(displayValues[language].title)}
      </Text>
      <View
        style={[
          styles.drawing,
          {
            width: "100%",
            height: "1px",
          },
        ]}
      />
      <View style={[styles.section, { margin: "12px 0px", gap: "12px" }]}>
        <Timeline
          baseStyles={styles}
          title={parseDisplayText(displayValues[language].values[0].title)}
          subtitle={parseDisplayText(displayValues[language].values[0].subtitle)}
        >
          <Text style={[styles.text]}>{parseDisplayText(displayValues[language].values[0].content)}</Text>
        </Timeline>
        <Timeline
          baseStyles={styles}
          title={parseDisplayText(displayValues[language].values[1].title)}
          subtitle={parseDisplayText(displayValues[language].values[1].subtitle)}
        >
          <View style={{ marginLeft: "8px" }}>
            <Timeline
              baseStyles={styles}
              title={parseDisplayText(displayValues[language].values[1].content[0].title)}
              subtitle={parseDisplayText(displayValues[language].values[1].content[0].subtitle)}
              isSecondLevel
            >
              <Text style={[styles.text]}>
                {parseDisplayText(displayValues[language].values[1].content[0].content)}
              </Text>
            </Timeline>
          </View>
          <View style={{ marginLeft: "8px" }}>
            <Timeline
              baseStyles={styles}
              title={parseDisplayText(displayValues[language].values[1].content[1].title)}
              subtitle={parseDisplayText(displayValues[language].values[1].content[1].subtitle)}
              isSecondLevel
            >
              <Text style={[styles.text]}>
                {parseDisplayText(displayValues[language].values[1].content[1].content)}
              </Text>
            </Timeline>
          </View>
          <View style={{ marginLeft: "8px" }}>
            <Timeline
              baseStyles={styles}
              title={parseDisplayText(displayValues[language].values[1].content[2].title)}
              subtitle={parseDisplayText(displayValues[language].values[1].content[2].subtitle)}
              isSecondLevel
            >
              <Text style={[styles.text]}>
                {parseDisplayText(displayValues[language].values[1].content[2].content)}
              </Text>
            </Timeline>
          </View>
          <View style={{ marginLeft: "8px" }}>
            <Timeline
              baseStyles={styles}
              title={parseDisplayText(displayValues[language].values[1].content[3].title)}
              subtitle={parseDisplayText(displayValues[language].values[1].content[3].subtitle)}
              isSecondLevel
              isLastItem
            >
              <Text style={[styles.text]}>
                {parseDisplayText(displayValues[language].values[1].content[3].content)}
              </Text>
            </Timeline>
          </View>
        </Timeline>
        <Timeline
          baseStyles={styles}
          title={parseDisplayText(displayValues[language].values[2].title)}
          subtitle={parseDisplayText(displayValues[language].values[2].subtitle)}
          isLastItem
        />
      </View>
    </View>
  );
};

const buildStyles = (baseStyles: ReactPDFStyles): ReactPDFStyles => ({
  ...baseStyles,
  ...StyleSheet.create({
    drawing2: {
      backgroundColor: "hsl(80, 85%, 28%)",
    },
  }),
});

export default Experience;
