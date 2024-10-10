import styles from "./styles.module.css";

export default function F7nesting() {
  return (
    <section className="py-4 px-8">
      <article className="bg-white shadow-md rounded-lg p-6 mb-6">
        {/* Page header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4 border-black border-b pb-2">
          New Color Systems (LCH, LAB, HWB)
        </h1>

        {/* Code Sample  */}
        <div>
      <h1 className={styles.hwb1}>HWB Color 1</h1>
      <h1 className={styles.hwb2}>HWB Color 2</h1>
      <h1 className={styles.lab1}>LAB Color 1</h1>
      <h1 className={styles.lab2}>LAB Color 2</h1>
      <h1 className={styles.lch1}>LCH Color 1</h1>
      <h1 className={styles.lch2}>LCH Color 2</h1>
    </div>

        {/* feature definition */}
        <aside className="text-gray-700 my-4 border-y-2 border-black pb-2">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Overview</h2>
          <nav className="mb-2">
            CSS is getting some new color systems that fix some issues with RGB
            and give you more control:
            <p>
              <b>HWB -</b> Lets you choose colors by Hue (the type of color), Whiteness
              (how much white), and Blackness (how much black). This makes it
              easy to lighten or darken a color.
            </p>
            <p>
            <b>LAB -</b> This system is based on how we see colors. It can show a
              wide range of colors that we can tell apart.
            </p>
            <p>
            <b>LCH -</b> Similar to LAB but uses Lightness, Chroma (how vivid it is),
              and Hue. Its good for making smooth color transitions.
            </p>
          </nav>
        </aside>

        {/* code explanation */}
        <menu className="text-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Example Usage
          </h2>
          <p className="mb-2">VSCode supports the HWB color format for its color palette because it is more widely adopted in web standards and has better browser compatibility, making it easier for development tools to implement. In contrast, LAB and LCH are more complex, perceptual color spaces primarily used in design applications, which may explain their limited support in VSCode. As these color models are relatively new in web development, support in tools like VSCode may improve as adoption increases and the CSS specifications evolve. But results are all displayed in Example usage above</p>
        </menu>
      </article>
    </section>
  );
}
