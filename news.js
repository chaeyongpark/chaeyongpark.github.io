// News data shared by index.html (latest 8) and news.html (all, paginated).
// Add new items at the TOP (newest first).
// type: "paper" | "award" | "grant" | "service" | "event"
// text: HTML allowed (<strong>, <a>, ...)

const NEWS = [
  {
    date: "Oct. 2026",
    type: "award",
    text: `Our paper received the <strong>Best Paper Award</strong> at <strong>IEEE ISMAR 2026</strong> (roughly 1%).
           Congratulations to Jaehyeong and Hyeseong!`,
  },
  {
    date: "Oct. 2026",
    type: "event",
    text: `Chaeyong presented <strong>HaptiCraft</strong> (IEEE TVCG) at <strong>IEEE ISMAR 2026</strong> in Bari, Italy.`,
  },
  {
    date: "Aug. 2026",
    type: "award",
    text: `Our paper received the <strong>Best Paper Honorable Mention Award</strong> at the
           <strong>Korea Haptics Conference (KHC 2026)</strong>. Congratulations to Hyeseong and Jaehyeong!`,
  },
  {
    date: "Jun. 2026",
    type: "paper",
    text: `Three papers were accepted to <strong>IEEE ISMAR 2026</strong>.`,
  },
  {
    date: "May 2026",
    type: "service",
    text: `Chaeyong is serving as an International Program Committee (IPC) for <strong>VRST 2026</strong>.`,
  },
  {
    date: "Apr. 2026",
    type: "event",
    text: `AXIS Lab participated in <strong>ITRC 인재양성대전 2026</strong> with several VR demonstrations,
           showcasing our latest research to the public.`,
  },
  {
    date: "Apr. 2026",
    type: "paper",
    text: `A Paper was accepted at <strong>IEEE Transactions on Visualization and Computer Graphics</strong>
           (Q1 Journal, JCR top 5.4%).`,
  },
  {
    date: "Mar. 2026",
    type: "grant",
    text: `Chaeyong was selected for the <strong>Outstanding Young Researcher Grant</strong> by NRF for 3 years.`,
  },
  {
    date: "Mar. 2026",
    type: "service",
    text: `Chaeyong is serving as an Associate Chair (AC) for <strong>ACM UIST 2026</strong>.`,
  },
  {
    date: "Feb. 2026",
    type: "paper",
    text: `A Paper was accepted at <strong>IEEE Transactions on Haptics</strong>.`,
  },
  {
    date: "Jan. 2026",
    type: "paper",
    text: `Two papers were accepted at <strong>ACM CHI 2026</strong>.`,
  },
];

const NEWS_BADGES = {
  paper:   { label: "Paper",   cls: "badge-paper" },
  award:   { label: "Award",   cls: "badge-award" },
  grant:   { label: "Grant",   cls: "badge-award" },
  service: { label: "Service", cls: "badge-award" },
  event:   { label: "Event",   cls: "badge-event" },
};

function renderNewsItems(container, items) {
  container.innerHTML = items.map((n) => {
    const b = NEWS_BADGES[n.type] || NEWS_BADGES.event;
    return `
      <div class="news-item">
        <span class="news-date">${n.date}</span>
        <span class="news-content">
          <span class="news-badge ${b.cls}">${b.label}</span>
          ${n.text}
        </span>
      </div>`;
  }).join("");
}
