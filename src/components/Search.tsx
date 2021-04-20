export default function Search(props: any) {
  return (
    <div className="search">
      <input type="text" value={props.value} onChange={event => props.onChange(event)} />

      <label htmlFor="selected">Selected</label>
      <input name="selected" type="checkbox" onChange={event => props.onChecked(event)} />
    </div>
  );
}
