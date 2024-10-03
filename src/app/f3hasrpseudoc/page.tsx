import styles from "./styles.module.css";

export default function F3hasrpseudoc() {
  return (
    <section className="py-4 px-8">
      <article className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 border-black border-b pb-2">
        :has() Relational Pseudo-class
        </h1>

        <div className={`${styles.grid} mb-6 `}>
          <div className={styles.item}>
            <div className={styles.subitem}></div>
          </div>
        </div>

        <div className={styles.gridx}>
      <div className={styles.itemx}>
        <div className={styles.subitemx}></div>
      </div>
    </div>

        <aside className="text-gray-700 my-4 border-y-2 border-black pb-2">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Overview</h2>
          CSS Subgrid is an advanced layout feature introduced as part of the CSS Grid Layout specification. It allows child grid items to inherit the grid structure (columns, rows, and gaps) of their parent grid container, creating a nested grid that is perfectly aligned with the parent. This is particularly useful when designing complex layouts where you want sub-items to line up with the parent grid&lsquo;s tracks.
        </aside>
        <menu className="text-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Example Usage
          </h2>
          <div className=" mb-6">
          <b>First Example (.grid / .item / .subitem)</b><br></br>
          In the first example, the parent grid container (.grid) is set to have 9 columns and 4 rows, with a yellow background. The child grid element (.item) utilizes CSS subgrid for its column structure by setting grid-template-columns: subgrid, inheriting the column layout from its parent. While it aligns perfectly with the parent’s columns, it overrides the row definition to create three custom rows of 80px each. The nested element (.subitem) uses the inherited column structure, spanning 3 out of the 5 columns and 2 out of the 3 rows defined in the child grid.
          </div>
          <div>
          <b>Second Example (.gridx / .itemx / .subitemx)</b><br></br>
          In the second example, a separate parent grid container (.gridx) mirrors the same structure as the first, with 9 columns and 4 rows. Here, the child element (.itemx) uses subgrid for its row layout, allowing it to inherit the rows from .gridx by setting grid-template-rows: subgrid. However, it defines its own column structure with three equal columns. The nested element (.subitemx) aligns with the inherited rows and spans 2 out of the 3 columns, maintaining a consistent layout while utilizing the flexibility of subgrid for row inheritance.
          </div>
      
        </menu>
      </article>
    </section>
  );
}
