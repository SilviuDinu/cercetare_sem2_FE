export default function Form(props: any) {
  const { options } = props;
  return (
    <>
      <form className="symtpoms-form" method="POST">
        <div className="options-wrapper">
          {options.map((option: any) => {
            return (
              <>
                <div key={option.id} className="option">
                  <label htmlFor={option.id} className="label">
                    {option.symptom}
                  </label>
                  <input type="checkbox" name={option.id} className={'symptom-checkbox ' + option.symptom} />
                </div>
                <span className="divider"></span>
              </>
            );
          })}
        </div>

        <button className="submit-btn" type="submit">
          Send
        </button>
      </form>
    </>
  );
}
