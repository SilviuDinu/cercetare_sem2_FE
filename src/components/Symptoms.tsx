import { MESSAGES } from "../enums/messages.enum";
import Message from "./Message";

export default function Symptoms(props: any) {
  const { options, filter } = props;

  const filteredOptions = options.filter((opt: any) => {
      return opt.symptom.startsWith(filter.searchValue) || opt.symptom.includes(filter.searchValue);
  });

  return (
    <div className={(filteredOptions.length > 0) ? "options-wrapper" : "options-wrapper empty"}>
      {filteredOptions.length > 0
        ? filteredOptions.map((option: any) => {
            return (
              <div key={option.id} data-key={option.id}>
                <div className="option">
                  <label htmlFor={option.id} className="label">
                    {option.symptom}
                  </label>
                  <input type="checkbox" name={option.id} className={'symptom-checkbox ' + option.symptom} />
                </div>
                <span className="divider"></span>
              </div>
            );
          })
        : <Message message={MESSAGES.NO_RESULTS} />}
    </div>
  );
}
