import styles from "./styles.module.css";

export default function F3hasrpseudoc() {
  return (
    <section className="py-4 px-8">
      <article className="bg-white shadow-md rounded-lg p-6 mb-6">
        {/* Page header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4 border-black border-b pb-2">
          :has() Relational Pseudo-class
        </h1>

        {/* Code Sample 1 */}
        <div className={styles.section}>
          <article className={styles.article}>
            <h1 className={styles.h1}>Morning Times</h1>
            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </article>
          <article className={styles.article}>
            <h1 className={styles.h1}>Morning Times</h1>
            <h2 className={styles.h2}>Delivering you news every morning</h2>
            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </article>
        </div>

        {/* Code Sample 2 */}
        <div className={styles.container}>
          <div className={styles.card}>
            <h2 className={styles.title}>News Headline</h2>
            <p className={styles.description}>
              This is a brief news description.
            </p>
          </div>

          <div className={styles.card}>
            <p className={styles.description}>
              This card does not have a title.
            </p>
          </div>
        </div>

        {/* feature definition */}
        <aside className="text-gray-700 my-4 border-y-2 border-black pb-2">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Overview</h2>
          <nav className="mb-2">
            At its core, the :has() selector is a relational pseudo-class. This
            means it allows you to select an element (parent element or sibling
            element) based on its relationship with other elements (child
            element or sibling). Specifically, it selects an element if it
            contains another element that matches a given selector.
          </nav>

          <nav>
            <p>It&rsquo;s relatively similar to existing combinators:</p>
            <p>
              {`"space character"`}: the descendant combinator matches a direct
              or nested child;
            </p>
            <p>
              {`>`} the direct child combinator matches only top-level,
              un-nested children;
            </p>
            <p>
              {`+`} the adjacent sibling combinator matches only the very next
              sibling;
            </p>
            <p>
              {"~"} the general sibling combinator matches one or more siblings
              following the base selector.
            </p>
          </nav>
        </aside>

        {/* code explanation */}
        <menu className="text-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Example Usage
          </h2>
          <p className="mb-2">
            In <b>Code Sample 1</b>, the layout includes a section with two articles, each
            containing a heading and a paragraph. If an h1 heading is followed
            by an h2 sibling element, the CSS rule .h1:has(+ .h2) applies a
            bottom margin and a background color to visually group the heading
            pair. This styling helps differentiate article sections based on the
            content structure. The paragraph class styles the text content with
            specific font size and line height.
          </p>
          <p>
            <b>Code Sample 2</b> showcases a container with two card components. If a
            card includes a title element, the CSS rule .card:has(.title)
            changes its border color to green, indicating that the card has a
            heading. The cards are stacked vertically using flex-direction:
            column and are spaced evenly with a gap of 1rem. Overall, the styles
            dynamically adjust based on the card&lsquo;s content structure, making it
            visually distinct whether or not a title is present.
          </p>
        </menu>
      </article>
    </section>
  );
}
