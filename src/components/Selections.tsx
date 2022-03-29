import CloseIcon from '@mui/icons-material/Close';

export default function Selections(props: any) {
  return (
    <div className="selected" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {props.options.length > 0
        ? props.options.map((option: any, index: number) => {
            return (
              <span
                key={index}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                {option.symptom} <CloseIcon color="primary" onClick={() => props.onRemove(option)} />
              </span>
            );
          })
        : null}
    </div>
  );
}
