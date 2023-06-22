import { useNavigate } from 'react-router-dom';
import { createNew } from '../services/users';

const NewUserPage = () => {
  const navigate = useNavigate();
  const onSibmitHandler = async (event) => {
    event.preventDefault();
    const dataForm = new FormData(event.target);
    const obj = Object.fromEntries(dataForm);
    await createNew(obj);
    navigate('/users');
  };
  return (
    <form onSubmit={onSibmitHandler}>
      <label>Nombre</label>
      <input name="firstName" type="text" />
      <br />
      <label>Apellido</label>
      <input name="lastName" type="text" />
      <br />
      <label>Email</label>
      <input name="email" type="text" />
      <br />
      <button type="submit">Registrar</button>
    </form>
  );
};

export default NewUserPage;
