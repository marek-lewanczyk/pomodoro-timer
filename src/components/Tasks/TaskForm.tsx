import {useTasks} from '@/context/TaskContext'
import {PlusIcon} from "@heroicons/react/16/solid";
import IconButton from "@/components/UI/IconButton.tsx";
import {Form, Formik} from 'formik'
import FormikInputField from '@/components/UI/FormikInputField'

export default function TaskForm() {
    const { addTask } = useTasks()

    return (
        <Formik
            initialValues={{ title: '' }}
            onSubmit={(values, { resetForm }) => {
                if (values.title.trim()) {
                    addTask(values.title.trim())
                    resetForm()
                }
            }}
        >
            <Form className="w-full flex gap-4">
                <FormikInputField label={'Add new task'} name={'newTask'} fieldType={'text'} />
                <IconButton type="submit" title="Dodaj">
                    <PlusIcon className="h-8 w-8" />
                </IconButton>
            </Form>
        </Formik>
    )
}
