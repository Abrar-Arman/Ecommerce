import clsx from "clsx";

function Container({ children, margin = true }) {
  return (
    <section className={clsx("mx-auto px-3 sm:w-[90%]  ", margin && "mb-40")}>
      {children}
    </section>
  );
}

export default Container;
