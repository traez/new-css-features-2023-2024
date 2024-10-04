import styles from "./styles.module.css";

export default function F5cascadelayers() {
  return (
    <section className="py-4 px-8">
      <article className="bg-white shadow-md rounded-lg p-6 mb-6">
        {/* Page header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4 border-black border-b pb-2">
          Cascade Layers
        </h1>

        {/* Code Sample  */}
        <h1 className={styles.heading}>Is this heading underlined?</h1>

        {/* feature definition */}
        <aside className="text-gray-700 my-4 border-y-2 border-black pb-2">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Overview</h2>
          <nav className="mb-2">
            Cascade Layers offer a method of direct control over specificity. It
            uses a new at-rule, @layer, to group styles in priority order.
            Cascade layers defined with @layer {`<name>`}. Multiple names can be
            defined at once, separated by commas, and each layer has specificity
            precedence in the order they are defined (in this case, left to
            right).
          </nav>
        </aside>

        {/* code explanation */}
        <menu className="text-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Example Usage
          </h2>
          <p className="mb-2">
            This code snippet demonstrates the use of Cascade Layers in CSS to
            control the specificity of styles. The goal is to determine which
            styles should be applied to a heading {`<h1>`} with a className of
            styles.heading based on the defined layer priorities.
          </p>
          <p >
            page still applies before site, so theres probably a little rule Im overlooking somewhere.
          </p>
        </menu>
      </article>
    </section>
  );
}
