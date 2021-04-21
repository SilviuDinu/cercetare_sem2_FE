import { MESSAGES } from "../enums/messages.enum";

export default function Search(props: any) {
  return (
    <div className="search">
      <input type="text" value={props.value} onChange={event => props.onChange(event)} placeholder={MESSAGES.SEARCH_PLACEHOLDER} />
    </div>
  );
}
