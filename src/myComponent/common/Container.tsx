import clsx from "clsx";

function Container({ children ,margin=true}) {
  return <section className={clsx('mx-auto sm:w-[90%]  sm:mx-auto',margin && 'mb-40')}>{children}</section>;
}

export default Container;
