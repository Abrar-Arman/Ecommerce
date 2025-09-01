import clsx from "clsx";

function Container({ children ,margin=true}) {
  return <section className={clsx('px-5 sm:w-[90%]   mx-auto',margin && 'mb-40')}>{children}</section>;
}

export default Container;
