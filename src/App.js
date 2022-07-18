import Button from './components/Button';
import CheckBox from './components/CheckBox';
import Form from './components/Form';
import Input from './components/Input';
import Select from './components/Select';

import { useForm } from 'react-hook-form';
import { reset } from 'mockdate';

const App = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="App">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('FirstName', {
            required: true,
          })}
        />
        <div style={{ height: 40 }}>{errors?.FirstName && <p>Error!</p>}</div>
        <Input placeholder="LastName" />
        <Input placeholder="Number" type="number" />
        <Input placeholder="Email" type="email" />
        <Select name="Gender" options={['man', 'woman']} />
        <Input placeholder="Address" />
        <CheckBox label="Privacy policy" />
        <Input placeholder="Register" type="submit" />
        <Button value="Register" />
      </Form>
    </div>
  );
};

export default App;
