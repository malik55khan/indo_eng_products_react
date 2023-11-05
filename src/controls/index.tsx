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
      className={props.className || ''}
      type={props.type || 'text'}
    />

  )
}

export default Input