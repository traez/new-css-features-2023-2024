import styles from "./styles.module.css";

export default function F6colorfunctionsspaces() {
  return (
    <section className="py-4 px-8">
      <article className="bg-white shadow-md rounded-lg p-6 mb-6">
        {/* Page header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4 border-black border-b pb-2">
          Color Functions and Color Spaces
        </h1>

        {/* Code Sample  */}
        <section className={styles.section}>
          <div className={styles.card}>
            <h2 className={styles.header}>CSS Color Functions & Spaces</h2>
            <p>
              This card demonstrates various CSS color functions such as{" "}
              <code>rgba</code>, <code>hsla</code>, and modern color spaces like{" "}
              <code>lch</code>, <code>lab</code>, and <code>hwb</code>.
            </p>
            <button className={styles.button}>Learn More</button>
          </div>
        </section>

        {/* feature definition */}
        <aside className="text-gray-700 my-4 border-y-2 border-black pb-2">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Overview</h2>
          <nav className="mb-2">
            <b>CSS color functions</b> allow you to define colors using various
            methods, making it easier to create and manipulate colors in your
            styles. Common functions include rgb(), which uses red, green, and
            blue values (0-255), and rgba(), which adds an alpha value for
            transparency. Other functions like hsl() and hsla() represent colors
            using hue, saturation, and lightness, with hue defined in degrees on
            a color wheel. Functions like var() allow you to use CSS custom
            properties (variables), while calc() helps in performing
            calculations with colors. These functions enhance flexibility and
            control in styling.
          </nav>
          <nav className="mb-2">
            <b>CSS color spaces</b> define how colors are represented and
            interpreted in web design. The most common color space is the RGB
            color space, which combines red, green, and blue light to create a
            broad spectrum of colors. The HSL color space focuses on hue,
            saturation, and lightness, making it easier to understand and
            manipulate colors visually. CSS also supports the Lab and XYZ color
            spaces, which are designed for more accurate color representation
            across different devices. Understanding color spaces is crucial for
            ensuring consistent color rendering, especially when working with
            graphics and images in diverse environments.
          </nav>
        </aside>

        {/* code explanation */}
        <menu className="text-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Example Usage
          </h2>
          <p className="mb-2">
            The code snippet combines multiple color functions and spaces in
            practical use cases (borders, backgrounds, text, shadows) to show
            the flexibility and power of modern CSS. By using variables, color
            functions, and modern color spaces, the styling is both modular and
            visually optimized for readability and contrast. The use of
            color-contrast() and color-mix() provides a dynamic approach to
            ensure visual consistency, which is not possible using older color
            functions like rgb or hsl alone.
          </p>
        </menu>
      </article>
    </section>
  );
}
