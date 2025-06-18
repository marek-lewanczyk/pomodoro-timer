import {PlusIcon} from "@heroicons/react/16/solid";
import {Form, Formik} from 'formik'

import {useTasks} from '@/context/TaskContext'
import Button from "@/components/UI/Button.tsx";
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
            <Form className="w-full flex gap-4 items-center">
                <div className="flex-grow bg-secondary dark:bg-primary">
                    <FormikInputField
                        name="title"
                        fieldType="text"
                    />
                </div>
                <Button type="submit" title="Add">
                    <PlusIcon className="h-8 w-8" />
                </Button>
            </Form>
        </Formik>
    )
}
