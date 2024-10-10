import styles from "./styles.module.css";

export default function F7nesting() {
  return (
    <section className="py-4 px-8">
      <article className="bg-white shadow-md rounded-lg p-6 mb-6">
        {/* Page header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4 border-black border-b pb-2">
          :is() Functional Pseudo-class
        </h1>

        {/* Code Sample  */}
        <div>
          <section className={styles.section}>
            <h1 className={styles.h1}>Section Heading</h1>
          </section>
          <article className={styles.article}>
            <h1 className={styles.h1}>Article Heading</h1>
          </article>
          <aside className={styles.aside}>
            <h1 className={styles.h1}>Aside Heading</h1>
          </aside>
          <nav className={styles.nav}>
            <h1 className={styles.h1}>Nav Heading</h1>
          </nav>
        </div>

        {/* feature definition */}
        <aside className="text-gray-700 my-4 border-y-2 border-black pb-2">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Overview</h2>
          <nav className="mb-2">
            The {":is()"} CSS pseudo-class function takes a selector list as its
            argument, and selects any element that can be selected by one of the
            selectors in that list. This is useful for writing large selectors
            in a more compact form.
          </nav>
        </aside>

        {/* code explanation */}
        <menu className="text-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Example Usage
          </h2>
          <p className="mb-2">The accompanying CSS rule utilizes the :is() functional pseudo-class, which is a powerful selector that allows you to group multiple selectors, in this case, .section, .article, .aside, and .nav. This means that the style rules defined within the curly braces will apply to any element with the class .h1 that is a descendant of any of these four parent elements. Consequently, any heading within these sections will have a font size of 25 pixels and a color of sienna, promoting consistent styling across these various semantic HTML elements. </p>
        </menu>
      </article>
    </section>
  );
}
