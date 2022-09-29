import { AddIcon, CloseIcon, DeleteIcon } from './components/Icons';
import { Button, ButtonIcon } from './components/Button';

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <div className='flex items-center space-x-16 mt-32'>
        <Button startIcon={<AddIcon />}>Label</Button>
        <Button variant='outlined' endIcon={<CloseIcon />}>
          Label
        </Button>
        <Button size='sm' endIcon={<CloseIcon />}>
          Label
        </Button>
        <Button size='lg' endIcon={<CloseIcon />}>
          Label
        </Button>
        <ButtonIcon size='xs' icon={<AddIcon />} />
        <ButtonIcon size='sm' icon={<AddIcon />} />
        <ButtonIcon size='md' icon={<AddIcon />} />
        <ButtonIcon size='lg' icon={<AddIcon />} />
      </div>
    </>
  );
}

export default App;
