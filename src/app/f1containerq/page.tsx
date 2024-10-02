import styles from "./styles.module.css";

export default function F1containerq() {
  return (
    <section className="py-4 px-8">
      <article className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 border-black border-b pb-2">
          CSS container queries
        </h1>
        <div className={styles.post}>
          <div className={styles.card}>
            <h2>Card title</h2>
            <p>Card content</p>
          </div>
        </div>
        <aside className="text-gray-700 my-4 border-y-2 border-black pb-2">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Overview</h2>
          CSS container queries are a feature that allows styles to be applied
          to an element based on the size of its container rather than the
          viewport. This means that you can create responsive designs that adapt
          to the dimensions of their parent element, enabling more modular and
          flexible layouts. With container queries, you can use the @container
          rule to specify styles that should be applied when a container reaches
          certain conditions, such as its width or height. This enhances the
          ability to build components that respond dynamically to their
          surrounding context, improving usability across different screen sizes
          and container configurations.
        </aside>
        <menu className="text-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Example Usage
          </h2>
          This code demonstrates how to use container queries to make responsive
          design decisions based on the size of a container rather than the
          viewport. As the .post container grows beyond 600 pixels in width, the
          styles of the .card inside it will adjust accordingly, enhancing the
          flexibility and modularity of the layout.
        </menu>
      </article>
    </section>
  );
}
