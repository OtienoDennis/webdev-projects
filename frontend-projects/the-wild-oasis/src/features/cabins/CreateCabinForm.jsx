import { useForm } from 'react-hook-form';

import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Textarea from '../../ui/Textarea';
import FormRow from '../../ui/FormRow';

import { useCreateCabin } from './useCreateCabin';
import { useEditCabin } from './useEditCabin';

function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { isCreating, createCabin } = useCreateCabin();
  const { isEditing, editCabin } = useEditCabin();

  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    const image = typeof data.image === 'string' ? data.image : data.image[0];
    if (isEditSession)
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createCabin({ ...data, image: image }, { onSuccess: (data) => reset() });
  }

  function onErrors(errors) {
    console.log(errors);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onErrors)}
      type={onCloseModal ? 'modal' : 'regular'}>
      <FormRow label='Cabin name' error={errors?.name?.message}>
        <Input
          type='text'
          id='name'
          disabled={isWorking}
          {...register('name', { required: 'This input is required!' })}
        />
      </FormRow>

      <FormRow label='Maximum capacity' error={errors?.maxCapacity?.message}>
        <Input
          type='number'
          id='maxCapacity'
          disabled={isWorking}
          {...register('maxCapacity', {
            required: 'This input is required!',
            min: {
              value: 1,
              message: 'Capacity should be at least 1',
            },
          })}
        />
      </FormRow>
      <FormRow label='Regular price' error={errors?.regularPrice?.message}>
        <Input
          type='number'
          id='regularPrice'
          disabled={isWorking}
          {...register('regularPrice', {
            required: 'This input is required!',
            min: {
              value: 1,
              message: 'Capacity should be at least 1',
            },
          })}
        />
      </FormRow>
      <FormRow label='Discount' error={errors?.discount?.message}>
        <Input
          type='number'
          id='discount'
          disabled={isWorking}
          defaultValue={0}
          {...register('discount', {
            required: 'This input is required!',
            validate: (value) =>
              value <= getValues().regularPrice ||
              'Discount should be less than the regular price',
          })}
        />
      </FormRow>
      <FormRow
        label='Description for website'
        error={errors?.description?.message}>
        <Textarea
          type='number'
          disabled={isWorking}
          id='description'
          defaultValue=''
          {...register('description', { required: 'This input is required!' })}
        />
      </FormRow>
      <FormRow label='Cabin photo' error={errors?.image?.message}>
        <FileInput
          id='image'
          disabled={isWorking}
          accept='image/*'
          {...register('image', {
            required: isEditSession ? false : 'This input is required!',
          })}
        />
      </FormRow>
      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation='secondary'
          type='reset'
          disabled={isWorking}
          onClick={() => onCloseModal?.()}>
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? 'Edit Cabin' : 'Create new cabin'}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
