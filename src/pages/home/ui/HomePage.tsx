import { homeImgBg, homePageLiquidConfig } from "@/shared";
import { PageBackground } from "@/widgets/page-background";

export const HomePage = () => {
  return (
    <PageBackground config={homePageLiquidConfig} imageConfig={homeImgBg}>
      <p></p>
    </PageBackground>
  );
};
