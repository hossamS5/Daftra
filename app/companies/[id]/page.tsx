import AlertWithToggleSection from "@/components/organisms/dashboard/alertWithToggleSection";

export default async function Companies({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return (
    <div className="flex flex-col gap-6">
      <AlertWithToggleSection />
      <h1 className="text-4xl font-bold">Companies {id}</h1>
    </div>
  );
}
