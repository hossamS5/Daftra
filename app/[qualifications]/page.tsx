import AlertWithToggleSection from "@/components/organisms/dashboard/alertWithToggleSection";

export default async function Qualifications({
  params,
}: {
  params: Promise<{ qualifications: string }>;
}) {
  const qualifications = (await params).qualifications;
  return (
    <div className="flex flex-col gap-6">
      <AlertWithToggleSection />
      <h1 className="text-4xl font-bold">Qualifications {qualifications}</h1>
    </div>
  );
}
