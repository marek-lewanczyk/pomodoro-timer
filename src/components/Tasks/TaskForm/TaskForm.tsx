import { PlusIcon } from '@heroicons/react/16/solid';
import { Form, Formik } from 'formik';

import { useTasks } from '@/context/TaskContext.tsx';
import Button from '@/components/UI/Button/Button.tsx';
import FormikInputField from '@/components/UI/FormikInputField/FormikInputField.tsx';

export default function TaskForm() {
    const { addTask } = useTasks();

    return (
        <Formik
            initialValues={{ title: '' }}
            onSubmit={(values, { resetForm }) => {
                if (values.title.trim()) {
                    addTask(values.title.trim());
                    resetForm();
                }
            }}
        >
            <Form className="flex w-full items-center gap-4">
                <div className="bg-secondary dark:bg-primary flex-grow">
                    <FormikInputField name="title" fieldType="text" />
                </div>
                <Button type="submit" title="Add">
                    <PlusIcon className="h-8 w-8" />
                </Button>
            </Form>
        </Formik>
    );
}
