export default function Btn(props) {
  return (
    <a href={props.href}>
      <div
        className={`${props.variant} btn shadow-none rounded-xl text-md w-full font-light text-white py-6 px-8`}
      >
        {props.text}
      </div>
    </a>
  );
}
