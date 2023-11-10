const Input = (props: any) => {
  const changeHandler = (e: React.ChangeEvent) => {
    const { name, value }: any = e.target;
    props.setUserForm((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <input
      required={props?.required}
      onChange={(e) => changeHandler(e)}
      placeholder={props.placeholder || ''}
      name={props.name || ''}
      min={props.min || 0}
      className={props.className || ''}
      type={props.type || 'text'}
    />

  )
}
export const InputPhone = (props: any) => {
  const changeHandler = (e: React.ChangeEvent) => {
    const { name, value }: any = e.target;
    props.setUserForm((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <input
      required={props?.required}
      onChange={(e) => changeHandler(e)}
      placeholder={props.placeholder || ''}
      name={props.name || ''}
      min={props.min || 0}
      className={props.className || ''}
      type={props.type || 'text'}
      pattern={props.pattern || ''}
    />

  )
}
export const FileInput = (props: any) => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.files,
    }));
  }
  return (
    <input
      type="file"
      accept="image/*"
      required={props?.required}
      onChange={(e) => changeHandler(e)}
      placeholder={props.placeholder || ''}
      name={props.name || ''}

      className={props.className || ''}
    />

  )
}
export const TextArea = (props: any) => {
  const changeHandler = (e: React.ChangeEvent) => {
    const { name, value }: any = e.target;
    props.setUserForm((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <textarea
      required={props?.required}
      onChange={(e) => changeHandler(e)}
      placeholder={props.placeholder || ''}
      name={props.name || ''}
      className={props.className || ''}
      rows={props.rows || ''}
      cols={props.cols || ''}
    />

  )
}
export default Input