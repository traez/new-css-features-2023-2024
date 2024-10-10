import styles from "./styles.module.css";

export default function F7nesting() {
  return (
    <section className="py-4 px-8">
      <article className="bg-white shadow-md rounded-lg p-6 mb-6">
        {/* Page header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4 border-black border-b pb-2">
          Nesting
        </h1>

        {/* Code Sample  */}
        <p className={styles.example}>
          This paragraph{" "}
          <a href="#" className={styles.link}>
            contains a link
          </a>
          , try hovering or focusing it.
        </p>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Card Title</h2>
          <p>This is a card component using CSS Modules.</p>
        </div>

        {/* feature definition */}
        <aside className="text-gray-700 my-4 border-y-2 border-black pb-2">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Overview</h2>
          <nav className="mb-2">
            The CSS nesting module allows you to write your stylesheets so that
            they are easier to read, more modular, and more maintainable. As you
            are not constantly repeating selectors, the file size can also be
            reduced. CSS nesting is different from CSS preprocessors such as
            Sass in that it is parsed by the browser rather than being
            pre-compiled by a CSS preprocessor. Also, in CSS nesting, the
            specificity of the & nesting selector is similar to the :is()
            function; it is calculated using the highest specificity in the
            associated selector list.
          </nav>
        </aside>

        {/* code explanation */}
        <menu className="text-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Example Usage
          </h2>
          <p className="mb-2">The code demonstrates the use of nesting in CSS Modules, where child elements are styled relative to their parent class. In the .example class, the nested & {">"} a selector targets {"<a>"} tags directly within .example, applying styles like color: tomato and setting additional styles for hover and focus states (&:hover, &:focus). Similarly, in the .card class, nested selectors like & .title style only the .title elements within .card, making it easier to manage styles specific to the parent-child structure and ensuring encapsulation. This nesting feature enhances modularity and keeps related styles grouped together.</p>
        </menu>
      </article>
    </section>
  );
}
