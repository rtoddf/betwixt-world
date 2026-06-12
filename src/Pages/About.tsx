import PageLayout from '@/components/PageLayout';
import TextSlot from '@/components/about/TextSlot';
import {
  ledeText,
  aboutText,
  makeText,
  dontText,
  hopeText,
} from '@/components/about/text';
import '../styles/main.css';

function About() {
  return (
    <PageLayout>
      <div className="bt-about">
        <div className="bw-eyebrow">About Betwixt</div>
        <TextSlot
          headline="A neighborhood, not a curriculum."
          text={ledeText}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          <section>
            <TextSlot headline="Who lives here" text={aboutText} />
          </section>
          <section>
            <TextSlot headline="How we make things" text={makeText} />
          </section>
          <section>
            <TextSlot headline="What we don't do" text={dontText} />
          </section>
          <section>
            <TextSlot headline="What we hope" text={hopeText} />
          </section>
        </div>
      </div>
    </PageLayout>
  );
}

export default About;
