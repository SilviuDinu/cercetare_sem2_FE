import Symptoms from './Symptoms';

export default function Form(props: any) {
  const { options, filter } = props;

  return (
    <>
      <form
        className="symtpoms-form"
        method="POST"
        onSubmit={props.onSubmit}>
        
        <Symptoms
          filter={filter}
          options={options}
          selections={props.selections}
          onSelect={props.onSelect}>
        </Symptoms>

        <button className="submit-btn" type="submit">
          Submit symptoms
        </button>
      </form>
    </>
  );
}
