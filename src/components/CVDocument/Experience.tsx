import { StyleSheet, Text, View } from "@react-pdf/renderer";
import Timeline from "./Timeline";

type ReactPDFStyles = ReturnType<typeof StyleSheet.create>;
type Props = {
  baseStyles: ReactPDFStyles;
};

const Experience = ({ baseStyles }: Props) => {
  const styles = buildStyles(baseStyles);

  return (
    <View style={[styles.section]}>
      <Text style={[styles.header, styles.h2, { marginTop: "12px" }]}>Experience</Text>
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
          title="Lemonfy Project"
          subtitle="since Jul/2022 - React, Next.js, tRPC, Prisma ORM"
        >
          <Text style={[styles.text]}>
            Website I've created and been developing which consists basically of a music tablature editor that supports
            song creation and reproduction (synthesized). In it I've been able to deepen my knowledge and explore
            different functionalities and technologies, on my own pace.
          </Text>
        </Timeline>
        <Timeline baseStyles={styles} title="Full Stack Software Engineer at dti digital" subtitle="since 03/16/2021">
          <View style={{ marginLeft: "8px" }}>
            <Timeline
              baseStyles={styles}
              title="Architect with an international telecommunications client"
              subtitle="since May/2023 - React, Next.js, Node.js, Oracle"
              isSecondLevel
            >
              <Text style={[styles.text]}>
                Working as the architect / senior full stack engineer for a client in the telecommunication market, I
                was able to quickly pickup their Node.js and Oracle backend stack, proposing many improvements and a new
                API structure;
              </Text>
            </Timeline>
          </View>
          <View style={{ marginLeft: "8px" }}>
            <Timeline
              baseStyles={styles}
              title="Architect's right hand with a client in the refractory industry"
              subtitle="Sep/2022 to May/2023 - React, .NET, EntityFramework, Azure & ARM/YAML"
              isSecondLevel
            >
              <Text style={[styles.text]}>
                Having had the chance to be mentored for the architect role, I was able to manage cloud resources,
                implement IaC and automate CI/CD, while also participating in a complete infrastructure migration in
                Azure, creating a complete IaC with cloud components maintained by a Cloud Center of Excellence team;
              </Text>
            </Timeline>
          </View>
          <View style={{ marginLeft: "8px" }}>
            <Timeline
              baseStyles={styles}
              title="Tech lead with a client in the fertilizer business"
              subtitle="Sep/2021 to Aug/2022 - React, .NET, SQL, Azure AD (B2B and B2C)"
              isSecondLevel
            >
              <Text style={[styles.text]}>
                In the first product I worked on this client, there was a complete, 5 sprint feature for an existing
                market analysis system, which included the rework of the B2B authentication flow to a multi-tenant
                B2B/B2C context. Then I went to another team in this same client, with a fleet management product, which
                we were able to majorly expand, overhauling it's UI and delivering major new features, including change
                tracking;
              </Text>
            </Timeline>
          </View>
          <View style={{ marginLeft: "8px" }}>
            <Timeline
              baseStyles={styles}
              title="Full Stack Software Engineer"
              subtitle="Feb/2020 to Aug/2021 - React, .NET, SQL"
              isSecondLevel
              isLastItem
            >
              <Text style={[styles.text]}>
                When I acquired experience with the React, .NET and SQL stack, working mostly with existing products of
                a client in the health business, delivering new features. In this time I was able to quickly learn
                coding best practices and principles and by the end I was acting as the tech lead's right hand.
              </Text>
            </Timeline>
          </View>
        </Timeline>
        <Timeline
          baseStyles={styles}
          title="Software Engineer intern at dti digital"
          subtitle="from 02/03/2020 to 03/15/2021"
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
