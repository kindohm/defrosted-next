import { getDefrostedSnapshot } from "../lib/defrosted-status";

export const dynamic = "force-dynamic";

export default function Home() {
  const snapshot = getDefrostedSnapshot(new Date());

  return (
    <main className={`shell status-${snapshot.status}`}>
      <section className="answer-block" aria-labelledby="question">
        <h1 id="question">Is Mariah Carey defrosted?</h1>
        <p className="answer">{snapshot.answer}</p>
        <p className="description">{snapshot.description}</p>
      </section>

      <dl className="facts" aria-label="Status details">
        <div>
          <dt>Status</dt>
          <dd>{snapshot.status}</dd>
        </div>
        <div>
          <dt>Evaluated Date</dt>
          <dd>{snapshot.evaluatedDate}</dd>
        </div>
        <div>
          <dt>Timezone</dt>
          <dd>{snapshot.timeZone}</dd>
        </div>
      </dl>
    </main>
  );
}
