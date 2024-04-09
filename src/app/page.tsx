import styles from "./page.module.css";
import { HomepageHero } from "@/components/HomepageHero";
import { HomepageTextSection } from "@/components/HomepageTextSection";
import { HomepageVideo } from "@/components/HomepageVideoPlayer";
import { AudioPlayer } from "@/components/audioplayer/AudioPlayer";

const Home = () => {
  return (
    <>
      <main className={styles.main}>
        <HomepageHero />
        <AudioPlayer homepage={true} />

        <HomepageTextSection />

        <HomepageVideo
          title={"Acetone"}
          source={"https://www.youtube.com/embed/T7yoIB4v8UM"}
          description={
            "This is from a show we did on the lawn at the Rosendale Cafe last summer. I'm playing along with John Hughes, Ken McGloin and Dean Jones- its always been a pleasure for us to play at our home town venue..."
          }
        />
      </main>
    </>
  );
};

export default Home;
