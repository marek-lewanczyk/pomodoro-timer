import {useSettings} from "@/context/SettingsContext";
import {useEffect} from "react";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import FormikInputField from "@/components/UI/FormikInputField.tsx";
import Button from "@/components/UI/Button.tsx";
import {ArrowTurnLeftUpIcon} from "@heroicons/react/16/solid";
import RangeField from "@/components/UI/RangeField/RangeField.tsx";

const SettingsSchema = Yup.object().shape({
  workDuration: Yup.number().min(15).max(60).required(),
  shortBreakDuration: Yup.number().min(5).max(15).required(),
  longBreakDuration: Yup.number().min(15).max(30).required(),
  soundEnabled: Yup.boolean(),
  soundVolume: Yup.number().min(0).max(100).required(),
  theme: Yup.string().oneOf(["system", "light", "dark"]).required(),
});

export default function SettingsPage() {
  const { settings, updateSettings } = useSettings();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");

    if (settings.theme === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      root.classList.add(prefersDark ? "dark" : "light");
    } else {
      root.classList.add(settings.theme);
    }
  }, [settings.theme]);

  return (
    <div className="flex flex-col p-4 font-vt323 max-w-xl mx-auto gap-4">
      <div className="flex items-center">
        <Button to="/">
          <ArrowTurnLeftUpIcon className="w-8 h-8" />
        </Button>
        <h1 className="text-3xl m-4">Ustawienia</h1>
      </div>

      <Formik
        initialValues={settings}
        validationSchema={SettingsSchema}
        onSubmit={(values) => updateSettings(values)}
      >
        {({ values }) => (
          <Form className="space-y-4">
            <FormikInputField
              fieldType="number"
              label="Czas pracy"
              name="workDuration"
              min={15}
              max={60}
            />

            <FormikInputField
              fieldType="number"
              label="Krótka przerwa"
              name="shortBreakDuration"
              min={3}
              max={15}
            />

            <FormikInputField
              fieldType="number"
              label="Długa przerwa"
              name="longBreakDuration"
              min={10}
              max={30}
            />

            <div className="flex items-center gap-2">
              <Field
                type="checkbox"
                name="soundEnabled"
                className="w-5 h-5 border border-black shadow-[2px_2px_0px_black]"
              />
              <label htmlFor="soundEnabled">
                Włącz powiadomienia dźwiękowe
              </label>
            </div>

            <RangeField
                name="soundVolume"
                label="Głośność"
                value={values.soundVolume}
            />

            <div>
              <label className="block mb-1">Motyw</label>
              <Field
                as="select"
                name="theme"
                className="w-full border border-black p-2 shadow-[3px_3px_0px_black]"
              >
                <option value="system">Systemowy</option>
                <option value="light">Jasny</option>
                <option value="dark">Ciemny</option>
              </Field>
            </div>

            <Button type="submit">
                <span className="px-2">Zapisz</span>
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
