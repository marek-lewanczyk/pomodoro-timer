import { useSettings } from '@/context/SettingsContext';
import { useEffect } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import FormikInputField from '@/components/UI/FormikInputField/FormikInputField.tsx';
import Button from '@/components/UI/Button/Button.tsx';
import RangeField from '@/components/UI/RangeField/RangeField.tsx';

const SettingsSchema = Yup.object().shape({
    workDuration: Yup.number().min(15).max(60).required(),
    shortBreakDuration: Yup.number().min(5).max(15).required(),
    longBreakDuration: Yup.number().min(15).max(30).required(),
    soundEnabled: Yup.boolean(),
    soundVolume: Yup.number().min(0).max(100).required(),
    theme: Yup.string().oneOf(['system', 'light', 'dark']).required()
});

export default function SettingsPage() {
    const { settings, updateSettings } = useSettings();

    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove('light', 'dark');

        if (settings.theme === 'system') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            root.classList.add(prefersDark ? 'dark' : 'light');
        } else {
            root.classList.add(settings.theme);
        }
    }, [settings.theme]);

    return (
        <div className="flex flex-col p-4 font-vt323 max-w-xl mx-auto gap-4">
            <h1 className="flex justify-center text-3xl">Settings</h1>

            <Formik initialValues={settings} validationSchema={SettingsSchema} onSubmit={values => updateSettings(values)}>
                {({ values }) => (
                    <Form className="space-y-4">
                        <FormikInputField fieldType="number" label="Work duration (min)" name="workDuration" min={15} max={60} />

                        <FormikInputField fieldType="number" label="Short break duration (min)" name="shortBreakDuration" min={3} max={15} />

                        <FormikInputField fieldType="number" label="Long break duration (min)" name="longBreakDuration" min={10} max={30} />

                        <div className="flex items-center gap-2">
                            <Field
                                type="checkbox"
                                name="soundEnabled"
                                className="appearance-none w-6 h-6 border border-primary bg-secondary checked:bg-primary checked:border-primary checked:text-secondary cursor-pointer shadow transition duration-100 dark:border-secondary dark:bg-primary dark:checked:bg-secondary dark:checked:border-secondary dark:checked:text-secondary dark:shadow-secondary"
                            />
                            <label htmlFor="soundEnabled">Turning sound on/off</label>
                        </div>

                        <RangeField name="soundVolume" label="Volume" value={values.soundVolume} />

                        <div>
                            <label className="block mb-1">Theme</label>
                            <Field as="select" name="theme" className="w-full border border-black p-2 shadow-[3px_3px_0px_black]">
                                <option value="system">Auto</option>
                                <option value="light">Light</option>
                                <option value="dark">Dark</option>
                            </Field>
                        </div>
                        <div className="flex justify-center">
                            <Button type="submit">
                                <span className="px-2">Save</span>
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
