export default function Message(props: any) {
  const { isVisible } = props;
  return (
    <>
      {isVisible ? (
        <div className={"message " + props.type}>
          <span>{props.message}</span>
        </div>
      ) : null}
    </>
  );
}
