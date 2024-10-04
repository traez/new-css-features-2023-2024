import styles from "./styles.module.css";

export default function F4scrolldanimations() {
  return (
    <section className="py-4 px-8">
      <article className="bg-white shadow-md rounded-lg p-6 mb-6">
        {/* Page header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4 border-black border-b pb-2">
          Scroll-Driven Animations
        </h1>

        {/* Code Sample  */}
        <div className={styles.container}>
          <h1 className={styles.title}>Scroll-Driven Animations Demo</h1>

          <div className={styles.content}>
            <div className={styles.parallaxElement}>
              <div className={styles.card}>
                <h2 className={styles.cardTitle}>Welcome to the Demo</h2>
                <p>This element will fade in as you scroll down the page.</p>
              </div>
            </div>

            <div className={styles.parallaxElement}>
              <div className={`${styles.card} ${styles.cardGreen}`}>
                <h2 className={styles.cardTitle}>Keep Scrolling</h2>
                <p>
                  Youll see more elements fading in as you continue scrolling.
                </p>
              </div>
            </div>

            <div className={styles.parallaxElement}>
              <div className={`${styles.card} ${styles.cardYellow}`}>
                <h2 className={styles.cardTitle}>Isnt this cool?</h2>
                <p>The fade-in effect is controlled entirely by CSS!</p>
              </div>
            </div>

            <div className={styles.parallaxElement}>
              <div className={`${styles.card} ${styles.cardRed}`}>
                <h2 className={styles.cardTitle}>One More Time</h2>
                <p>This is the last element in our scroll animation demo.</p>
              </div>
            </div>
          </div>
        </div>

        {/* feature definition */}
        <aside className="text-gray-700 my-4 border-y-2 border-black pb-2">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Overview</h2>
          <nav className="mb-2">Scroll-driven animations allow you to animate property values based on a progression along a scroll-based timeline instead of the default time-based document timeline. This means that you can animate an element by scrolling a scrollable element, rather than just by the passing of time.</nav>
        </aside>

        {/* code explanation */}
        <menu className="text-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Example Usage
          </h2>
          <p className="mb-2">
          The component demonstrates the use of scroll-driven animations in CSS, where the opacity of each card is tied to the scroll position of the page. As the user scrolls, each card will fade in when it enters the viewport, creating a smooth, engaging scrolling experience.
          </p>
          <p >
          Code doesnt actually work as described. Instead all 4 cards are at different levels of opacity as user scrolls page.Anyways one cant know everything in programming. Will investigate better, when its necessary. Feature is also relatively new so not 100% supported across all browsers.
          </p>
        </menu>
      </article>
    </section>
  );
}
