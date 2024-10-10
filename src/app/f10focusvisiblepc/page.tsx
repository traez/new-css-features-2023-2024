import styles from "./styles.module.css";

export default function F7nesting() {
  return (
    <section className="py-4 px-8">
      <article className="bg-white shadow-md rounded-lg p-6 mb-6">
        {/* Page header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4 border-black border-b pb-2">
        :focus-visible Pseudo-Class
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
            The  form.
          </nav>
        </aside>

        {/* code explanation */}
        <menu className="text-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Example Usage
          </h2>
          <p className="mb-2">The accompanying </p>
        </menu>
      </article>
    </section>
  );
}
