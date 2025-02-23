import AlertWithToggleSection from "@/components/organisms/dashboard/alertWithToggleSection";

export default async function Contact() {
  return (
    <div className="flex flex-col gap-6">
      <AlertWithToggleSection />
      <h1 className="text-4xl font-bold">Contact</h1>
    </div>
  );
}
