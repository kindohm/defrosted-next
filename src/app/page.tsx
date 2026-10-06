import { getDefrostedSnapshot } from "../lib/defrosted-status";
import { site } from "../lib/site";

export const dynamic = "force-dynamic";

const Home = () => {
  const snapshot = getDefrostedSnapshot(new Date());
  const dateLabel = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${snapshot.evaluatedDate}T12:00:00Z`));

  return (
    <main className={`shell status-${snapshot.status}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: site.name,
          url: `${site.url}/`,
          description: site.description,
          inLanguage: "en-US",
        }).replace(/</g, "\\u003c") }}
      />
      <header className="masthead">
        <h1 id="question">Is Mariah Carey<br />defrosted?</h1>
        <time dateTime={snapshot.evaluatedDate}>{dateLabel}</time>
      </header>
      <section className="answer-block" aria-labelledby="question">
        <p className="answer">{snapshot.answer}<span aria-hidden="true">.</span></p>
        <div className="status-note">
          <p className="description">{snapshot.description}</p>
        </div>
      </section>
      <footer>
        <p className="footnote">A seasonal Mariah Carey check.<span>Following New York time.</span></p>
      </footer>
    </main>
  );
};

export default Home;
