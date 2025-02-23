import AlertWithToggleSection from "@/components/organisms/dashboard/alertWithToggleSection";

export default async function About() {
  return (
    <div className="flex flex-col gap-6">
      <AlertWithToggleSection />
      <h1 className="text-4xl font-bold">About</h1>
    </div>
  );
}
