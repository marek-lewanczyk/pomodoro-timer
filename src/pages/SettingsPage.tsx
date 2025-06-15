import {Link} from "react-router";
import {useSettings} from "@/context/SettingsContext";
import {useEffect} from "react";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import FormikInputField from "@/components/UI/FormikInputField.tsx";

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
    <div className="p-4 font-vt323 max-w-xl mx-auto">
      <div>
        <Link
          to="/"
          className="text-blue-500 hover:underline mb-4 inline-block"
        >
          ⟵ Powrót do strony głównej
        </Link>
        <h1 className="text-3xl mb-4">Ustawienia</h1>
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

            <div>
              <label className="block mb-1">
                Głośność ({values.soundVolume}%)
              </label>
              <Field
                type="range"
                name="soundVolume"
                min={0}
                max={100}
                className="w-full"
              />
            </div>

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

            <button
              type="submit"
              className="px-4 py-2 font-pixel border border-black shadow-[3px_3px_0px_black] bg-black text-white hover:bg-white hover:text-black"
            >
              Zapisz
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
