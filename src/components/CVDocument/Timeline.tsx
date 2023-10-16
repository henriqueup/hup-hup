import { StyleSheet, Text, View } from "@react-pdf/renderer";
import type { PropsWithChildren } from "react";

type ReactPDFStyles = ReturnType<typeof StyleSheet.create>;
type Props = {
  baseStyles: ReactPDFStyles;
  title: string;
  subtitle?: string;
  isSecondLevel?: boolean;
  isLastItem?: boolean;
};

const Timeline = ({
  baseStyles,
  title,
  subtitle,
  isSecondLevel = false,
  isLastItem = false,
  children,
}: PropsWithChildren<Props>) => {
  const styles = buildStyles(baseStyles);

  return (
    <View style={{ display: "flex", flexDirection: "row", gap: "4px" }}>
      <View style={{ display: "flex", flexDirection: "column", marginTop: "2px", position: "relative" }}>
        <View
          style={[
            isSecondLevel ? styles.drawing2 : styles.drawing,
            { width: "7px", height: "7px", borderRadius: "100%" },
          ]}
        />
        {isLastItem ? null : (
          <View
            style={[
              isSecondLevel ? styles.drawing2 : styles.drawing,
              {
                width: "1px",
                height: "100%",
                transform: isSecondLevel ? "translate(3px, 9px)" : "translate(3px, 11px)",
                position: "absolute",
                zIndex: 10,
              },
            ]}
          />
        )}
      </View>

      <View style={{ display: "flex", flexDirection: "column" }}>
        <Text style={[isSecondLevel ? styles.h4 : styles.h3, { fontWeight: "bold" }]}>{title}</Text>
        <Text style={[isSecondLevel ? styles.text : styles.h4, { color: "hsl(208 6% 55%)" }]}>{subtitle}</Text>
        <View style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "4px" }}>{children}</View>
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

export default Timeline;
