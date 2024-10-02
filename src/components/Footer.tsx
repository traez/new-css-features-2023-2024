export default function Footer() {
  return (
    <>
      <footer className="p-2 flex flex-row justify-center items-center gap-4 sm:gap-8 text-xs sm:text-sm border-t-2 border-solid border-gray-800  bg-gray-300  text-blue-900 ">
        <a
          href="https://github.com/traez/new-css-features-2023-2024"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:underline hover:text-green-600 font-bold text-blue-700 dark:text-blue-500"
        >
          New CSS features 2023-2024
        </a>
        <b>
          <span>© {new Date().getFullYear()}</span> Trae Zeeofor
        </b>
      </footer>
    </>
  );
}
