export default function Selections(props: any) {
  return (
    <div className="selected">
      {props.options.length > 0
        ? props.options.map((option: any, index: number) => {
            return <span key={index}>{option.symptom}</span>;
          })
        : null}
    </div>
  );
}
