import { Link, Path, StyleSheet, Svg, Text, View } from "@react-pdf/renderer";

type ReactPDFStyles = ReturnType<typeof StyleSheet.create>;
type Props = {
  baseStyles: ReactPDFStyles;
};

const Subtitle = ({ baseStyles }: Props) => {
  const styles = buildStyles(baseStyles);
  const hrefWithoutPathname = window.location.href.slice(0, -window.location.pathname.length);

  return (
    <View style={[styles.section, { textAlign: "center", alignItems: "center", gap: "2px", color: "hsl(208 6% 55%)" }]}>
      <Text style={[styles.text]}>Belo Horizone - MG</Text>
      <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Svg width={8} height={8} viewBox="0 0 24 24">
          <Path
            fill="hsl(208 6% 55%)"
            d="M17 19V5H7v14h10m0-18a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3c0-1.11.89-2 2-2h10M9 7h6v2H9V7m0 4h4v2H9v-2Z"
          />
        </Svg>
        <Text style={[styles.text]}>+55 31 99761-7689</Text>
        <Text style={[styles.text, { padding: "0px 4px" }]}> • </Text>
        <Svg width={8} height={8} viewBox="0 0 24 24">
          <Path
            fill="hsl(208 6% 55%)"
            d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"
          />
        </Svg>
        <Text style={[styles.text, { paddingLeft: "2px" }]}>titepessoa@gmail.com</Text>
      </View>
      <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Svg width={8} height={8} viewBox="0 0 24 24">
          <Path
            fill="hsl(208 6% 55%)"
            d="M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
          />
        </Svg>
        <Link style={[styles.text, { paddingLeft: "2px", color: "hsl(208 6% 55%)" }]} src={hrefWithoutPathname}>
          {hrefWithoutPathname}
        </Link>
      </View>
    </View>
  );
};

const buildStyles = (baseStyles: ReactPDFStyles): ReactPDFStyles => ({
  ...baseStyles,
  ...StyleSheet.create({}),
});

export default Subtitle;
